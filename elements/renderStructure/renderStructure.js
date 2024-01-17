export const initialRender = (header,main,footer) => {

    const appContainer = document.getElementById('app');
    
    const headerElement = document.createElement('header');
    const mainElement = document.createElement('main');
    const footerElement = document.createElement('footer');

    appContainer.appendChild(headerElement);
    appContainer.appendChild(mainElement);
    appContainer.appendChild(footerElement);

    header();
    main();
    footer();
}
