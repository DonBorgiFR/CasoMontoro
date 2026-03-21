# ⚖️ Caso Montoro — Portal de Transparencia e Inteligencia

**Un rastreador digital de código abierto y análisis relacional sobre la mayor trama de corrupción investigada en el seno del Ministerio de Hacienda de España.**

[![Despliegue en Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FDonBorgiFR%2FCasoMontoro)

---

## 🔍 Sobre el Proyecto

El **Caso Montoro** expone una presunta red de tráfico de influencias, cohecho y favores legislativos operada a través de la consultora *Equipo Económico*, fundada por el exministro Cristóbal Montoro. Durante más de 7 años, la causa ha permanecido bajo un férreo secreto de sumario, con **28 personas investigadas** de la más alta cúpula del Ministerio de Hacienda, sin que la mayor parte haya sido llamada a declarar.

Este portal ha sido desarrollado como una **herramienta de inteligencia de fuente abierta (OSINT)** para estructurar y visibilizar:
- 🕰️ La línea temporal completa desde el Gobierno de Aznar hasta 2026.
- 🗄️ El detalle y desglose legal de las principales piezas del sumario (Gasistas, Renovables, etc.).
- 🌐 Las redes de poder y el puente entre empresas facturadoras, paraísos burocráticos y sociedades instrumentales.
- 📺 El papel central del "Escudo Mediático" y "Lawfare Inverso" para lograr la dilación e inacción del aparato judicial.

## 🚀 Características del Portal

- **Grafo Relacional Interactivo:** Mapa visual de nodos (Force-Directed Graph) para entender intuitivamente las conexiones entre la cúpula, empresas pantalla, medios satélite y agentes internacionales.
- **Sumario Ciudadano:** Traducción de jerga legal a términos ciudadanos, explicando pieza a pieza los tomos del juzgado.
- **Tarjetas de Identidad (Dossier Noir):** Fichas detalladas de cada imputado, conexiones, rol en la red y estado procesal actual.
- **Integración de Acción Ciudadana:** Herramientas para compartir, denunciar ante la AEAT y exigir apertura procesal en redes.

## 💻 Pila Tecnológica

El proyecto está construido bajo una estética de *Inteligencia y Dossier Secreto* utilizando:
- **[Next.js 15](https://nextjs.org/)** (App Router)
- **React 19** 
- **Tailwind CSS 3** (Glassmorphism, Filtros y Modo Oscuro estricto)
- **Framer Motion** (Animaciones fluidas y estados UI interconectados)
- **React Force Graph 2D** (Renderizado de malla de nodos)

## 🛠️ Instalación y Uso Local

Para desplegar y auditar el proyecto en tu máquina local:

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/DonBorgiFR/CasoMontoro.git
   cd CasoMontoro
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Inicia el entorno de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```
4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🗃️ Estructura de Datos

Toda la red de información, cifras, personajes e hitos temporales se gestiona centralizada en un único archivo maestro de datos para facilitar actualizaciones de la comunidad:
- 📁 `src/data/caso-montoro.json`

Cualquier contribución para afinar fechas, añadir extractos periodísticos o incorporar nuevos imputados debe realizarse fundamentalmente modificando este JSON.

## 📜 Licencia y Uso

Este código fuente se comparte como herramienta cívica para la **transparencia y organización de datos públicos**. Los datos expuestos provienen de publicaciones periodísticas, autos judiciales liberados y notas informativas de la investigación de la Fiscalía Anticorrupción de España.
