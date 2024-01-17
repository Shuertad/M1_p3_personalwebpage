import './style.css';
import {initialRender} from './elements/renderStructure/renderStructure.js';
import {renderHeader} from './elements/header/header.js';
import {renderFooter} from './elements/footer/footer.js';
import {renderHome} from './elements/home/home.js';
import {renderExperience} from './elements/experience/experience.js';
import {renderProjects} from './elements/projects/projects.js';
import {linkPointsTo} from './elements/pagelinks/pagelinks.js'

initialRender(renderHeader,renderHome,renderFooter);

document.querySelector('#home-link').addEventListener('click',(ev) => linkPointsTo(ev, renderHome));
document.querySelector('#experience-link').addEventListener('click',(ev) => linkPointsTo(ev, renderExperience));
document.querySelector('#projects-link').addEventListener('click',(ev) => linkPointsTo(ev, renderProjects));


