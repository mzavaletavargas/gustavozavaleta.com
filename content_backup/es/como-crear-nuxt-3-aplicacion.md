Nuxt 3 acaba de anunciar su versión `release candidate 2` (RC-2) __link__, luego de 3 semanas de su primer release __confirmar__, vamos a usar nuxt3 para desplegar una apicación en netlify y tailwind. La idea final es crear una aplicación web 3 compatible con alguna blockchain cómo ethereum.

## Que es Nuxt?

Nuxt es un framework que permite generar contenido statico, inciiar un servidor SSR o haccer un hibrido. cada uno tiene sus ventajas, voy a colocar algunas caracteristicas principales y casos cuando deberias usarlo

### Contenido estatico

se generan archivos cómo: HTML, JS, CSS para que tu web pueda funcionar, fácil para poder ser desplegado en cualquier hosting, github pages o Netlify entre otros.

Ventajas:
- Fácil de desplegar.
- Consume pocos recursos.
- 

Desventajas
- __buscar__

### server side rendering

Lá página con todos sus elementos es mostrada desde el servidor, reduciendo el tiempo de procesamiento el cliente

Ventajas:
- Páginas rápidas
- Se optimiza la rapidez de vista de elementos
- __buscar__

### Híbrido

Lo que promete es traer lo mejor de servir contenido estático  y hacer server side rendering.

## ¿Qué ofrece Nuxt 3?

__ventajasnuxt3__


## ¿Que es Tailwind?

Es un pre procesador de css, contiene una gama muy variada de opciones para poder maquetar y agregar css responsive rápidamente. da ventajas bastante interesante cómo dark mode, __ventajas__

## Generando landpage personal

* Nuxt 3 al tiempo de que se escribe este artico se encuentra en su versión 3-RC2, lo que significa que pueden haber varios cambios en cómo se definen nombres de carpetas, funciones entre otros hasta el día de su publicación final. Estaré sacando una versión actualizada a penas se libere la versión final.

Estos pasos inciales son de la documentación oficial https://v3.nuxtjs.org/getting-started/quick-start

Generar proyecto base con npx.

```
npx nuxi init nuxt-app
cd nuxt-app
```


Instalar dependencias

```
yarn install
npm install 
pnpm install --shamefully-hoist
```

Abrir nuestro proyecot en nuestro editor y usar `yarn dev, npm run dev, pnpm run dev`


### Estructura base de proyecto

```
nuxt-app/
┣ node_modules/ # Dependencias
┣ .gitignore # lista de archivos/carpetas a ignorar
┣ README.md # Documentación base
┣ app.vue # Nuestra app inicial
┣ nuxt.config.ts # Archivo de configuración para agregar módulos y configuraciones de nuxt.
┣ package.json 
┗ tsconfig.json
```
