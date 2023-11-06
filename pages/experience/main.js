import './style.css';
import {workPositions, studentPositions, tagTemplateDescriptionWork, tagTemplateDescriptionStudent} from './positions.js';
//import {expandFunction} from '/elements/collapsefunction/functions.js';

const elementContainer = document.querySelector('main');

const tagTemplateWorkPosition = (position,i,descriptions) => `

<label class="description-toggle" for ="check-toggle-${i}">
<div class="job-description">
<div class="position-content-container">
<div class="logo-container">
<img class="company-logo" src="${position.imageUrl}" alt="logo-${position.companyName}">
</div>
<div class="info-container">
<p class="position-name">${position.positionName}</p>
<p>${position.companyName} - ${position.location}</p>
<p>${position.startDate} - ${position.endDate}</p>
</div>
</div>
</div>
</label>
<input type = "checkbox" id = "check-toggle-${i}" />
<ul class = "description-container-${i}" id = "click-target-${i}">
<span class = "position-element-description">
<div class="logo-container">
<a href = "${position.companyURL}" target="_blank">
<img class="company-logo-description" src="${position.imageUrl}" alt="logo-${position.companyName}">
</a>
</div>
<div class="info-container-description">
<div>
<p class="position-name">${position.positionName}</p>
<p>${position.companyName} - ${position.location}</p>
<p>${position.startDate} - ${position.endDate}</p>
</div>
<div class = "text-description-container">
${descriptions}
</div>
</div>
</span>
</ul>
`;

const tagTemplateStudentPosition = (position,i,descriptions) => `

<label class="description-toggle" for ="check-toggle-student-${i}">
<div class="job-description">
<div class="position-content-container">
<div class="logo-container">
<img class="company-logo" src="${position.imageUrl}" alt="logo-${position.companyName}">
</div>
<div class="info-container">
<p class="position-name">${position.degreeName}</p>
<p>${position.institutionName} - ${position.location}</p>
<p>${position.startDate} - ${position.endDate}</p>
</div>
</div>
</div>
</label>
<input type = "checkbox" id = "check-toggle-student-${i}" />
<ul class = "description-container-student-${i}" id = "click-target-student-${i}">
<span class = "position-element-description">
<div class="logo-container">
<img class="company-logo-description" src="${position.imageUrl}" alt="logo-${position.institutionName}">
</div>
<div class="info-container-description">
<div>
<p class="position-name">${position.degreeName}</p>
<p>${position.institutionName} - ${position.location}</p>
<p>${position.startDate} - ${position.endDate}</p>
</div>
<div class = "text-description-container-student">
${descriptions}
</div>
</div>
</span>
</ul>
`;

const tagTemplateStudentPosition0 = (position) => `
<a class="job-description" href="#">
<div class="position-content-container">
<div class="logo-container">
<img class="company-logo" src="${position.imageUrl}" alt="logo-${position.institutionName}">
</div>
<div class="info-container">
<p class="position-name">${position.degreeName}</p>
<p>${position.institutionName} - ${position.location}</p></p>
<p>${position.startDate} - ${position.endDate}</p>
</div>
</div>
</a>
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

const openDescriptionStudent0 = (ev) => {
  if (ev.target.id !== 'check-toggle-student-0') {
    if(document.getElementById('check-toggle-student-0').checked === true){
      document.getElementById('check-toggle-student-0').checked = false;
    };
    return;
    };
return;
};

const openDescriptionStudent1 = (ev) => {
  if (ev.target.id !== 'check-toggle-student-1') {
    if(document.getElementById('check-toggle-student-1').checked === true){
      document.getElementById('check-toggle-student-1').checked = false;
    };
    return;
    };
return;
};

const openDescriptionStudent2 = (ev) => {
  if (ev.target.id !== 'check-toggle-student-2') {
    if(document.getElementById('check-toggle-student-2').checked === true){
      document.getElementById('check-toggle-student-2').checked = false;
    };
    return;
    };
return;
};

export const renderExperience = () => {

  document.querySelector('main').innerHTML = '';

  const sectionTitleWork = `
  <h2 class="header-work">Work Experience</h2>
  `;
  elementContainer.innerHTML += sectionTitleWork;


    for (let i = 0; i < workPositions.length; i++) {
    var  contentExperience = [];
    contentExperience = tagTemplateWorkPosition(workPositions[i],i,tagTemplateDescriptionWork[i]);

    elementContainer.innerHTML += contentExperience;
    };

  const sectionTitleEducation = `
  <h2 class="header-education">Education</h2>
  `;
  elementContainer.innerHTML += sectionTitleEducation;

    for (let i = 0; i < studentPositions.length; i++) {
    var  contentEducation = [];
    contentEducation = tagTemplateStudentPosition(studentPositions[i],i,tagTemplateDescriptionStudent[i]);

    elementContainer.innerHTML += contentEducation;
    };

    document.addEventListener("click",openDescription0);
    document.addEventListener("click",openDescription1);

    document.addEventListener("click",openDescriptionStudent0);
    document.addEventListener("click",openDescriptionStudent1);
    document.addEventListener("click",openDescriptionStudent2);

    //var descriptionClickTarget = document.getElementById('click-target')
    //descriptionClickTarget.addEventListener("onclick",closeDescription0);
  };