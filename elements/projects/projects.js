import './projects.css';
import {projects, tagTemplateDescriptionProjects} from '/data/data.js';
import {openDescription} from '/elements/opencard/opencard.js';
import {tagTemplateCard} from '/elements/card/card.js';

export const renderProjects = () => {

    document.querySelector('main').innerHTML = '';
    const elementContainer = document.querySelector('main');

    for (let i = 0; i < projects.length; i++) {
    var  contentExperience = [];
    contentExperience = tagTemplateCard(projects[i],i,tagTemplateDescriptionProjects[i],'project');

    elementContainer.innerHTML += contentExperience;
    };

    document.addEventListener("click",() => openDescription(event,'check-toggle-0'));
    document.addEventListener("click",() => openDescription(event,'check-toggle-1'));
    document.addEventListener("click",() => openDescription(event,'check-toggle-2'));
    document.addEventListener("click",() => openDescription(event,'check-toggle-3'));
    document.addEventListener("click",() => openDescription(event,'check-toggle-4'));

  };