import './footer.css';

const tagTemplateFooter = `
<div class="border-container">
  <div class="project-credits-container">
    <p>Shuertad project</p>
  </div>
  <div class="links-container">
    <a
      href="https://www.linkedin.com/in/santiago-huerta-de-soto-huarte/"
      id="linkedin-link"
      target="_blank"
      >LinkedIn</a
    >
    <a href="https://github.com/Shuertad" id="github-link" target="_blank"
      >Github</a
    >
    <a
      href="https://twitter.com/Shuertad_"
      id="twitter-link"
      target="_blank"
      >Twitter</a
    >
    <a
      href="https://open.spotify.com/user/1155992288"
      id="spotify-link"
      target="_blank"
      >Spotify</a
    >
  </div>
</div>
`;

export const renderFooter = () => {
  const elementContainer = document.querySelector('footer');

  elementContainer.innerHTML = tagTemplateFooter;
};