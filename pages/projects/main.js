import './style.css';
import {projects, tagTemplateDescriptionProjects} from './projects.js';

const elementContainer = document.querySelector('main');

const tagTemplateProjects = (position,i,descriptions) => `

<label class="description-toggle" for ="check-toggle-${i}">
<div class="job-description">
<div class="position-content-container">
<div class="logo-container">
<img class="company-logo" src="${position.imageUrl}" alt="logo-${position.positionName}">
</div>
<div class="info-container">
<p class="position-name">${position.positionName}</p>
<p>${position.startDate}</p>
</div>
</div>
</div>
</label>
<input type = "checkbox" id = "check-toggle-${i}" />
<ul class = "description-container-${i}" id = "click-target-${i}">
<span class = "position-element-description">
<div class="logo-container">
<a href = "${position.link}" target = "_blank">
<img class="company-logo-description" src="${position.imageUrl}" alt="logo-${position.positionName}">
</a>
</div>
<div class="info-container-description">
<div>
<p class="position-name">${position.positionName}</p>
<p>${position.startDate}</p>
</div>
<div class = "text-description-container">
${descriptions}
</div>
</div>
</span>
</ul>
`;


const openDescription0 = (ev) => {
 if (ev.target.id !== 'check-toggle-0') {
  if(document.getElementById('check-toggle-0').checked === true){
    document.getElementById('check-toggle-0').checked = false;
  };
  return;
  };
return;
};

const openDescription1 = (ev) => {
  if (ev.target.id !== 'check-toggle-1') {
    if(document.getElementById('check-toggle-1').checked === true){
      document.getElementById('check-toggle-1').checked = false;
    };
    return;
    };
return;
};

const openDescription2 = (ev) => {
  if (ev.target.id !== 'check-toggle-2') {
    if(document.getElementById('check-toggle-2').checked === true){
      document.getElementById('check-toggle-2').checked = false;
    };
    return;
    };
return;
};

const openDescription3 = (ev) => {
  if (ev.target.id !== 'check-toggle-3') {
    if(document.getElementById('check-toggle-3').checked === true){
      document.getElementById('check-toggle-3').checked = false;
    };
    return;
    };
return;
};


export const renderProjects = () => {

    document.querySelector('main').innerHTML = '';

    for (let i = 0; i < projects.length; i++) {
    var  contentExperience = [];
    contentExperience = tagTemplateProjects(projects[i],i,tagTemplateDescriptionProjects[i]);

    elementContainer.innerHTML += contentExperience;
    };

    document.addEventListener("click",openDescription0);
    document.addEventListener("click",openDescription1);
    document.addEventListener("click",openDescription2);
    document.addEventListener("click",openDescription3);

  };