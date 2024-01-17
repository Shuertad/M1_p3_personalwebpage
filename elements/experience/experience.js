import './experience.css';
import {workPositions, studentPositions, tagTemplateDescriptionWork, tagTemplateDescriptionStudent} from '/data/data.js';
import {openDescription} from '/elements/opencard/opencard.js';
import {tagTemplateCard} from '/elements/card/card.js';

export const renderExperience = () => {

  document.querySelector('main').innerHTML = '';
  const elementContainer = document.querySelector('main');

  const sectionTitleWork = `
  <h2 class="header-work">Work Experience</h2>
  `;
  elementContainer.innerHTML += sectionTitleWork;

    let workPositionCounter = 0;

    for (let i = 0; i < workPositions.length; i++) {
    var  contentExperience = [];
    contentExperience = tagTemplateCard(workPositions[i],i,tagTemplateDescriptionWork[i]);

    elementContainer.innerHTML += contentExperience;
    workPositionCounter = i + 1;
    };

  const sectionTitleEducation = `
  <h2 class="header-education">Education</h2>
  `;
  elementContainer.innerHTML += sectionTitleEducation;

    for (let i = 0; i < studentPositions.length; i++) {
    var  contentEducation = [];
    contentEducation = tagTemplateCard(studentPositions[i],i + workPositionCounter,tagTemplateDescriptionStudent[i]);

    elementContainer.innerHTML += contentEducation;
    };

    document.addEventListener("click",() => openDescription(event,'check-toggle-0'));
    document.addEventListener("click",() => openDescription(event,'check-toggle-1'));

    document.addEventListener("click",() => openDescription(event,'check-toggle-2'));
    document.addEventListener("click",() => openDescription(event,'check-toggle-3'));
    document.addEventListener("click",() => openDescription(event,'check-toggle-4'));
  };