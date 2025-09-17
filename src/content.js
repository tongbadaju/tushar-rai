const profile = {
  firstName: 'Tushar',
  lastName: 'Rai',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  email: 'tusharrai818@gmail.com',
  location: 'Namchi, Sikkim',
  resume: 'https://docs.google.com/document/d/1ytMx7Oq-ETl0cuIbMUBrXwM6Nl0pJjSCGPErV9S6-XI/edit?usp=sharing'
};

const about = {
  description: "I am a front-end developer based in Namchi looking for exciting opportunities. Has Computer Science and Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs. While I am not programming, I enjoy going on rides and gym. Learning more to improve skill.",
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
        site: 'https://www.c-language.org/',
    },
    {
        name: 'css',
        icon: 'icons/css.svg',
        site: 'https://www.w3.org/Style/CSS/Overview.en.html',
    },
    {
        name: 'figma',
        icon: 'icons/figma.svg',
        site: 'https://www.figma.com/',
    },
    {
        name: 'git',
        icon: 'icons/git.svg',
        site: 'https://git-scm.com/',
    },
    {
        name: 'github',
        icon: 'icons/github.svg',
        site: 'https://github.com/',
    },
    {
        name: 'html',
        icon: 'icons/html.svg',
        site: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
        name: 'javascript',
        icon: 'icons/javascript.svg',
        site: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        name: 'postgresql',
        icon: 'icons/postgresql.svg',
        site: 'https://www.postgresql.org/',
    },
    {
        name: 'postman',
        icon: 'icons/postman.svg',
        site: 'https://www.postman.com/',
    },
    {
        name: 'react',
        icon: 'icons/react.svg',
        site: 'https://react.dev/',
    },
    {
        name: 'sass',
        icon: 'icons/sass.svg',
        site: 'https://sass-lang.com/',
    },
    {
        name: 'tailwindcss',
        icon: 'icons/tailwindcss.svg',
        site: 'https://tailwindcss.com/',
    },
    {
        name: 'typescript',
        icon: 'icons/typescript.svg',
        site: 'https://www.typescriptlang.org/',
    },    
]

const works = [
  {
    title: 'Kotha Property Platform',
    description:
      'Independently designed and developed a scalable full-stack rental platform with a modular frontend and secure backend. Designed responsive, accessible UIs and developed dynamic property listings with role-based dashboards. API-driven lease workflows streamlined operations and improved the user experience across devices.',
    year: 2025,
    role: 'Full-Stack Developer',
    image: 'images/works/kotha.avif',
    github: 'https://github.com/tongbadaju/kotha',
    techStack: 'Angular, TailwindCSS, Django, DRF, PostgreSQL'
  },
  {
    title: 'Excise Dept Website Revamp',
    description:
      "Collaborated with a team to revamp the Government of Sikkim's Excise Department website, delivering a scalable full-stack solution. Built secure, role-based dashboards and a responsive, accessible UI. Automated license workflows with API-driven forms and dynamic data handling and improved the overall user experience.",
    year: 2025,
    role: 'Front-End Developer',
    image: 'images/works/excise.avif',
    techStack: 'Angular, Django, DRF, PostgreSQL'
  },
  {
    title: 'Designer Portfolio',
    description:
      "Designed and developed a personal portfolio for a professional graphic designer.",
    year: 2025,
    role: 'Front-End Developer',
    image: 'images/works/niten-design.avif',
    demo: 'https://niten-design.vercel.app',
    github: 'https://github.com/tongbadaju/niten.design',
    techStack: 'React, TailwindCSS'
  },
  {
    title: 'Unfolo',
    description:
      "Instagram tracker for unfollowers.",
    year: 2025,
    role: 'Front-End Developer',
    image: 'images/works/unfolo.avif',
    demo: 'https://unfolo.vercel.app',
    github: 'https://github.com/tongbadaju/unfolo',
    techStack: 'React, TailwindCSS'
  },
  {
    title: 'Healthhub',
    description:
      "Secure, scalable healthcare backend built with Django, DRF, and PostgreSQL. Implements JWT authentication, RESTful APIs for patient-doctor management, and robust data modeling using Django ORM. Designed for real-world deployment with environment-based config, validation, and role-based access.",
    year: 2025,
    role: 'Back-End Developer',
    image: 'images/works/healthhub.avif',
    github: 'https://github.com/tongbadaju/healthhub',
    techStack: 'Django, Django REST Framework (DRF), PostgreSQL'
  },
];

const experiences = [
  {
    title: 'Freelance Developer',
    date: 'July 2025 - Present',
    description: 'Working as an independent freelance developer. Exploring and learning new technologies.',
    icon: 'svg', 
    iconType: 'svg',
    organization: '',
    bullets: [],
  },
  {
    title: 'Web Developer Intern',
    date: 'January - July 2025',
    description: '',
    icon: 'images/depts/nic.png',
    iconType: 'img',
    organization: 'National Informatics Center, Sikkim State Unit',
    bullets: [
      'Collaborated with a team to revamp the official Excise Department website.',
      'Modernized its infrastructure and user interface for better performance and accessibility.',
      'Built role-based secure dashboards and responsive UI compliant with accessibility standards.',
      'Automated license application workflows with API-driven forms and dynamic data handling.',
    ],
  },
]

const education = [
  {
    degree: 'BTech in Computer Science & Engineering',
    institution: 'Sikkim Manipal Institute of Technology',
    date: '2021 - 2025',
    icon: 'images/depts/manipal.png',
    iconType: 'img',
  },
  {
    degree: 'Intermediate Education',
    institution: 'Govt. Senior Secondary School, Sadam',
    date: '2019 - 2021',
    icon: 'images/depts/sikkim-seal.png',
    iconType: 'img',
  },
]

/* const testimonials = {
  name: 'Niten Rai',
  designation: 'Graphic Designer',
  company: 'Shangrila Industries Pvt. Ltd.',
  message: ''
}
 */
export { profile, about, skills, works, social, experiences, education/* testimonials */};