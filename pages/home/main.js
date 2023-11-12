import './style.css'

const elementContainer = document.querySelector('main');

const personalDescriptionPar1 = "Welcome to my corner of the web! My name is Santi and I'm deeply passionate about venturing into the world of technology and building products customers love. The idea of becoming a Product Manager has always captivated me because it combines the art of understanding customer needs with the thrill of creating something from scratch.";
const personalDescriptionPar2 ="My journey so far consists of a degree in Physics and Economics, with a special nod to the Austrian School of Economics. I have worked in consulting for startups and in a Spanish scaleup supporting marketplace analytics. If I were to highlight two qualities from my character and that I'm most proud of, I would say my ability to understand and to come up with a different point of view."
const personalDescriptionPar3 ="I thrive on initiative and building things from the ground up. That's why I've designed this website to serve as an interactive CV of both myself and the projects that foster my curiosity and drive. Explore my website and feel free to drop an email if interested in getting in touch!"
const photoUrl = '/public/resources/SantiHuerta.jpg';
const arrowImg = '/public/resources/right-arrow.png';

const tagTemplateHome = (parr1,parr2,parr3,imgphoto,imgarrow) => `
<div class="home-content-container">
<div class="personal-info-container">
<div class="personal-description">
<p>${parr1}</p>
</br>
<p>${parr2}</p>
</br>
<p>${parr3}</p>
</div>
<img class="personal-photo" src="${imgphoto}" alt="Santi Huerta">
</div>
<div class="contact-info-container">
<a class="link-mailto" href="mailto:santibhs@yahoo.com?subject=I checked your website and wanted to say hi!">
<p>Say hi</p>
<img class="personal-info-arrow" src="${imgarrow}" alt="arrow">
</a>
</div>
</div>
`;

export const renderHome = () => {
  
    const contentHome = tagTemplateHome(personalDescriptionPar1,personalDescriptionPar2,personalDescriptionPar3,photoUrl,arrowImg);
    //appContainer.innerHTML += contentHome;

    elementContainer.innerHTML = contentHome;
  };