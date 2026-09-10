import {
  Code2, Database, Layers, Server,
  Braces, Terminal, Palette, Lightbulb, Atom,
} from 'lucide-react';

export const personalInfo = {
  name: "G. Raghu Kumar",
  shortName: "RK",
  location: "Bangalore, Karnataka",
  phone: "+918639676116",
  email: "raghuyadav7475@gmail.com",
  linkedin: "https://linkedin.com/in/gollaraghukumar",
  github: "https://github.com/Gollaraghukumar12",
  title: "Java Full Stack Developer",
  tagline: "Building reliable web applications with Java, databases, and modern web technologies.",
  summary: "Computer Science graduate focused on full-stack development, database-driven applications, and practical software engineering.",
  description: "Computer Science graduate (2026) with hands-on experience in Java, JavaScript, and full-stack web development. Skilled in building database-driven applications using Core Java, JDBC, MySQL, and front-end technologies.",
  currentFocus: "Currently completing an integrated Java Full Stack Web Development training program and seeking an entry-level Software Developer role.",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const aboutCards = [
  { number: "2026", label: "Computer Science Graduate", icon: Lightbulb },
  { number: "Java", label: "Primary Development Stack", icon: Code2 },
  { number: "Full Stack", label: "Development Focus", icon: Layers },
  { number: "MySQL", label: "Database Focus", icon: Database },
];

export const experience = [
  {
    title: "Java Full Stack Web Development Trainee",
    subtitle: "with Integrated AI",
    company: "Tap Academy",
    period: "May 2026 - Nov 2026",
    description: "Undergoing structured training in Java Full Stack Web Development with integrated AI, covering Core Java, Advanced Java, JDBC, MySQL, and web technologies. Building hands-on projects including a Food Ordering Website and maintaining structured Java revision notes for interview preparation.",
    technologies: ["Java", "Advanced Java", "JDBC", "MySQL", "Web Technologies", "AI"],
  },
];

export const projects = [
  {
    number: "01",
    title: "Food Ordering Web Application",
    status: "Ongoing",
    description: "Building a full-stack food ordering system using Java Servlets and JSP, with JDBC-based DAO implementation for database operations. Designed the MySQL schema and implemented CRUD operations through a clean DAO architecture that separates business logic from data access. Applying UI/UX principles to create a user-friendly ordering interface using HTML, CSS, and JavaScript.",
    technologies: ["Java", "Servlets", "JSP", "JDBC", "MySQL", "DAO Pattern"],
    visualType: "database",
    liveUrl: null,
  },
  {
    number: "02",
    title: "Phishing Website Detection Using Machine Learning",
    status: "Completed",
    date: "Dec 2025 - Apr 2026",
    description: "Designed and developed the frontend UI using HTML, CSS, and JavaScript for a phishing detection application. Tested the ML model with real-world URLs and integrated prediction results with a clear GOOD/BAD classification display.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "NumPy", "Pandas", "Scikit-learn", "MySQL"],
    visualType: "security",
    liveUrl: "https://gollaraghukumar12.github.io/Phishing-Website-Detection",
  },
];

export const skills = [
  {
    category: "Programming",
    icon: Terminal,
    items: ["Java", "JavaScript", "Python"],
  },
  {
    category: "Frontend",
    icon: Palette,
    items: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Java", "JDBC", "Servlets", "JSP"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["MySQL", "SQL"],
  },
  {
    category: "Core Concepts",
    icon: Braces,
    items: ["OOP", "DSA", "DAO Pattern"],
  },
  {
    category: "Currently Learning",
    icon: Atom,
    items: ["React.js"],
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Science and Engineering",
    institution: "Dr. Samuel George Institute of Engineering and Technology (JNTUK)",
    location: "Markapur, Andhra Pradesh",
    period: "2022 - 2026",
    result: "CGPA: 7.11",
    highlight: "7.11",
    highlightLabel: "CGPA",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Government Junior College",
    location: "Penukonda, Andhra Pradesh",
    period: "2020 - 2022",
    result: "CGPA: 6.42",
    highlight: "6.42",
    highlightLabel: "CGPA",
  },
  {
    degree: "SSC (10th Standard)",
    institution: "ZPH School",
    location: "Kogira",
    period: "2019 - 2020",
    result: "576/600 - 96% - CGPA: 9.6",
    highlight: "96%",
    highlightLabel: "Score",
  },
];

export const certification = {
  title: "Short-Term Internship in Java Programming",
  organization: "ExcelR EdTech Pvt. Ltd.",
  collaboration: "in collaboration with APSCHE",
  duration: "6 weeks",
  date: "August 6, 2024",
};
