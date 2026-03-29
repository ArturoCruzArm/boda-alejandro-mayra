import os
import json
from datetime import datetime

# Rutas
photos_dir = r"D:\eventos\boda-alejandro-mayra\fotos"
output_file = r"D:\eventos\boda-alejandro-mayra\fotos.json"

print("Generando archivo fotos.json...")
print(f"Directorio: {photos_dir}")
print("-" * 50)

# Listar todos los archivos WebP
webp_files = [f for f in os.listdir(photos_dir) if f.lower().endswith('.webp')]
webp_files.sort()  # Ordenar alfabéticamente

total_files = len(webp_files)
print(f"Total de fotos WebP encontradas: {total_files}\n")

# Determinar categorías basadas en el nombre del archivo o metadata
# Para esta implementación, vamos a usar rangos de nombres de archivo
# DJI_ = fotos de drone (ceremonia)
# DSC_7119 a DSC_7300 = ceremonia
# DSC_7301 a DSC_7482 = fiesta

def determine_category(filename):
    """Determina la categoría de la foto basándose en el nombre"""
    if filename.startswith('DJI_'):
        return 'ceremonia'
    elif filename.startswith('DSC_'):
        # Extraer número
        try:
            number = int(filename.split('_')[1].split('.')[0])
            if number <= 7300:
                return 'ceremonia'
            else:
                return 'fiesta'
        except:
            return 'ceremonia'  # Por defecto
    else:
        return 'ceremonia'  # Por defecto

# Crear estructura de datos
photos_data = {
    "title": "Fotos de la Boda de Alejandro y Mayra",
    "date": "2025-12-13",
    "total": total_files,
    "photos": []
}

# Agregar cada foto
for i, filename in enumerate(webp_files, 1):
    category = determine_category(filename)
    photo_path = f"fotos/{filename}"

    photo_data = {
        "id": i,
        "name": filename,
        "src": photo_path,
        "thumbnail": photo_path,  # Usar la misma imagen como thumbnail
        "category": category
    }

    photos_data["photos"].append(photo_data)

    # Mostrar progreso cada 50 fotos
    if i % 50 == 0 or i == total_files:
        print(f"Procesadas: {i}/{total_files} fotos ({(i/total_files)*100:.1f}%)")

# Guardar archivo JSON
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(photos_data, f, ensure_ascii=False, indent=2)

print("\n" + "-" * 50)
print(f"✓ Archivo JSON generado exitosamente!")
print(f"✓ Total de fotos: {total_files}")

# Contar por categoría
ceremonia_count = sum(1 for p in photos_data["photos"] if p["category"] == "ceremonia")
fiesta_count = sum(1 for p in photos_data["photos"] if p["category"] == "fiesta")

print(f"✓ Ceremonia: {ceremonia_count} fotos")
print(f"✓ Fiesta: {fiesta_count} fotos")
print(f"\nArchivo guardado en: {output_file}")
