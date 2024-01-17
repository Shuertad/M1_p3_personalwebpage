import './card.css';

export const tagTemplateCard = (position,i,descriptions,type) => `

<label class="description-toggle" for ="check-toggle-${i}">
<div class="job-description">
<div class="position-content-container">
<div class="logo-container">
<img class="company-logo" src="${position.imageUrl}" alt="logo-${position.organizationName}">
</div>
<div class="info-container">
<p class="position-name">${position.positionName}</p>
<p class = "${type}-details">${position.organizationName} - ${position.location}</p>
<p>${position.date}</p>
</div>
</div>
</div>
</label>
<input type = "checkbox" id = "check-toggle-${i}" />
<ul class = "description-container-${i}" id = "click-target-${i}">
<span class = "position-element-description">
<div class="logo-container">
<a href = "${position.link}" target="_blank">
<img class="company-logo-description" src="${position.imageUrl}" alt="logo-${position.organizationName}">
</a>
</div>
<div class="info-container-description">
<div>
<p class="position-name">${position.positionName}</p>
<p class = "${type}-details">${position.organizationName} - ${position.location}</p>
<p>${position.date}</p>
</div>
<div class = "text-description-container">
${descriptions}
</div>
</div>
</span>
</ul>
`;