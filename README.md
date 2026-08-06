# Invitación XV Emily Isabella

Proyecto completo en HTML, CSS y JavaScript.

## Archivos principales

- `index.html`: invitación.
- `generador.html`: generador de enlaces personalizados.
- `css/styles.css`: todo el diseño.
- `js/app.js`: pases, cuenta regresiva, música y WhatsApp.
- `js/generador.js`: crea enlaces.
- `assets/musica.mp3`: agrega aquí la canción.

## Cómo probarlo

Abre `index.html` en tu navegador.

Ejemplo con 4 pases:

https://invitacion-emily-isabella.onrender.com/?pases=4

Ejemplo con invitado:

https://invitacion-emily-isabella.onrender.com/?pases=4&invitado=Familia%20Hernandez

## Cambios necesarios

En `js/app.js`, cambia:

```js
const whatsappNumber = "5210000000000";
```

por el número real, usando código de país y sin signos.

La ubicación ya está configurada con el enlace proporcionado de Google Maps.

## Música

Coloca un archivo MP3 en:

`assets/musica.mp3`

## Subir a GitHub

```bash
git init
git add .
git commit -m "Invitación completa Emily Isabella"
git branch -M main
git remote add origin URL_DE_TU_REPOSITORIO
git push -u origin main
```

## Publicar en Render

Crea un sitio estático:

- Build command: dejar vacío
- Publish directory: `.`
