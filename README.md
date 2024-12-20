# Descripción 📖
Este proyecto es una aplicación enfocada en un  e-comerce

---

## 🚀 Correr en entorno de desarrollo

1. **Clonar el repositorio** 🔥  
   ```bash
   git clone https://github.com/DanielaMillaDev/teslo_shop.git
   ```

2. **Configurar variables de entorno** ⚙️  
   - Crear una copia del archivo `.env.template` y renombrarlo como `.env`.
   - Actualizar las variables de entorno según sea necesario.

3. **Instalar dependencias** 📦  
   ```bash
   npm install
   ```

4. **Levantar la base de datos** 🐳  
   ```bash
   docker compose up -d
   ```

5. **Ejecutar migraciones de Prisma** 🛠️  
   ```bash
   npx prisma migrate dev
   ```

6. **Cargar datos iniciales (seed)** 🌱  
   ```bash
   npm run seed
   ```

7. **Iniciar el servidor en modo desarrollo** 💻  
   ```bash
   npm run dev
   ```

8. **Limpiar el localStorage del navegador** 🚹  
   Asegúrate de limpiar el localStorage para evitar posibles conflictos.

---

## 🌐 Correr en entorno de producción

1. **Compilar el proyecto** 🔧  
   ```bash
   npm run build
   ```

2. **Iniciar el servidor** 🚀  
   ```bash
   npm run start
   ```

3. **Configurar el entorno** 🔒  
   - Asegúrate de que las variables de entorno estén correctamente configuradas.
   - Verifica que la base de datos esté disponible y funcionando correctamente.

---

## 🌎 Vista de la página en producción
Puedes visitar una versión de ejemplo en producción en el siguiente enlace:
👉 [Teslo Shop - Demo](https://teslo-shop-olive.vercel.app/)

---

## 🛠️ Tecnologías utilizadas
- **Node.js**
- **Prisma**
- **Docker**
- [Agrega aquí otras tecnologías relevantes]

---


## 🤝 Contribuciones
¡Las contribuciones son bienvenidas! Si deseas colaborar, por favor abre un issue o envía un pull request.

---

## 📧 Contacto
Para cualquier duda o consulta, puedes contactarme en [daniela.milla95@gmail.com].

