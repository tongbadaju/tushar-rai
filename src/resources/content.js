import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Tushar",
  lastName: "Rai",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Frontend Developer",
  avatar: "/images/avatar.jpg",
  email: "tusharrai818@gmail.com",
  location: "Sikkim, India",
  zone: "Asia/Kolkata",
  languages: ["Nepali", "English"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/tongbadaju",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/tusharrai818",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/tongbadaju",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}`,
  description: `Personal Portfolio`,
  headline: <>Hello World!</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-3">Excise Department Website</strong></>,
    href: "/work/excise-dept-website-revamp",
  },
  subline: (
    <>
      I&apos;m Tushar Rai, a {person.role}. With a passion for clean 
      design and scalable code, I&apos;m always exploring new tools, techniques, 
      and technologies to build smarter, faster, and more engaging web 
      solutions.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About - ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  portfolio: {
    display: true,
    link: "https://docs.google.com/document/d/1ytMx7Oq-ETl0cuIbMUBrXwM6Nl0pJjSCGPErV9S6-XI/edit?usp=sharing",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Tushar Rai is a frontend developer with a strong foundation in UI/UX design. 
        He specializes in crafting clean, responsive interfaces that deliver intuitive 
        user experiences. Passionate about bridging the gap between design and 
        development, Tushar constantly explores new technologies to stay current in 
        the ever-evolving frontend landscape.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "National Informatics Centre",
        timeframe: "Jan 2025 - July 2025",
        role: "Web Developer Intern",
        logo: "/images/dept/nic.png",
        address: "Gangtok, Sikkim",   
        achievements: [
          <>
            Collaborated with a team to revamp the official Excise Department, 
            Govt. of Sikkim website, modernizing its infrastructure and user 
            interface for better performance and accessibility.
          </>
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Sikkim Manipal Institute of Technology",
        address: "Majitar, Sikkim",
        duration: "2021 - 2025",
        description: "Bachelor of Technology — Computer Science & Engineering.",
        logo: "/images/dept/manipal.png",
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        images: [
          {
            src: "/images/tech/angular.png",
            alt: "Angular",
            width: 3,
            height: 3,
            link: "https://angular.io",
          },
          {
            src: "/images/tech/typescript.png",
            alt: "TypeScript",
            width: 3,
            height: 3,
            link: "https://www.typescriptlang.org",
          },
          {
            src: "/images/tech/javascript.png",
            alt: "JavaScript",
            width: 3,
            height: 3,
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          },
          {
            src: "/images/tech/nodejs.png",
            alt: "Node.js",
            width: 3,
            height: 3,
            link: "https://nodejs.org/",
          },
          {
            src: "/images/tech/html.png",
            alt: "HTML",
            width: 3,
            height: 3,
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          },
          {
            src: "/images/tech/css.png",
            alt: "CSS",
            width: 3,
            height: 3,
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          },
          {
            src: "/images/tech/tailwindcss.png",
            alt: "TailWind CSS",
            width: 3,
            height: 3,
            link: "https://tailwindcss.com/",
          },
          {
            src: "/images/tech/figma.png",
            alt: "Figma",
            width: 3,
            height: 3,
            link: "https://www.figma.com/",
          },
          {
            src: "/images/tech/django.png",
            alt: "Django",
            width: 3,
            height: 3,
            link: "https://www.djangoproject.com",
          },
          {
            src: "/images/tech/python.png",
            alt: "Python",
            width: 3,
            height: 3,
            link: "https://www.python.org/",
          },
          {
            src: "/images/tech/postgresql.png",
            alt: "PostgreSQL",
            width: 3,
            height: 3,
            link: "https://www.postgresql.org",
          },
          {
            src: "/images/tech/git.png",
            alt: "Git",
            width: 3,
            height: 3,
            link: "https://git-scm.com/",
          },
        ],
      },
    ],
  },
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, home, about, work};
