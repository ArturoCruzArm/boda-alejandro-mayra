import os
from PIL import Image
from pillow_heif import register_heif_opener

# Registrar el opener de HEIF para que PIL pueda leer archivos HEIC
register_heif_opener()

# Rutas
source_dir = r"F:\2025\12\13\Alejandro y Mayra\fotos\iphone"
dest_dir = r"D:\eventos\boda-alejandro-mayra\fotos"

# Crear directorio de destino si no existe
os.makedirs(dest_dir, exist_ok=True)

# Contador
converted = 0
errors = 0

print("Iniciando conversion de fotos del iPhone a WebP...")
print(f"Origen: {source_dir}")
print(f"Destino: {dest_dir}")
print("-" * 50)

# Listar todos los archivos de imagen (JPG, JPEG, HEIC, HEIF)
image_files = [f for f in os.listdir(source_dir)
               if f.lower().endswith(('.jpg', '.jpeg', '.heic', '.heif'))]
total_files = len(image_files)

print(f"Total de fotos a convertir: {total_files}\n")

for i, filename in enumerate(image_files, 1):
    try:
        # Ruta completa del archivo fuente
        source_path = os.path.join(source_dir, filename)

        # Nombre del archivo de destino (cambiar extension a .webp)
        base_name = os.path.splitext(filename)[0]
        webp_filename = base_name + '.webp'
        dest_path = os.path.join(dest_dir, webp_filename)

        # Abrir imagen
        with Image.open(source_path) as img:
            # IMPORTANTE: Aplicar la orientacion EXIF
            # Esto corrige la rotacion basada en los datos EXIF de la camara
            try:
                # Obtener la orientacion EXIF
                exif = img.getexif()
                if exif is not None:
                    # Tag 274 es la orientacion
                    orientation = exif.get(274, 1)

                    # Aplicar transformacion segun orientacion
                    if orientation == 2:
                        img = img.transpose(Image.FLIP_LEFT_RIGHT)
                    elif orientation == 3:
                        img = img.rotate(180, expand=True)
                    elif orientation == 4:
                        img = img.transpose(Image.FLIP_TOP_BOTTOM)
                    elif orientation == 5:
                        img = img.transpose(Image.FLIP_LEFT_RIGHT).rotate(270, expand=True)
                    elif orientation == 6:
                        img = img.rotate(270, expand=True)
                    elif orientation == 7:
                        img = img.transpose(Image.FLIP_LEFT_RIGHT).rotate(90, expand=True)
                    elif orientation == 8:
                        img = img.rotate(90, expand=True)
            except (AttributeError, KeyError, IndexError):
                # Si no hay datos EXIF, continuar sin correccion
                pass

            # Convertir a RGB si es necesario
            if img.mode in ('RGBA', 'LA', 'P'):
                # Crear un fondo blanco
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[3] if img.mode == 'RGBA' else None)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')

            # Redimensionar si es muy grande (mantener max 4000px en el lado mas largo)
            max_dimension = 4000
            if max(img.size) > max_dimension:
                ratio = max_dimension / max(img.size)
                new_size = tuple(int(dim * ratio) for dim in img.size)
                img = img.resize(new_size, Image.Resampling.LANCZOS)

            # Guardar como WebP con calidad 85
            img.save(dest_path, 'WEBP', quality=85, method=6)

        converted += 1

        # Mostrar progreso cada 20 fotos
        if i % 20 == 0 or i == total_files:
            print(f"Progreso: {i}/{total_files} fotos convertidas ({(i/total_files)*100:.1f}%)")

    except Exception as e:
        errors += 1
        print(f"Error al convertir {filename}: {str(e)}")

print("\n" + "-" * 50)
print(f"Conversion completada!")
print(f"Convertidas: {converted}")
if errors > 0:
    print(f"Errores: {errors}")
print(f"Las fotos estan en: {dest_dir}")
