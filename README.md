# EcoPulse

EcoPulse es una aplicación web informativa sobre medio ambiente desarrollada como parte de un proyecto full-stack. 
La aplicación incluye un frontend en React, un backend en Node.js con Express y almacenamiento ligero en JSON.

---

## Características principales

- Visualización de consejos, tecnologías y mitos relacionados con el medio ambiente.
- Formulario de feedback para recopilar comentarios de los usuarios.
- Backend con API REST (`/api/content`, `/api/feedback`).
- Pruebas automatizadas con k6.
- Flujo de trabajo con Git y ramas feature.
- Aplicación responsiva y accesible.

---

## Estructura del proyecto

```
ecopulse/
│
├── client/          # Frontend (React)
│   └── src/...
│
├── server/          # Backend (Node.js + Express)
│   ├── index.js
│   ├── data/content.json
│   └── feedback.log
│
├── tests/           # Pruebas automatizadas
│   └── load_test.js
│
└── README.md
```

---

## nstalación y ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/<tu-usuario>/ecopulse.git
cd ecopulse
```

### 2. Backend
```bash
cd server
npm install
npm run dev
```
El backend estará disponible en: `http://localhost:3001`

### 3. Frontend
```bash
cd client
npm install
npm run dev
```
El frontend estará disponible en: `http://localhost:5173`

---

## Pruebas

### Manuales
1. Acceder a `/api/content` y verificar que regrese JSON.  
2. Enviar feedback y comprobar que se registre en `feedback.log`.  
3. Ver frontend cargando contenido.  

### Automatizadas con k6
```bash
k6 run tests/load_test.js
```

---

## Metodología Scrum aplicada

- **Sprint 1**: Diseño responsivo y validación de formularios.  
- **Sprint 2**: Estadísticas ambientales y optimización de feedback.  
- **Sprint 3**: Gráficas dinámicas y pruebas de seguridad.  

---

## Flujo de Git

- Rama `main`: estable y de producción.  
- Ramas `feature/*`: desarrollo de nuevas funcionalidades.  
- Ejemplo:
```bash
git checkout -b feature/ui
git commit -m "feat(ui): mejorar diseño responsivo"
git push -u origin feature/ui
```

Para recuperar una versión anterior:
```bash
git log --oneline
git checkout <commit_id>
```

---
