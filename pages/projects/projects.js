export const projects = [
    {
        positionName: 'PayShare',
        startDate: 'WIP',
        imageUrl: '/resources/logos/PayShare2.jpg',
        link: ''
    },
    {
    positionName: 'This website',
    startDate: 'July 2023',
    imageUrl: '/resources/logos/logo-shds.jpg',
    link: '#'
},
{
    positionName: 'GuutRecords',
    startDate: 'May 2023',
    imageUrl: '/resources/logos/GuutRecords_nobackground.jpg',
    link: 'https://guutrecords.netlify.app/'
},
{
    positionName: 'QueMePongo!',
    startDate: 'April 2023',
    imageUrl: '/resources/logos/quemepongo-logo.png',
    link: 'https://quemepongo.netlify.app/'
},
];


export const tagTemplateDescriptionProjects = [
    `
    <p>
    I'm currently building a mobile app to register shared payments. The idea is to handle payments within my close friends and eliminate the friction of paying for someone else and receiving the money back later on. The hypothesis is that people don't like to pay for others (even though they are really close friends) because it's a pain to remember and to ask back for the money.
    </p><br>
    <p>
    There are tons of solutions out there focused on solving the payment problem itselt, however with PayShare I'm just worried about eliminating the barriers that stop people from paying for someone else without inviting them. Why at a restaurant the waiter has to go around to each person and ask them to pay individually? Why can't we access our money through anyone elses phone?
    </p><br>
    <p>
    I suffer this problem myself however I don't know if this is something people really care about. The MVP aims to validate if reminding the user about the drinks they paid for the night before is helpful for them. It's about making sure they don't have to stress about remembering to ask for their money back.
    </p>
    `,
    `
    <p>
    I've created this website with the goal of differenciating my profile from anyother on Linkedin. I want to use this site to share it and keep track of the projects I work on. I want it to be a project in continous development and work on improving it as I learn new skills and technologies. Ultimately I want this website to be my profile on the Internet with access to everything I have worked on.
    </p><br>
    <p>
    On top of this, it is very good practise to learn JavaScript and the fundamentals of design and webpage development in Vite :)
    </p>
    `,
    `
    <p>
    I built the website for an <a href = "${projects[2].link}" class = "description-link" target = "_blank">online vinyl store</a>. The store itself didn't exists and I never wanted to sell anaything. The goal was to build the landing page for an ecommerce and focus on aligning the visual design with the type of products sold and with the audience.
    </p><br>
    <p>
    On top of the design, I focused on adding basic ecommerce functionalities like a burger menu at the top right-hand corner of the page and a filter section to interact with the product display.
    </p><br>
    <p>
    In this project I got to learn JavaScript and put it into practise for the search and filter sections.
    </p>
    `,
    `
    <p>
    In April 2023 I started a <a href = "https://www.rockthecode.es/new/" class = "description-link" target = "_blank">bootcamp</a> focused on learning to code webapps. I had coded in university basic scripts in Python and Matlab before, however this was my first experience building something with code and delivering an end result which someone could interact with.
    </p><br>
    <p>
    This first project in the bootcamp was focused on building a <a href = "${projects[3].link}" class = "description-link" target = "_blank">landing page</a> for an ecommerce. The project guidelines suggested to replicate <a href = "https://www.pccomponentes.com/" class = "description-link" target = "_blank">PC Componente's</a> webpage, however at the moment I was thinking about the problem of unused clothes resting in wardrobes and decided to make the site for a second-hand wedding dresses marketplace.
    </p><br>
    <p>
    This was my first time working with Github and how software projects are built. I also learnt how to make the site mobile responsive.
    </p>
    `
];

