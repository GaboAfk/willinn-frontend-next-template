
# Willinn Frontend Template

## 📋 Descripción
Willinn Frontend Template es una aplicación web para la prueba técnica de Trainee de Willinn, fue desarrollada con Next.js, proporciona una interfaz de usuario para la gestión de usuarios. Se implementa funcionalidades de autenticación, CRUD de usuarios y diseño responsive utilizando Tailwind CSS.

## 🚀 Características Principales
- 🔐 Sistema de autenticación completo
- 👥 Gestión de usuarios (CRUD)
- 🎨 Interfaz moderna y responsive
- 🔍 Búsqueda en tiempo real de usuarios
- 📱 Diseño adaptable a diferentes dispositivos

## 🛠 Tecnologías Utilizadas
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Axios
- Lucide React (iconos)

## 📦 Requisitos Previos
- Node.js (versión 16 o superior)
- npm o yarn
- Una API backend funcionando (configurada en las variables de entorno), utilicé el siguiente repositorio también desarrollado para la prueba técnica. [Click aquí](https://github.com/GaboAfk/Willinn-backend-api-template)

## ⚙️ Configuración del Proyecto

### Instalación
```bash
git clone https://github.com/GaboAfk/willinn-frontend-next-template.git

cd willinn-frontend-next-template

npm install
# o
yarn install
```

### Variables de Entorno
Crea un archivo .env.local en la raíz del proyecto:

```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

### Ejecución en Desarrollo
```bash
npm run dev
# o
yarn dev
```

La aplicación estará disponible en http://localhost:3000

## 📁 Estructura del Proyecto

```plaintext
src/
├── app/
│   ├── dashboard/
│   │   ├── [userId]/
│   │   ├── authContext.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── userContext.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── addUserForm.tsx
│   ├── sidebar.tsx
│   ├── updateUserForm.tsx
│   └── userList.tsx
└── types/
    ├── user.tsx
    └── userId.tsx
```

## 🔍 Funcionalidades Principales

### Autenticación
- Login de usuarios
- Registro de nuevos usuarios
- Recuperación de contraseña
- Manejo de sesiones con tokens

### Gestión de Usuarios
- Lista de usuarios con búsqueda en tiempo real
- Creación de nuevos usuarios
- Actualización de datos de usuarios
- Eliminación de usuarios (desactivar)

### 🎨 Interfaz de Usuario
- Componentes reutilizables
- Feedback visual para acciones del usuario
- Diseño responsive para todos los dispositivos

### 🔐 Seguridad
- Autenticación basada en tokens
- Protección de rutas
- Manejo seguro de contraseñas
- Validación de formularios

## 👥 Autores
Gabriel - [GaboAfk](https://github.com/GaboAfk)
