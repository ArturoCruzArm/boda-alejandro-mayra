import re

# Archivos
selector_js = r"D:\eventos\boda-alejandro-mayra\selector.js"
photos_list = r"D:\eventos\boda-alejandro-mayra\selector_photos.txt"

print("Actualizando selector.js...")

# Leer el listado de fotos
with open(photos_list, 'r', encoding='utf-8') as f:
    new_photos_list = f.read()

# Leer el archivo JavaScript
with open(selector_js, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Reemplazar el listado de fotos
# Buscar desde "const photos = [" hasta "];"
pattern = r'const photos = \[[\s\S]*?\];'
js_content = re.sub(pattern, new_photos_list, js_content)

# Reemplazar el STORAGE_KEY
js_content = js_content.replace(
    "const STORAGE_KEY = 'boda_juan_manuel_luz_mariana_photo_selections';",
    "const STORAGE_KEY = 'boda_alejandro_mayra_photo_selections';"
)

# Reemplazar los textos de exportación
js_content = js_content.replace(
    "evento: 'Boda Juan Manuel & Luz Mariana'",
    "evento: 'Boda Alejandro & Mayra'"
)

js_content = js_content.replace(
    "summary = '💒 SELECCIÓN DE FOTOS - BODA JUAN MANUEL & LUZ MARIANA\\n';",
    "summary = '💒 SELECCIÓN DE FOTOS - BODA ALEJANDRO & MAYRA\\n';"
)

js_content = js_content.replace(
    "a.download = `seleccion-fotos-boda-juan-manuel-luz-mariana-${new Date().toISOString().split('T')[0]}.json`;",
    "a.download = `seleccion-fotos-boda-alejandro-mayra-${new Date().toISOString().split('T')[0]}.json`;"
)

# Guardar el archivo actualizado
with open(selector_js, 'w', encoding='utf-8') as f:
    f.write(js_content)

print("selector.js actualizado exitosamente!")
print(f"Archivo guardado en: {selector_js}")
