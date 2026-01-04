
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'Cybersecurity' | 'AI' | 'STEM' | 'Web';
}

export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  github: string;
  phone: string;
  location: string;
  about: string;
  profileImage?: string;
  experiences: Experience[];
  certifications: Certification[];
  projects: Project[];
  skills: string[];
  education: {
    degree: string;
    school: string;
    period: string;
  };
}
