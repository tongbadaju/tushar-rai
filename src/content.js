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
  description: "I am a developer and entrepreneur based in Sikkim with a Computer Science & Engineering background. Currently, I'm co-founding Propotee, a proptech startup revolutionizing the rental experience. I'm passionate about building accessible, user-friendly products that solve real problems. When I'm not coding, you'll find me riding or at the gym.",
  shortDescription: "Co-Founder & CTO at Propotee. Building accessible and user-friendly digital experiences."
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
    {
        name: 'django',
        icon: 'icons/django.svg',
        site: 'https://www.djangoproject.com/',
    },
    {
        name: 'vite',
        icon: 'icons/vite.svg',
        site: 'https://vitejs.dev/',
    },
]

const works = [
  {
    title: 'Propotee',
    description:
      'A modern proptech SaaS real estate marketplace that directly connects tenants with property owners, eliminating intermediaries and brokerage fees. We bridge the gap in the market by facilitating direct communication, ensuring a frictionless, transparent, and verified rental experience.',
    year: 2025,
    role: 'Co-Founder & CTO',
    image: 'images/works/propotee.avif',
    demo: 'https://propotee.com',
    techStack: 'Angular, TailwindCSS, Django, PostgreSQL'
  },
  {
    title: 'Excise Dept Website Revamp',
    description:
      "Collaborated with a team to revamp the Government of Sikkim's Excise Department website, delivering a scalable full-stack solution. Built secure, role-based dashboards and a responsive, accessible UI. Automated license workflows with API-driven forms and dynamic data handling and improved the overall user experience.",
    year: 2025,
    role: 'Lead Developer',
    image: 'images/works/excise.avif',
    techStack: 'Angular, Django, PostgreSQL'
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
    techStack: 'React, Vite, TailwindCSS'
  },
  {
    title: 'Daju Bhai Motorcycle Club',
    description:
      'Developed a community platform for an enthusiast motorcycle club based in Namchi, Sikkim',
    year: 2026,
    role: 'Front-End Developer',
    image: 'images/works/dajubhai-mc.avif',
    demo: 'https://dajubhaimc.vercel.app',
    github: 'https://github.com/tongbadaju/dajubhai-mc',
    techStack: 'React, Vite'
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
    techStack: 'React, Vite, TailwindCSS'
  },
  {
    title: 'Healthhub',
    description:
      "Secure, scalable healthcare backend built with Django, DRF, and PostgreSQL. Implements JWT authentication, RESTful APIs for patient-doctor management, and robust data modeling using Django ORM. Designed for real-world deployment with environment-based config, validation, and role-based access.",
    year: 2025,
    role: 'Back-End Developer',
    image: 'images/works/healthhub.avif',
    github: 'https://github.com/tongbadaju/healthhub',
    techStack: 'Django, PostgreSQL'
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