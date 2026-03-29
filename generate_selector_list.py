import os
import json

# Directorio de fotos
photos_dir = r"D:\eventos\boda-alejandro-mayra\fotos"
output_file = r"D:\eventos\boda-alejandro-mayra\selector_photos.txt"

print("Generando listado de fotos para selector...")
print(f"Directorio: {photos_dir}")
print("-" * 50)

# Listar todos los archivos WebP y ordenarlos
webp_files = sorted([f for f in os.listdir(photos_dir) if f.lower().endswith('.webp')])

total_files = len(webp_files)
print(f"Total de fotos WebP encontradas: {total_files}\n")

# Generar el listado en formato JavaScript
js_array = "const photos = [\n"
for i, filename in enumerate(webp_files):
    js_array += f"    'fotos/{filename}'"
    if i < len(webp_files) - 1:
        js_array += ","
    js_array += "\n"
js_array += "];"

# Guardar el listado
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(js_array)

print(f"Listado generado exitosamente!")
print(f"Total de fotos: {total_files}")
print(f"Archivo guardado en: {output_file}")
print("\nPuedes copiar el contenido de este archivo al inicio de selector.js")
