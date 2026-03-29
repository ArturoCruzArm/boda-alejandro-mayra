import os
from PIL import Image
import shutil

# Rutas
source_dir = r"F:\2025\12\13\Alejandro y Mayra\fotos"
dest_dir = r"D:\eventos\boda-alejandro-mayra\fotos"

# Crear directorio de destino si no existe
os.makedirs(dest_dir, exist_ok=True)

# Contador
converted = 0
errors = 0

print("Iniciando conversión de fotos a WebP...")
print(f"Origen: {source_dir}")
print(f"Destino: {dest_dir}")
print("-" * 50)

# Listar todos los archivos JPG
jpg_files = [f for f in os.listdir(source_dir) if f.lower().endswith(('.jpg', '.jpeg'))]
total_files = len(jpg_files)

print(f"Total de fotos a convertir: {total_files}\n")

for i, filename in enumerate(jpg_files, 1):
    try:
        # Ruta completa del archivo fuente
        source_path = os.path.join(source_dir, filename)

        # Nombre del archivo de destino (cambiar extensión a .webp)
        webp_filename = os.path.splitext(filename)[0] + '.webp'
        dest_path = os.path.join(dest_dir, webp_filename)

        # Abrir imagen y convertir a WebP
        with Image.open(source_path) as img:
            # Convertir a RGB si es necesario (algunas imágenes pueden estar en otros modos)
            if img.mode in ('RGBA', 'LA', 'P'):
                img = img.convert('RGB')

            # Guardar como WebP con calidad 85 (buen balance entre calidad y tamaño)
            img.save(dest_path, 'WEBP', quality=85, method=6)

        converted += 1

        # Mostrar progreso cada 20 fotos
        if i % 20 == 0 or i == total_files:
            print(f"Progreso: {i}/{total_files} fotos convertidas ({(i/total_files)*100:.1f}%)")

    except Exception as e:
        errors += 1
        print(f"Error al convertir {filename}: {str(e)}")

print("\n" + "-" * 50)
print(f"Conversión completada!")
print(f"✓ Convertidas: {converted}")
if errors > 0:
    print(f"✗ Errores: {errors}")
print(f"Las fotos están en: {dest_dir}")
