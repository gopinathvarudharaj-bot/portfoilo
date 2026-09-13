export interface SkillCategory {
  title: string;
  category: 'frontend' | 'backend' | 'languages' | 'cybersecurity' | 'tools';
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Intermediate", "Proficient"
    iconName: string;
    description?: string;
    badgeCode?: string; // e.g. 'Re', 'Ts', 'Nd', 'Py', 'Jv', 'Ws', 'Bp', 'Nm'
    color?: string;
  }[];
}

export interface SoftwareBadge {
  id: string;
  code: string;
  name: string;
  category: string;
  bgGradient: string;
  textColor: string;
  level: string;
}

export interface PersonalProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'Web App' | 'E-Commerce' | 'Security & Utilities' | 'EdTech' | 'Client Work' | 'Social & Collaborative' | 'Finance & Productivity';
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  technologies: string[];
  liveUrl: string;
  alternativeLiveUrl?: string;
  githubUrl?: string;
  keyFeatures: string[];
  featured: boolean;
  impactBadge?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  type: 'Cloud Certification' | 'Web Development Internship' | 'Cybersecurity Internship';
  issueDate: string;
  expiryDate?: string;
  validationNumber?: string;
  internshipId?: string;
  verifyUrl?: string;
  badgeIcon: string;
  highlights: string[];
  duration?: string;
  projectFocus?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  role: string;
  location: string;
  duration: string;
  type: 'Internship' | 'Venture / Freelance' | 'Project Work';
  description: string;
  keyAchievements: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  degree: string;
  specialization: string;
  institution: string;
  duration: string;
  location: string;
  year: string;
  status: string;
  coursework: string[];
}

export interface AboutPillar {
  title: string;
  code: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface PersonalInfo {
  name: string;
  role: string;
  secondaryRole: string;
  academicStage: string;
  field: string;
  interests: string[];
  tagline: string;
  heroHeadline: string;
  heroSubtext: string;
  bio: string;
  aboutStory: {
    origin: string;
    cybersecurityPassion: string;
    developmentPhilosophy: string;
    futureGoals: string;
  };
  location: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  linkedin: string;
  github: string;
  instagram: string;
  resumeUrl: string;
  avatarUrl?: string;
  batchYears: string;
  bluecrestVenture?: {
    name: string;
    tagline: string;
    description: string;
    locationsServed: string[];
    projectsCompletedCount: string;
  };
}

export interface ProfileQuestion {
  id: string;
  category: 'identity' | 'cybersec' | 'projects' | 'career' | 'socials';
  question: string;
  description: string;
  placeholder: string;
  currentValue: string;
  fieldKey: keyof PersonalInfo | string;
}

// Legacy interfaces for backwards-compatibility with template components
export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  targetIndustry: string;
  keyFeatures: string[];
  popularAddons?: string[];
  samplePriceRange: string;
}

export interface CaseStudyData {
  challenge: string;
  solution: string;
  results: { label: string; value: string; desc?: string }[];
  clientQuote?: string;
  clientName?: string;
  beforeMetrics: string[];
  afterMetrics: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  businessName: string;
  category: 'Restaurants' | 'Gyms' | 'Salons' | 'Shops' | 'Education' | 'Personal Portfolio' | 'E-Commerce';
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  caseStudy?: CaseStudyData;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  businessName: string;
  businessCategory: string;
  quote: string;
  rating: number;
  avatarUrl: string;
  verifiedLocal: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceNote: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  notIncluded?: string[];
  recommendedFor: string;
  turnaroundTime: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Pricing' | 'Process' | 'Technical';
}

export interface ContactInfo {
  companyName: string;
  tagline: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  phone: string;
  email: string;
  location: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  workingHours: string;
}

export interface EstimatorOption {
  id: string;
  label: string;
  description: string;
  estimatedDays: number;
  basePricePoints: number;
  icon: string;
}

export interface ContactFormState {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  businessType: string;
  websiteRequirement: string;
  budgetRange: string;
  message: string;
}

