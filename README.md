# Fake Store using React

## Descripción

Este proyecto es una aplicación web desarrollada con React y Vite que consume datos de la [Fake Store API](https://fakestoreapi.com/). La Fake Store API proporciona una API REST gratuita para prototipos y pruebas, ofreciendo datos ficticios de productos, categorías, usuarios, etc.

**Características principales (ejemplo):**

* Muestra una lista de productos obtenidos de la API.
* Permite ver los detalles de un producto específico.
* Crear, editar y borrar productos (fake).

## Instalación

Sigue estos pasos para ejecutar el proyecto localmente:

1.  **Clona el repositorio (si aplica):**
    ```bash
    git clone [https://github.com/tomascornelles/fakeStoreReact](https://github.com/tomascornelles/fakeStoreReact)
    cd fakeStoreReact
    ```

2.  **Instala las dependencias:**
    Asegúrate de tener Node.js y npm (o yarn/pnpm) instalados en tu sistema. Ejecuta el siguiente comando en la raíz del proyecto:
    ```bash
    npm install
    ```

## Comandos `npm run`

Estos son los scripts definidos en el archivo `package.json`:

* `dev`: Inicia el servidor de desarrollo de Vite. Abre la aplicación en tu navegador (generalmente en `http://localhost:5173/`).
    ```bash
    npm run dev
    ```

* `build`: Construye la aplicación para producción en la carpeta `dist`.
    ```bash
    npm run build
    ```

* `preview`: Inicia un servidor local para previsualizar la construcción de producción.
    ```bash
    npm run preview
    ```

* `lint`: (Si configuraste linting con ESLint) Analiza el código en busca de problemas de estilo y posibles errores.
    ```bash
    npm run lint
    ```

## Uso

Una vez que hayas instalado las dependencias, puedes iniciar el servidor de desarrollo con `npm run dev`. Esto abrirá la aplicación en tu navegador, donde podrás interactuar con ella y ver los datos de la Fake Store API mostrados en la interfaz.

Para crear una versión optimizada para producción, utiliza el comando `npm run build`. Los archivos estáticos generados se encontrarán en la carpeta `dist`.

## Tecnologías Utilizadas

* [React](https://react.dev/)
* [Vite](https://vitejs.dev/)
* [Fake Store API](https://fakestoreapi.com/)
* [PicoCSS](https://picocss.com/)

## Créditos

* Este proyecto utiliza la [Fake Store API](https://fakestoreapi.com/) para obtener datos de prueba.

