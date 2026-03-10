# Test Técnico Backend NestJS

API desarrollada con **NestJS**, **PostgreSQL** y **TypeORM** para la gestión de tareas.

La aplicación se encuentra dentro de la carpeta:

```
tasks-api
```

## Requisitos

Antes de ejecutar el proyecto debes tener instalado:

* Node.js
* npm
* PostgreSQL

## Instalación

Primero ingresar a la carpeta del proyecto:

```bash
cd tasks-api
```

Luego instalar las dependencias:

```bash
npm install
```

## Configuración de la base de datos

Crear la base de datos en PostgreSQL:

```sql
CREATE DATABASE tasks_db;
```

El proyecto utiliza **variables de entorno** para configurar la conexión a la base de datos.

Debes crear un archivo `.env` en la raíz del proyecto (`tasks-api`) usando como referencia el archivo `.env.example`.

### Archivo `.env.example`

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=tasks_db
```

### Archivo `.env`

Crear un archivo `.env` con tus credenciales reales:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=tasks_db
```

> El archivo `.env` contiene información sensible y **no se incluye en el repositorio**.

## Ejecutar el proyecto

Desde la carpeta `tasks-api`, iniciar la aplicación en modo desarrollo:

```bash
npm run start:dev
```

La API estará disponible en:

```
http://localhost:3000
```

## Ejecutar tests

Desde la carpeta `tasks-api` ejecutar:

```bash
npm run test:e2e
```

## Información sobre la entidad Task

La entidad **Task** contiene los siguientes campos:

* id
* title
* description
* status
* priority
* createdAt
* updatedAt

### Generación automática de ID

El campo **id** se genera automáticamente utilizando UUID:

```ts
@PrimaryGeneratedColumn('uuid')
```

Por lo tanto **no es necesario enviarlo al crear una tarea**.

### Campos opcionales

Los siguientes campos son opcionales al crear una tarea:

* **description**
* **status**
* **priority**

### Valores por defecto

Si no se envían algunos campos al crear una tarea, se asignan los siguientes valores por defecto:

* **status:** `pending`
* **priority:** `medium`
