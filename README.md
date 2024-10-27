# Direccion
https://anaknavarro.github.io/portafolio-v1

## Desplegar aplicación react en Github pages
### 1. Crear un proyecto de react desde la consola
Nota: 
* Posicionado desde la carpeta donde quieres que se guarde tu proyecto
* Antes instalar node.js (asegurandote de marcar la opción para agregar Node.js en el PATH)
* Verificar la versión de node y de npm

En la consola escribir:
```
npx create-react-app mi-portafolio-react
```

_Nota personal_

_A mi me marcaba este error: npm error enoent ENOENT: no such file or directory, lstat 'C:\\...\AppData\Roaming\npm', la solución fue buscar esa dirección, que eran carpetas ocultas y dentro de Roaming, crear la carpeta npm cpn mkdir_

### 2. Iniciar el servidor de desarrollo
Al crearse el proyecto ya se puede abrir la aplicación en http://localhost:3000

### 3. Crear un repo en github

* Ve a GitHub
* Haz click en el botón de "+"
* Selecciona "New repository"
* Guarda la dirección de git

### 4. Instala dependencias
En tu proyecto local, ejecuta en la consola:
```
npm install gh-pages --save-dev

```

Y modifica tu archivo package.json, agregando esta linea despues del nombre de tu proyecto:

```
"homepage": "https://<tu-nombre-de-usuario>.github.io/<nombre-del-repositorio>",
```

Ejemplo:

```
"name": "portafolio-react",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://AnaKNavarro.github.io/portafolio-v1",
  ...
```

Y dentro de la sección de scripts, agregar lo siguiente:
```
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

Ejecuta el siguiente comando para crear la versión optimizada:
```
npm run build
```

_Este último comando creara una nueva carpeta llama 'build' que contiene los archivos necesarios para la aplicación_

### 5. Enviar el repositorio a master
1. Asegurate de que el proyecto este inicializado como repositroio de Git, sino inicializarlo con

```
git init
```

2. guarda los cambios 

```
git add .
git commit -m "..."
```
3. Configura el repositorio remoto (con la dirección del paso 3. Crear un repositorio en git)

```
git remote add origin <direccion del repo en git>
```

4. Sube tu branch al repositorio remoto
```
git push -u origin master
```

### 6. Configurar github pages
* ve a GitHub y en el repositorio da click en "Settings"
* Busca la opción de page o GitHub Pages
* Busca la opción donde puedas modificar la rama (que siga None o master) y selecciona gh-pages
* Guarda la configuración

### 7. Despliega tu aplicación

* Desde tu local ejecuta:
```
npm run deploy
```

Listo! Despues de esto podras ingresar a la dirección del paso 4. Instala dependencias, que es algo como esto: 

"https://AnaKNavarro.github.io/portafolio-v1"

### Actualizar cuando hagas cambios en local:
```
git add .
git commit -m "..."
npm run deploy
```

## Dirigir a otra página dentro de la aplicación react

* Instalar react router:
```
npm install react-router-dom
```

* Modificar el archivo App.js

_En este ejemplo, pasamos de esto:_

```
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css'; // Puedes usar este archivo para agregar estilos generales

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
```

_A esto:_
```
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css'; // Asegúrate de agregar tus estilos

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
```

* Modificar tambien el Header

_Pasando de esto:_
```
import React from 'react';

function Header() {
    return (
        <header>
            <h1>Hola, soy [Tu Nombre]</h1>
            <nav>
                <ul>
                    <li><a href="#about">Acerca de</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

```
_A esto:_
```
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css'; // Asegúrate de tener tus estilos aquí

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Projects />} /> {/* Página de inicio mostrando proyectos */}
        <Route path="/about" element={<About />} /> {/* Página de Acerca de */}
        <Route path="/projects" element={<Projects />} /> {/* Página de Proyectos */}
        <Route path="/contact" element={<Contact />} /> {/* Página de Contacto */}
      </Routes>
    </Router>
  );
}

export default App;

```

_Nota: Al principio usabaswitch en lugar de Routes, me marcaba error, por eso se cambio a Routes, pero todo depende la versión_

## Para probar antes de desplegar
```
npm start
```

## Updating your deployed
```
git add
git commit -m "..."
git push origin main
npm run build
npm run deploy
```
... a esperar que se actualize en GitHub Pages