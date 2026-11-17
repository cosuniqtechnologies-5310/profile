export interface ClientProject {
  id: string;
  title: string;
  url: string;
  displayUrl: string;
  category: 'Flagship & IoT' | 'Design & Dev' | 'Enterprise & Global' | 'E-Commerce' | 'Custom Products';
  highlight?: string;
  tech: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  type: string;
  summary: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  skills?: string;
  credentialUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
}

export const PROFILE_DATA = {
  name: "Gowtham Selvaraj",
  headline: "Curious Mind | Problem Solver | Senior Polyglot Engineer",
  email: "gowthamdeveloper94@gmail.com",
  phone: "+91 73586 96546",
  phoneRaw: "7358696546",
  location: "Tamil Nadu, India",
  experienceYears: "7.5+",
  linkedInUrl: "https://in.linkedin.com/in/gowtham-selvaraj-7b57481aa",
  githubUrl: "https://github.com/GowthamSelvaraj123",
  behanceUrl: "https://www.behance.net/img_cbe_gowtham",

  intro: `I don’t just write code; I build solutions. With over 7.5 years of experience spanning from Graphic Design to Core Software Engineering, I have developed a unique perspective on building products that are both visually stunning and architecturally sound.

I am passionate about exploring complex ideas and turning them into scalable real-world applications. Whether it's architecting Microservices in Go, building high-performance frontends in Next.js/Remix, or managing cloud infrastructure on GCP/AWS, I thrive on solving difficult technical challenges.`,

  // What I bring to the table (straight from user)
  whatIBring: [
    {
      title: "Multidisciplinary Expertise",
      summary: "Proficient in JavaScript (TypeScript), Go, Python, and PHP.",
      tags: ["TypeScript", "Go (Golang)", "Python", "PHP"],
    },
    {
      title: "Full-Stack Mastery",
      summary: "Expert in modern React, Next.js, Remix, NestJS, and Laravel.",
      tags: ["React", "Next.js", "NestJS", "Laravel"],
    },
    {
      title: "Product Thinking",
      summary: "Built 3+ independent products from scratch, including an ERP-integrated Bus Tracker and custom CRM tool.",
      tags: ["ERP Bus Tracker", "Custom CRM", "Microservices"],
    },
    {
      title: "Infrastructure & Scale",
      summary: "Hands-on experience with Linux administration, AWS, GCP, and microservices architecture.",
      tags: ["Linux", "AWS", "GCP", "Docker"],
    },
  ],

  // Simplified Skills
  skills: {
    "Languages": ["JavaScript / TypeScript", "Go (Golang)", "Python", "PHP", "SQL"],
    "Frontend": ["React.js", "Next.js", "Remix", "AngularJS", "Tailwind CSS", "jQuery", "HTML5 / CSS3"],
    "Backend & APIs": ["Go Microservices", "NestJS", "Node.js (Express)", "Laravel", "Flask", "WebSockets", "REST APIs"],
    "Cloud & Databases": ["MySQL", "MongoDB", "PostgreSQL", "Linux Admin", "GCP", "AWS", "Docker"],
    "Design & Tools": ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Lucidchart", "Git / GitHub"],
  },

  // Simplified Projects with live links
  projects: [
    {
      id: "cosuniq",
      title: "Cosuniq Technologies",
      url: "https://cosuniq.in",
      displayUrl: "cosuniq.in",
      category: "Flagship & IoT",
      highlight: "Freelance agency & tech infrastructure",
      tech: ["Next.js", "TypeScript", "Tailwind"],
    },
    {
      id: "smartsolutioniot",
      title: "Smart Solution IoT",
      url: "https://smartsolutioniot.com/",
      displayUrl: "smartsolutioniot.com",
      category: "Flagship & IoT",
      highlight: "IoT platform & hardware telemetry",
      tech: ["IoT", "Hardware", "Web"],
    },
    {
      id: "orangebabe",
      title: "Orangebabe",
      url: "https://orangebabe.com/",
      displayUrl: "orangebabe.com",
      category: "Flagship & IoT",
      highlight: "Consumer brand platform",
      tech: ["Responsive Web", "PHP"],
    },
    {
      id: "lean365",
      title: "Lean365.ai",
      url: "https://lean365.ai/",
      displayUrl: "lean365.ai",
      category: "Design & Dev",
      highlight: "AI product design & web app",
      tech: ["AI SaaS", "UI/UX", "Next.js"],
    },
    {
      id: "cruzzesolutions",
      title: "Cruzze Solutions",
      url: "https://cruzzesolutions.com/",
      displayUrl: "cruzzesolutions.com",
      category: "Design & Dev",
      highlight: "Creative design & frontend web",
      tech: ["Design", "JavaScript"],
    },
    {
      id: "digitalhealthgp",
      title: "Digital Health GP",
      url: "https://digitalhealthgp.com/",
      displayUrl: "digitalhealthgp.com",
      category: "Design & Dev",
      highlight: "Healthcare telehealth platform",
      tech: ["Healthcare UX", "Web App"],
    },
    {
      id: "themediamaestro",
      title: "The Media Maestro",
      url: "https://themediamaestro.com/",
      displayUrl: "themediamaestro.com",
      category: "Design & Dev",
      highlight: "Creative digital portfolio",
      tech: ["Branding", "Frontend"],
    },
    {
      id: "btg",
      title: "BTG Global",
      url: "https://btg.com/",
      displayUrl: "btg.com",
      category: "Enterprise & Global",
      highlight: "Multi-language file downloads & AJAX search",
      tech: ["PHP", "jQuery", "AJAX"],
    },
    {
      id: "nvavg",
      title: "NVAVG (Netherlands)",
      url: "https://nvavg.nl/",
      displayUrl: "nvavg.nl",
      category: "Enterprise & Global",
      highlight: "Interactive location map pinning with jQuery",
      tech: ["jQuery", "Maps API", "PHP"],
    },
    {
      id: "dvwest",
      title: "DV West (Australia)",
      url: "https://www.dvwest.org.au/",
      displayUrl: "dvwest.org.au",
      category: "Enterprise & Global",
      highlight: "Integrated WCAG Disability Accessibility",
      tech: ["Accessibility (WCAG)", "Web"],
    },
    {
      id: "northernuni",
      title: "Northern University (Sri Lanka)",
      url: "https://northernuni.lk/",
      displayUrl: "northernuni.lk",
      category: "Enterprise & Global",
      highlight: "Academic university portal",
      tech: ["WordPress", "PHP"],
    },
    {
      id: "destinationsenja",
      title: "Destination Senja (Norway)",
      url: "https://www.destinationsenja.com/",
      displayUrl: "destinationsenja.com",
      category: "Enterprise & Global",
      highlight: "Arctic travel & tourism platform",
      tech: ["UI/UX", "Responsive Web"],
    },
    {
      id: "partumsoftwares",
      title: "Partum Softwares",
      url: "https://partumsoftwares.com/",
      displayUrl: "partumsoftwares.com",
      category: "Enterprise & Global",
      highlight: "IT enterprise software portal",
      tech: ["JavaScript", "PHP"],
    },
    {
      id: "cambrianplantsales",
      title: "Cambrian Plant Sales (UK)",
      url: "https://cambrianplantsales.co.uk/",
      displayUrl: "cambrianplantsales.co.uk",
      category: "Enterprise & Global",
      highlight: "Industrial equipment catalog",
      tech: ["PHP", "Catalog System"],
    },
    {
      id: "krishinutrition",
      title: "Krishi Nutrition",
      url: "https://www.krishinutrition.com/",
      displayUrl: "krishinutrition.com",
      category: "Enterprise & Global",
      highlight: "Agricultural nutrition formulations",
      tech: ["Web Development", "PHP"],
    },
    {
      id: "arkayglenrock",
      title: "Arkay Glenrock",
      url: "https://www.arkayglenrock.com/",
      displayUrl: "arkayglenrock.com",
      category: "Enterprise & Global",
      highlight: "Natural stone export portal",
      tech: ["Web Development", "UI/UX"],
    },
    {
      id: "surabuilders",
      title: "Sura Builders",
      url: "https://surabuilders.com/",
      displayUrl: "surabuilders.com",
      category: "Enterprise & Global",
      highlight: "Real estate & construction portal",
      tech: ["Web Development", "Frontend"],
    },
    {
      id: "smallbusinessweb",
      title: "Small Business Web",
      url: "https://smallbusinessweb.co/",
      displayUrl: "smallbusinessweb.co",
      category: "Enterprise & Global",
      highlight: "B2B small business web services",
      tech: ["Modern Web", "PHP"],
    },
    {
      id: "magickwoods",
      title: "Magickwoods Global Network (13+ Sites)",
      url: "https://www.magickwoods.com/",
      displayUrl: "magickwoods.com",
      category: "E-Commerce",
      highlight: "13+ corporate & WooCommerce websites",
      tech: ["WooCommerce", "WordPress", "Multi-site"],
    },
    {
      id: "angelhairextensions",
      title: "Angel Hair Extensions (UK)",
      url: "https://www.angelhairextensions.co.uk/",
      displayUrl: "angelhairextensions.co.uk",
      category: "E-Commerce",
      highlight: "UK e-commerce store with product variants",
      tech: ["WooCommerce", "Payment Gateway"],
    },
    {
      id: "cardifflawnandgarden",
      title: "Cardiff Lawn & Garden (UK)",
      url: "https://cardifflawnandgarden.co.uk/",
      displayUrl: "cardifflawnandgarden.co.uk",
      category: "E-Commerce",
      highlight: "Machinery shop with specialized shipping logic",
      tech: ["WooCommerce", "Shipping Rules"],
    },
    {
      id: "bus-tracker",
      title: "ERP-Integrated Real-Time Bus Tracker",
      url: "#",
      displayUrl: "Built from scratch",
      category: "Custom Products",
      highlight: "Real-time WebSockets, GPS telemetry, ERP integration",
      tech: ["WebSockets", "Go", "Next.js", "MySQL"],
    },
    {
      id: "crm-tool",
      title: "Custom CRM & Workflow Engine",
      url: "#",
      displayUrl: "Built from scratch",
      category: "Custom Products",
      highlight: "Pipeline automation, RBAC, webhooks, replaced SaaS",
      tech: ["Next.js", "NestJS", "MySQL"],
    },
  ],

  // Direct Experience List
  experiences: [
    {
      role: "Freelance Senior Developer & Solutions Architect",
      company: "Cosuniq Technologies",
      period: "Jun 2026 – Present",
      location: "Udumalaippettai, Tamil Nadu, India",
      type: "Freelance",
      summary: "Software infrastructure, web technologies, and custom application engineering.",
      skills: ["Software Infrastructure", "Web Technologies", "Full-Stack"],
    },
    {
      role: "Senior Fullstack Developer",
      company: "Tezfo | Powering Businesses with Tech",
      period: "Oct 2025 – Jun 2026",
      location: "Coimbatore, Tamil Nadu, India (Remote)",
      type: "Full-time",
      summary: "Systems design, technical architecture, and cross-functional full-stack features.",
      skills: ["Lucidchart", "Systems Design", "Next.js", "Full-Stack"],
    },
    {
      role: "Core Developer",
      company: "Skylink Fibernet",
      period: "Dec 2024 – Aug 2025",
      location: "India",
      type: "Full-time",
      summary: "Engineered core telecom and network management tools using MongoDB and Tailwind CSS.",
      skills: ["MongoDB", "Tailwind CSS", "JavaScript"],
    },
    {
      role: "Frontend Software Engineer",
      company: "Elhaa Technologies Pvt Ltd",
      period: "Nov 2023 – Nov 2024",
      location: "Coimbatore, Tamil Nadu, India",
      type: "Full-time",
      summary: "Developed responsive web applications and modular client-side components.",
      skills: ["AngularJS", "Software Development", "JavaScript"],
    },
    {
      role: "Front End Developer",
      company: "ColorWhistle",
      period: "Jul 2021 – Oct 2023",
      location: "Tamil Nadu, India",
      type: "Full-time",
      summary: "Built custom client web platforms and managed Linux hosting environments.",
      skills: ["Linux", "jQuery", "JavaScript"],
    },
    {
      role: "WordPress Developer",
      company: "Designpluz Branding Services",
      period: "Jul 2020 – Jul 2021",
      location: "Coimbatore, Tamil Nadu, India",
      type: "Full-time",
      summary: "Front-end coding, Next.js, and bespoke WordPress website development.",
      skills: ["Front-end Coding", "Next.js", "WordPress"],
    },
    {
      role: "Graphic Designer",
      company: "Integra Global Solutions Corp",
      period: "Apr 2018 – Apr 2020",
      location: "Coimbatore, Tamil Nadu, India",
      type: "Full-time",
      summary: "UI design, branding assets, and marketing visuals using Adobe Photoshop & Illustrator.",
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Graphic Design"],
    },
  ],

  // Direct Education List
  education: [
    {
      degree: "B.Sc. CT (Computer Technology, Hardwares & Software)",
      institution: "Sree Saraswathi Thiagaraja College",
      period: "2011 – 2014",
      grade: "Grade: B",
    },
    {
      degree: "UI Developer, Graphic, UI & Web Design",
      institution: "Image Institute of Multimedia Arts and Graphic Effects",
      period: "2017 – 2018",
      grade: "Grade: B",
    },
  ],

  // Direct Certifications List
  certifications: [
    {
      name: "MySQL Bootcamp",
      issuer: "Udemy",
      date: "Nov 2025",
      skills: "MySQL",
    },
    {
      name: "100 Days of Code: Complete Python Pro Bootcamp",
      issuer: "Udemy",
      date: "May 2025",
      skills: "Flask, Data Science, Python",
      credentialUrl: "https://www.udemy.com/certificate/UC-062120fa-159a-4aec-9bb4-05c15146ce13/",
    },
    {
      name: "Angular",
      issuer: "Academind",
      date: "May 2025",
      skills: "Angular",
      credentialUrl: "https://www.udemy.com/certificate/UC-f2dab80c-bb70-4fae-83e9-446afc025a48/",
    },
    {
      name: "Data Structures & Algorithms",
      issuer: "Udemy",
      date: "Mar 2025",
      skills: "Data Structures, Algorithms",
      credentialUrl: "https://www.udemy.com/certificate/UC-84685531-74e4-4468-80e6-43f291aa1a09/",
    },
    {
      name: "MERN Stack Developer",
      issuer: "Qtree Technologies",
      date: "Dec 2024",
      skills: "MongoDB, Express, React, Node",
    },
    {
      name: "Node.js",
      issuer: "Academind",
      date: "Jan 2025",
      skills: "Node.js, MongoDB",
      credentialUrl: "https://www.udemy.com/certificate/UC-dd4e27d9-69ac-429e-a044-dc582236c3c2/",
    },
    {
      name: "JavaScript Specialist Certification",
      issuer: "Udemy",
      skills: "Core JavaScript, React.js, Node.js",
      credentialUrl: "https://www.udemy.com/certificate/UC-33807c4e-f257-467b-bc70-95df71c5d2b7/",
    },
    {
      name: "React.js",
      issuer: "Academind",
      skills: "React.js",
      credentialUrl: "https://www.udemy.com/certificate/UC-aef5c22f-4752-4183-b2db-2e0876198215/",
    },
  ],
};
