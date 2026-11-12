# Portafolio de Ricardo Landívar

Portafolio académico y profesional de Ricardo Sebastián Landívar García, Ingeniero de Software enfocado en desarrollo web y fundador de Techlab.ec.

## Visualización

Abrir `index.html` en un navegador. También se puede abrir la carpeta en Visual Studio Code y utilizar Live Server. No requiere instalar paquetes.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Google Fonts (Inter y Sora)

## Contenido

- Inicio simplificado con fotografía, nombre, enfoque profesional y llamadas a la acción.
- Sección Sobre mí con perfil, trayectoria e intereses.
- Habilidades agrupadas por áreas.
- Cuatro proyectos, con CHAKAL destacado en primer lugar por combinar adaptación visual e integraciones de formularios, pedidos por WhatsApp y correo; luego Techlab.ec, FormLab y este portafolio.
- Design System con colores, tipografía, espaciados, botones, badges, navegación y card reutilizable.
- Contacto mediante correo, Instagram y GitHub; se incluyó el espacio visual de LinkedIn en el pie, pendiente de la URL real del perfil.

Por indicación actualizada del docente, se omite el formulario. No se incluyen inputs ni textarea en el catálogo de componentes, ya que no se utilizan en el sitio.

## Interacciones

1. Menú desplegable en pantallas pequeñas, cierre al navegar y mediante Escape.
2. Modo oscuro por defecto; cambio a tema claro/oscuro, con persistencia mediante `localStorage` cuando el navegador lo permite.
3. Filtro de proyectos por tecnología, con contador de resultados.

## Organización

| Ruta | Contenido |
| --- | --- |
| `index.html` | Estructura y contenido |
| `css/styles.css` | Variables, componentes y diseño responsive |
| `js/script.js` | Menú, tema y filtros |
| `img/` | Avatar, favicon e imágenes de proyectos |
| `proyectos/techlab/` | Landing original en HTML y CSS, disponible como demostración local |
| `docs/` | Capturas anteriores del resultado |

## Diseño responsive

Diseño mobile-first con ajustes específicos para móvil, tablet y escritorio. En tablet se priorizan composiciones de una o dos columnas y navegación compacta; desde `70rem` se mantiene la composición de escritorio con tres columnas donde corresponde. Se utiliza Grid para distribuir secciones y Flexbox para acciones y navegación.

## Publicación en GitHub Pages

Nombre de repositorio recomendado: `portafolio-ricardo`.

Después de subir el código a un repositorio público, seleccionar:

**Settings → Pages → Deploy from a branch → main → / (root) → Save**

Enlaces previstos:

- Repositorio: `https://github.com/ricardolandivar69/portafolio-ricardo`
- Página: `https://ricardolandivar69.github.io/portafolio-ricardo/`

Si el nombre del repositorio cambia, hay que actualizar también el enlace al repositorio incluido dentro de `index.html`.

## Proyectos e imágenes

- **TechLab**: captura real de la landing HTML/CSS incluida en `proyectos/techlab/`.
- **FormLab**: práctica experimental de registro e inicio de sesión con HTML5, CSS3 y JavaScript, validaciones del lado del cliente y diseño responsive.
- **CHAKAL**: imagen proporcionada por Ricardo. El texto refleja su descripción del trabajo realizado: ajustes de interfaz, formularios de pedidos de Latinoamérica, generación de mensaje para WhatsApp con la información completada, referencias/IDs y flujo de correo para imágenes. El código fuente de CHAKAL no forma parte de este repositorio.
- **Portafolio**: captura actualizada de esta misma versión, con tema oscuro.
- **Foto de perfil**: fotografía incluida en `img/foto-perfil.jpg`.

## Comprobación antes de entregar

- Abrir el repositorio y la página pública desde una ventana privada.
- Revisar carga de estilos, JavaScript, fuentes e imágenes.
- Probar navegación, menú móvil, cambio de tema y filtros.
- Comprobar teléfono, tableta y escritorio.
- Revisar la consola del navegador y confirmar que no hay errores.

## Autor y contacto

Ricardo Sebastián Landívar García · `techlab.ec@gmail.com`


## LinkedIn (pendiente de URL)

El pie de página incluye el icono de LinkedIn sin enlace activo para evitar dirigir a un perfil equivocado. Cuando el propietario proporcione su URL pública real, sustituir el `span.red-social-pendiente` en `index.html` por un enlace `<a class="red-social" href="URL_LINKEDIN" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Ricardo Landívar" title="LinkedIn">...svg...</a>`. El SVG interior se conserva sin cambios.

## Alcance de las descripciones

Los detalles funcionales de CHAKAL se basan en la información proporcionada por el autor. Este repositorio únicamente contiene el portafolio, no el código ni las configuraciones privadas de CHAKAL.
