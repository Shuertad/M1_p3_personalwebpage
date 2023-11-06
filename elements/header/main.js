import './style.css';

const tagTemplateHeader = `
    <div class="home-container">
      <a href="/home" id="home-link">shds</a>
    </div>
    <div class="pages-container">
      <a href="/projects" id="projects-link">Projects</a>
      <a href="/experience" id="experience-link">Experience</a>
    </div>
`;

const elementContainer = document.querySelector('header');

export const renderHeader = () => {
  elementContainer.innerHTML = tagTemplateHeader;
};
