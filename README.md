git c# Agenda Médica

Backend para sistema de gestión de citas médicas desarrollado con **Node.js**, **Express**, **PostgreSQL** y **Prisma ORM**.

## Tecnologías

- Node.js + Express
- PostgreSQL
- Prisma ORM
- bcrypt (hash de contraseñas)
- jsonwebtoken (autenticación JWT)
- dotenv

## Modelos de datos

- `User`: usuarios del sistema (rol `ADMIN` o `USER`)
- `Appointment`: citas médicas (relacionadas con un usuario y un bloque de tiempo)
- `TimeBlock`: bloques de horario disponibles

## Endpoints principales

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/auth/register` | Registro de usuario |
| POST | `/api/auth/login` | Inicio de sesión (devuelve token JWT) |
| GET/POST | `/api/appointments` | Listar/crear citas |
| GET/POST | `/api/reservations` | Reservas |
| GET/PUT/DELETE | `/api/admin/users` | Gestión de usuarios (admin) |

## Instalación

```bash
# Clonar el repositorio
git clone <url>
cd agenda-medica

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env-example .env

# Configurar base de datos
npx prisma migrate dev
npx prisma db seed

# Ejecutar en desarrollo
npm run dev

# Ejecutar en producción
npm start
```

El servidor corre en `http://localhost:3000`.

## Variables de entorno (`.env`)

```
PORT=3000
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/agenda_medica
JWT_SECRET=tu_secreto_aqui
```

## Estructura del proyecto

```
prisma/            # Esquema y migraciones de Prisma
src/
  routes/          # Rutas de la API
  controllers/     # Controladores
  services/        # Lógica de negocio
  middlewares/     # Middlewares (logger, auth, errorHandler)
  utils/           # Utilidades (validación)
app.js             # Punto de entrada (Express)
server.js          # Inicio del servidor
```

## Autor

Mario Flórez <mario.florez249@gmail.com>

## Licencia

MIT
