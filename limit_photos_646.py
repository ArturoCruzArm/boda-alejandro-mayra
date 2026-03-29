import re

# Leer el archivo selector.js
with open(r"D:\eventos\boda-alejandro-mayra\selector.js", 'r', encoding='utf-8') as f:
    content = f.read()

# Encontrar la sección de fotos
pattern = r"const photos = \[(.*?)\];"
match = re.search(pattern, content, re.DOTALL)

if match:
    photos_section = match.group(1)
    # Extraer todas las fotos
    photos = re.findall(r"'fotos/([^']+)'", photos_section)

    print(f"Total de fotos encontradas: {len(photos)}")

    # Tomar solo las primeras 646
    photos_to_keep = photos[:646]
    photos_to_remove = photos[646:]

    print(f"Fotos a mantener: {len(photos_to_keep)}")
    print(f"Fotos a eliminar: {len(photos_to_remove)}")

    if photos_to_remove:
        print("\nFotos que se eliminarán:")
        for photo in photos_to_remove:
            print(f"  - {photo}")

    # Crear nueva lista de fotos
    new_photos_list = "const photos = [\n"
    for i, photo in enumerate(photos_to_keep):
        new_photos_list += f"    'fotos/{photo}'"
        if i < len(photos_to_keep) - 1:
            new_photos_list += ","
        new_photos_list += "\n"
    new_photos_list += "];"

    # Reemplazar en el contenido
    new_content = re.sub(pattern, new_photos_list, content, flags=re.DOTALL)

    # Guardar el archivo
    with open(r"D:\eventos\boda-alejandro-mayra\selector.js", 'w', encoding='utf-8') as f:
        f.write(new_content)

    print("\n✓ selector.js actualizado con 646 fotos")

    # Guardar lista de archivos a eliminar
    with open(r"D:\eventos\boda-alejandro-mayra\fotos_a_eliminar.txt", 'w', encoding='utf-8') as f:
        for photo in photos_to_remove:
            f.write(f"fotos/{photo}\n")

    print(f"✓ Lista de archivos a eliminar guardada en fotos_a_eliminar.txt")
