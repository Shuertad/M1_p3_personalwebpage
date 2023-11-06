import './style.css';
import {renderHeader} from './elements/header/main.js';
import {renderFooter} from './elements/footer/main.js';
import {renderHome} from './pages/home/main.js';
import {renderExperience} from './pages/experience/main.js';
import {renderProjects} from './pages/projects/main.js';

//const appContainer = document.querySelector('#app');

// Lee los comentarios de este código para entender lo que hace
const linkPointsToHome = (ev) => {
	ev.preventDefault(); // Esto hace que el link no cargue la URL a la que apunta
  const linkHref = ev.target.href; // Almacenamos la URL en una constante
  console.log('El link apunta a:', linkHref ); // La mostramos en consola
  
  // Añade aquí tu lógica! 🔽 
  renderHome();
};

const linkPointsToExperience = (ev) => {
	ev.preventDefault(); // Esto hace que el link no cargue la URL a la que apunta
  const linkHref = ev.target.href; // Almacenamos la URL en una constante
  console.log('El link apunta a:', linkHref ); // La mostramos en consola
  console.log(ev)
  
  // Añade aquí tu lógica! 🔽 
  renderExperience();
};

const linkPointsToProjects = (ev) => {
	ev.preventDefault(); // Esto hace que el link no cargue la URL a la que apunta
  const linkHref = ev.target.href; // Almacenamos la URL en una constante
  console.log('El link apunta a:', linkHref ); // La mostramos en consola
  
  // Añade aquí tu lógica! 🔽 
  renderProjects();
};

//document.querySelector("header").innerHTML = renderHeader();

renderHeader();
renderHome();
renderFooter();

//document.querySelector("footer").innerHTML = renderFooter();

document.querySelector('#home-link').addEventListener('click',linkPointsToHome);
document.querySelector('#experience-link').addEventListener('click',linkPointsToExperience);
document.querySelector('#projects-link').addEventListener('click',linkPointsToProjects);


