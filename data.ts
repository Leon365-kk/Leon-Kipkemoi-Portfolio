
import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Leon Kipkemoi",
  title: "Cybersecurity, AI & STEM Professional",
  email: "leonkipkemoi564@gmail.com",
  phone: "(+254) 0701155418",
  linkedin: "www.linkedin.com/in/leon-kipkemoi-21366b205",
  github: "github.com/Leon365-kk",
  location: "Kericho, Kenya",
  profileImage: "/Profile Pic.jpg", 
  about: "Highly motivated technology professional with experience in software development, AI, and cybersecurity. Passionate about building impactful tech solutions, advancing youth digital skills, and leveraging AI to solve real-world challenges.",
  skills: [
    "Cybersecurity", "Artificial Intelligence", "Software Development", "Network Security", 
    "Threat Hunting", "Vulnerability Management", "Digital Forensics", "Data Analysis",
    "STEM Education", "Web Development", "IT Infrastructure", "Robotics"
  ],
  education: {
    degree: "Bachelor of Science in Information Security and Forensics",
    school: "KCA University",
    period: "2020 - Current"
  },
  projects: [
    {
      title: "Overlayink",
      description: "A professional creative design and branding platform showcasing advanced UI/UX principles and digital assets management.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      category: "Web",
      githubUrl: "https://github.com/Leon365-kk/Overlayink",
      liveUrl: "https://overlayink.vercel.app"
    },
    {
      title: "Wote Kwa Wote CBO Website",
      description: "The official digital platform for Wote Kwa Wote Community Based Organization, facilitating community outreach and project tracking.",
      tech: ["Next.js", "Firebase", "TypeScript"],
      category: "Web",
      githubUrl: "https://github.com/Leon365-kk/Wote-Kwa-Wote-website",
      liveUrl: "https://wotekwawote.org"
    },
    {
      title: "M-Pesa Supabase Backend",
      description: "A robust backend integration layer connecting Safaricom's M-Pesa Daraja API with Supabase for real-time payment processing and data persistence.",
      tech: ["Node.js", "Supabase", "Express", "Daraja API"],
      category: "Cybersecurity",
      githubUrl: "https://github.com/Leon365-kk/mpesa_supabase_backend"
    },
    {
      title: "Poolpay",
      description: "A peer-to-peer collective payment system designed for shared expenses, featuring secure transaction verification and group ledgering.",
      tech: ["React Native", "PostgreSQL", "Node.js"],
      category: "Web",
      githubUrl: "https://github.com/Leon365-kk/Poolpay",
      liveUrl: "https://poolpay.app"
    },
    {
      title: "Animated Hero Landing Page",
      description: "A high-performance, v0-inspired landing page featuring sophisticated SVG animations and interactive hero components.",
      tech: ["React", "Three.js", "GSAP"],
      category: "Web",
      githubUrl: "https://github.com/Leon365-kk/v0-landing-page-with-animated-hero",
      liveUrl: "https://v0-animated-hero.vercel.app"
    },
    {
      title: "Laravel BnB Backend",
      description: "A scalable RESTful API built with Laravel for a Bed and Breakfast booking system, featuring secure authentication and booking logic.",
      tech: ["PHP", "Laravel", "MySQL", "Sanctum"],
      category: "Web",
      githubUrl: "https://github.com/Leon365-kk/laravel-bnb-backend"
    },
    {
      title: "Daraja Backend Service",
      description: "A dedicated microservice for handling M-Pesa STK Push and C2B transactions with automated callback validation and logging.",
      tech: ["Python", "Flask", "Redis", "M-Pesa API"],
      category: "Cybersecurity",
      githubUrl: "https://github.com/Leon365-kk/daraja-backend-"
    },
    {
      title: "AB-BNB (Full Stack)",
      description: "A comprehensive booking platform for holiday rentals, including host dashboards, guest reviews, and secure payment processing.",
      tech: ["Next.js", "Prisma", "Tailwind CSS", "NextAuth"],
      category: "Web",
      githubUrl: "https://github.com/Leon365-kk/AB-BNB",
      liveUrl: "https://ab-bnb.com"
    },
    {
      title: "Robo Africa Nexus Portal",
      description: "A centralized hub for the African robotics community, connecting students with international STEM competitions and resources.",
      tech: ["TypeScript", "Supabase", "Next.js"],
      category: "STEM",
      githubUrl: "https://github.com/Leon365-kk/robo-africa-nexus-portal",
      liveUrl: "https://roboafrica.org"
    },
    {
      title: "Deal Navigator",
      description: "A smart shopping assistant that tracks prices and discovers the best deals across multiple e-commerce platforms using web scraping.",
      tech: ["Python", "BeautifulSoup", "React", "Node.js"],
      category: "AI",
      githubUrl: "https://github.com/Leon365-kk/deal-navigator"
    }
  ],
  experiences: [
    {
      company: "STEMlens Network",
      role: "Program Associate",
      period: "Feb 2025 - Present",
      location: "Nairobi, Kenya",
      points: [
        "Conceptualized forward-thinking STEM initiatives for youth empowerment.",
        "Spearheaded national innovation events like 'Tech for Good Hackathon'.",
        "Provided technical guidance for international competitions (MRC Challenge Greece, RoboCup Korea).",
        "Led outreach missions in schools inspiring students through robotics and coding."
      ]
    },
    {
      company: "Social Health Authority",
      role: "Cybersecurity & IT Intern",
      period: "Aug 2024 - Dec 2024",
      location: "Nairobi, Kenya",
      points: [
        "Resolved authentication issues and ensured secure access to organizational systems.",
        "Monitored IT systems and networks to mitigate potential security risks.",
        "Implemented cybersecurity protocols and best practices across the organization."
      ]
    },
    {
      company: "Wote kwa Wote CBO",
      role: "IT Officer",
      period: "Apr 2023 - Sep 2025",
      location: "Nairobi, Kenya",
      points: [
        "Oversaw organization's IT infrastructure and network administration.",
        "Developed and updated the organization's website and digital platforms.",
        "Implemented data management systems to protect project information.",
        "Conducted training sessions on digital literacy and cybersecurity."
      ]
    },
    {
      company: "STEM Impact Center Kenya",
      role: "Program Associate",
      period: "Jul 2022 - May 2024",
      location: "Nairobi, Kenya",
      points: [
        "Collaborated on designing STEM education and outreach programs.",
        "Supported student participation in World Robotics Olympiad 2022 (Panama) & 2023 (USA).",
        "Analyzed program metrics to generate insights for improvement."
      ]
    }
  ],
  certifications: [
    {
      title: "AI Skills for Nonprofits",
      issuer: "CyberPeace Institute",
      date: "Nov 2025",
      description: "Leveraging AI tools for nonprofit operations and cybersecurity awareness."
    },
    {
      title: "Cyber Threat Management",
      issuer: "Cisco Networking Academy",
      date: "Dec 2023",
      description: "Focus on detection and response strategies for modern cyber threats."
    },
    {
      title: "Vulnerability Management",
      issuer: "Qualys",
      date: "Nov 2022",
      description: "Expertise in managing and remediating security vulnerabilities."
    },
    {
      title: "3D Design and Printing",
      issuer: "STEM Impact Center Kenya",
      date: "May 2022",
      description: "Advanced modeling for rapid prototyping and STEM education."
    }
  ]
};
