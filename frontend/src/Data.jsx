import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import sarkarImg from './assets/sarkar.png';
import tuitionHub from './assets/tuitionHub.jpg';

export const contactInfo = [
  {
    type: "Phone",
    value: "+91 8459729470",
    icon: <FaPhone />
  },
  {
    type: "Email",
    value: "dev.bhumesh@gmail.com", 
    icon: <FaEnvelope />
  },
  {
    type: "Location",
    value: "Gondia, Maharashtra",
    icon: <FaMapMarkerAlt />
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/bhumeshkatre",
    icon: <FaGithub />
  },
  {
    name: "LinkedIn", 
    url: "https://linkedin.com/in/bhumeshkatre",
    icon: <FaLinkedin />
  },
  {
    name: "Twitter",
    url: "https://twitter.com/dev_bhumesh",
    icon: <FaTwitter />
  }
];

export const experience = [
  {
    id: 1,
    type: "internship",
    company: "KodeKalp Global Technologies Pvt. Ltd.",
    role: "Web Development Intern",
    startDate: "February 2025",
    endDate: "April 2025",
    description: "Worked on real-world web development projects including responsive frontend and dynamic backend development using React.js, Node.js, and Firebase.",
    technologies: ["React.js", "Node.js", "Firebase", "DaisyUI", "GitHub"],
    certificate: "https://drive.google.com/your-certificate-link",
    website: "https://kodekalp.com",
    img: "https://via.placeholder.com/300x200?text=KodeKalp"
  },
  
];

export const education = [
  {
    degree: "Bachelor of Commerce in Computer Applications (BCCA)",
    university: "Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU)",
    college: "Natawarlal Maniklal Dalal College, Gondia",
    yearStarted: 2022,
    yearCompleted: 2025,
    description:
      "A comprehensive program that merges business administration with computer applications, equipping students with skills in web development, database management, and software engineering.",
    status: "Completed",
  },
  {
    degree: "ITI COPA (Computer Operator and Programming Assistant)",
    university: "Industrial Training Institute (ITI), Gondia",
    yearStarted: 2020,
    yearCompleted: 2022,
    description:
      "A one-year technical training program that covered basic computer operations, programming languages like C, and essential software tools.",
    status: "Completed",
  },
  {
    degree: "Higher Secondary (12th Grade)",
    stream: "Commerce",
    board: "Maharashtra State Board",
    yearStarted: 2018,
    yearCompleted: 2020,
    description:
      "Two years of study focusing on core business concepts, economics, and general education, preparing for university education.",
    status: "Completed",
  },
  {
    degree: "Secondary School (10th Grade)",
    board: "Maharashtra State Board",
    yearStarted: null,
    yearCompleted: 2018,
    description:
      "Completed basic education with a focus on fundamental subjects like Mathematics, Science, and Social Studies.",
    status: "Completed",
  },
];

export const projects = [
   {
    id: 3,
    name: "Sarkari Scheme",
    description: "A government schemes portal with filters for states and categories.",
    status: "In Progress",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/yourusername/sarkari-scheme",
    url: "https://sarkari-scheme-demo.com",
    img: sarkarImg,
  },
  {
    id: 4,
    name: "Tuition Hub",
    description: "A tuition management platform with batch, payment, and salary modules.",
    status: "In Progress",
    technologies: ["PHP", "MySQL", "Firebase", "JavaScript"],
    github: "https://github.com/yourusername/tuition-hub",
    url: "https://tuition-hub-demo.com",
    img: tuitionHub
  },
  {
    id: 1,
    name: "WanderLust",
    description: "A travel app to manage listings.",
    status: "In Progress",
    technologies: ["Node.js", "MongoDB", "Express", "EJS"],
    github: "https://github.com/yourusername/wanderlust",
    url: "https://wanderlust-demo.com",
    img: "https://via.placeholder.com/300x200?text=WanderLust"
  },
  {
    id: 2,
    name: "CloudCommerse",
    description: "An e-commerce website project.",
    status: "In Progress",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/yourusername/cloudcommerse",
    url: "https://cloudcommerse-demo.com",
    img: "https://via.placeholder.com/300x200?text=CloudCommerse"
  },
];


export const mySkills = [
  "React",
  "JavaScript",
  "Node.js",
  "HTML/CSS",
  "Tailwind",
  "Github",
  "Bootstrap",
  "MongoDB",
];

export const navLinks = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About" },
  { id: 3, path: "/projects", name: "Projects" },
  { id: 4, path: "/contact", name: "Contact" }
];

