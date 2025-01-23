# Medical Record API

## Descripción
API de gestión de pacientes desarrollada con Node.js y Express.js, utilizando MongoDB como base de datos.

## Requisitos Previos
- Node.js (v14 o superior)
- MongoDB

## Instalación

1. Clonar el repositorio
```bash
git clone https://github.com/redmoart23/medical-record-server.git
cd medical-record-server
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar Variables de Entorno
Copiar `.env.example` a `.env` y completar con tus configuraciones:
```bash
cp .env.example .env
```

## Variables de Entorno
Configurar en `.env`:
- `MONGODB_URI`: Conexión a base de datos MongoDB
- `PORT`: Puerto de la aplicación
- `JWT_SECRET`: Clave secreta para autenticación

## Ejecución

Desarrollo:
```bash
npm run dev
```

Producción:
```bash
npm start
```

## Estructura de Rutas

- `/api/v1/auth`: Autenticación de usuarios
- `/api/v1/patients`: Gestión de pacientes
- `/api/v1/observations`: Registro de observaciones médicas

## Tecnologías
- Node.js
- Express.js
- Mongoose
- MongoDB

## Dependencias Principales
- `express`: Framework web
- `mongoose`: ODM para MongoDB
- `jsonwebtoken`: Manejo de autenticación
- `bcryptjs`: Encriptación de contraseñas


## Contribución
1. Hacer fork del proyecto
2. Crear rama de feature (`git checkout -b feature/nuevaFuncionalidad`)
3. Commit de cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nuevaFuncionalidad`)
5. Abrir un Pull Request

## Licencia
[Especificar tipo de licencia, ej. MIT]
