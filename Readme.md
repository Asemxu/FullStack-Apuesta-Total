# FullStack Apuesta Total

![Apuesta total](https://www.apuestasdeportivas.pe/wp-content/uploads/sites/3/2022/11/Top-banner-Apuesta-Total-min.png)

# STACK
1. SocketIO
    - Notificaciones  -> (FrontEnd y BackEnd)

2. FrontEnd 
    - Astro
    - Astro: View Transitions
    - Tailwind CSS
    - NanoStores
    - TypeScript

3. BackEnd
    - Express
    - JavaScript
    - Sequelize
    - JWT
    - Zod (Validation)

4. Base de datos 
    - MySQL
    - Phpmyadmin
    - Docker

## Descripción

**FullStack Apuesta Total** es un desafío de gestión de registro de pokemones

## 🚀 Características

- **Interfaz de Usuario Intuitiva**: Diseñada con una experiencia de usuario fluida y atractiva.
- **Componentes Reutilizables**: Utiliza componentes de Astro para facilitar la reutilización y el mantenimiento.
- **WebSockets**: Implementación de WebSockets para comunicación en tiempo real.

## 🛠️ Tecnologías Utilizadas

- <img src="https://th.bing.com/th?id=ODLS.ce618150-9a30-49c7-83af-99521f33801c&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2" alt="Astro" width="40"/> **Astro**: Framework moderno para construir sitios web rápidos y optimizados.
- <img src="https://th.bing.com/th?id=ODLS.095f9b22-a70b-47ed-bdb1-070466f08dc4&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2" alt="Tailwind CSS" width="40"/> **Tailwind CSS**: Framework de utilidades CSS para estilizar el proyecto.
- <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" width="40"/> **TypeScript**: Para añadir tipado estático y mejorar la calidad del código.
- <img src="https://avatars.githubusercontent.com/u/5658226?s=200&v=4" alt="Express.js" width="40"/> **Express**: Framework de servidor web para Node.js.
- <img src="https://sequelize.org/img/logo.svg" alt="Sequelize" width="40"/> **Sequelize**: ORM para Node.js y MySQL.
- <img src="https://th.bing.com/th?id=ODLS.4662eebb-84bb-4ef8-b9b5-5572a09715c3&w=32&h=32&qlt=91&pcl=fffffa&o=6&pid=1.2" alt="WebSockets" width="40"/> **WebSockets**: Para la comunicación en tiempo real usando socket IO.
- <img src="https://th.bing.com/th?id=ODLS.1087b558-ec95-42e8-8bde-f0c3bd1b328e&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2" alt="JWT" width="40"/> **JWT**: Para autenticación segura.
- <img src="https://th.bing.com/th?id=OSAAS.CF3B5EE8236922CF7C85C1745DE395A5&w=72&h=72&c=17&rs=1&o=6&pid=TechQna" alt="MySQL" width="40"/> **MySQL**: Sistema de gestión de bases de datos relacional.
- <img src="https://th.bing.com/th?id=ODLS.9f26d577-d16e-42f8-b737-0619a7eab023&w=32&h=32&qlt=96&pcl=fffffa&o=6&pid=1.2" alt="JavaScript" width="40"/> **JavaScript**: Lenguaje de programación utilizado para la lógica del frontend y backend.
- <img src="https://camo.githubusercontent.com/db72bc464d38be4eee48e2d78a2b186dd65d648edac38700b151164e4226c0f4/68747470733a2f2f6e616e6f73746f7265732e6769746875622e696f2f6e616e6f73746f7265732f6c6f676f2e737667" alt="NanoStores" width="40"/> **NanoStores**: Pequeña y rápida biblioteca de estado global para la gestión del estado en la aplicación.
- <img src="https://raw.githubusercontent.com/colinhacks/zod/main/logo.svg" alt="Zod" width="40"/> **Zod**: Biblioteca de validación de esquemas para la validación de datos.
- <img src="https://th.bing.com/th?id=OSK.c25f338db85dd6a6930e7ddce8bbb541&w=46&h=46&c=11&rs=1&qlt=80&o=6&dpr=2&pid=SANGAM" alt="Phpmyadmin" width="40"/> **Phpmyadmin**: Para la gestión de la información de la Base de datos mucho mas simple y visual mediante su interfaz gráfica.
- <img src="https://th.bing.com/th?id=ODLS.2e5b7c8f-82fa-446a-919e-9678e88a1da1&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2" alt="Docker" width="40"/> **Docker**: Instalación de phpmyadmin y msql mediante docker para el consume de menos recursos y mas velocidad.



## 🧰 Instalación 
Sigue estos pasos para configurar el proyecto localmente:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Asemxu/FullStack-Apuesta-Total.git

2. Navega al directorio del proyecto:

   ```bash
   cd FullStack-Apuesta-Total

4. cd frontend y cd backend:

   ```bash
   npm install

4. Inicia la aplicación en frontend y backend:

   ```bash 
    npm run dev // para frontend

    npm start // para backend

5. Para levantar la base de datos tiene que tener mysql instalado en su maquina y de preferencia un gestor de base de datos en mi caso uso phpmyadmin. El la raiz del proyecto esta el script **bd_apuestatotal.sql** [Archivo sql](./bd_apuestatotal.sql) para generar la base de datos

6. Si no tiene phpmyadmin yo levante mi base de datos con docker, dejo el archivo **docker-compose.yml** [Archivo docker](./docker-compose.yml) para que lo levante usando el comando

    ```bash
    docker compose up


## 📜 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

- `npm start`: Inicia la aplicación en modo de desarrollo.
- `npm test`: Ejecuta las pruebas unitarias.
- `npm run build`: Construye la aplicación para producción en la carpeta `build`.
- `npm run eject`: Si necesitas personalizar la configuración de Create React App.

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si deseas contribuir, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto con nosotros:

- **Correo Electrónico**: [renzojimenezalfarotrabajos@gmail.com](mailto:support@renzojimenezalfarotrabajos@gmail.com)
- **GitHub**: [Asemxu](https://github.com/Asemxu)
