const profile = {
  firstName: 'Tushar',
  lastName: 'Rai',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  avatar: '/images/avatar.jpg',
  email: 'tusharrai818@gmail.com',
};

const about = {
  shortDescription: "A Sikkim based front-end developer passionate about building accessible and user friendly websites."
};

const social = [
  {
    name: 'GitHub',
    link: 'https://github.com/tongbadaju',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/tusharrai818',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/tongbadaju',
  },
];

const skills = [
    {
        name: 'angular',
        icon: 'icons/angular.svg',
        site: 'https://angular.dev/',
    },
    {
        name: 'c',
        icon: 'icons/c.svg',
        site: '',
    },
    {
        name: 'css',
        icon: 'icons/css.svg',
        site: '',
    },
    {
        name: 'figma',
        icon: 'icons/figma.svg',
        site: '',
    },
    {
        name: 'git',
        icon: 'icons/git.svg',
        site: '',
    },
    {
        name: 'github',
        icon: 'icons/github.svg',
        site: '',
    },
    {
        name: 'html',
        icon: 'icons/html.svg',
        site: '',
    },
    {
        name: 'javascript',
        icon: 'icons/javascript.svg',
        site: '',
    },
    {
        name: 'postgresql',
        icon: 'icons/postgresql.svg',
        site: '',
    },

    {
        name: 'postman',
        icon: 'icons/postman.svg',
        site: '',
    },
    {
        name: 'python',
        icon: 'icons/python.svg',
        site: '',
    },
    {
        name: 'react',
        icon: 'icons/react.svg',
        site: '',
    },
    {
        name: 'sass',
        icon: 'icons/sass.svg',
        site: '',
    },
    {
        name: 'tailwindcss',
        icon: 'icons/tailwindcss.svg',
        site: '',
    },
    {
        name: 'typescript',
        icon: 'icons/typescript.svg',
        site: '',
    },    
]

const works = [
  {
    title: 'Kotha Property Platform',
    description:
      'Independently architected a scalable full-stack rental platform featuring a modular frontend and secure backend infrastructure. Designed accessible, responsive user interfaces and built dynamic property listings with role-based dashboards. Developed API-driven lease workflows to streamline operations and deliver a seamless user experience across devices.',
    year: 2025,
    role: 'Full-Stack Developer',
    image: 'images/works/work.png',
    demo: 'https://your-demo-link.com',
    github: 'https://github.com/your-repo',
  },
  {
    title: 'Adventure Time Promo',
    description:
      'Teamed up with a designer to breathe life into a promotional webpage for our favorite show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.',
    year: 2023,
    role: 'Front-end Developer',
    image: 'images/works/work.png',
    demo: 'https://your-demo-link.com',
    github: 'https://github.com/your-repo',
  },
  
];

export { profile, about, skills, works, social};