import { PersonalInfo, SkillCategory, PersonalProject, Certification, Experience, EducationItem, SoftwareBadge, ProfileQuestion, AboutPillar } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'GOPINATH V',
  role: 'CYBER SECURITY & FULL-STACK DEVELOPER',
  secondaryRole: 'III Year / V Semester — B.E. CSE (Cyber Security) @ K.S.R College of Engineering',
  academicStage: 'III Year / V Semester',
  field: 'Computer Science / Cyber Security / Software & Application Development',
  interests: [
    'Technology',
    'Cybersecurity',
    'Software Development',
    'Web Applications',
    'Mobile Applications',
    'AI-Assisted Development',
    'UI/UX Design',
    'Building Useful Digital Products',
    'Modern Interactive Applications'
  ],
  tagline: 'Defending Networks. Engineering Resilient Software.',
  heroHeadline: 'Building Secure, High-Performance Systems.',
  heroSubtext: "III Year / V Semester B.E. Computer Science Engineering (Cyber Security) student at K.S.R College of Engineering. Focused on vulnerability assessment, network packet forensics, AI-assisted development, and modern interactive applications.",
  bio: "Hello, I'm Gopinath V — a cybersecurity enthusiast and full-stack software developer currently in my III Year / V Semester of B.E. Computer Science and Engineering (Cyber Security) at K.S.R College of Engineering (Batch 2024–2028). I specialize in software & application development (React, TypeScript, Node.js, Java, MySQL, Firebase, AI tooling) and defensive cybersecurity (Wireshark packet forensics, Burp Suite, Nmap reconnaissance, AWS Cloud security).",
  aboutStory: {
    origin: "My journey in technology began with a deep curiosity about how connected software systems communicate under the surface. Rather than merely consuming applications, I was drawn to understanding network packets, server architectures, mobile & web interfaces, and the logic gates that power the modern digital world.",
    cybersecurityPassion: "Specializing in Cyber Security at K.S.R College of Engineering has fueled my passion for offense and defense. In my III Year / V Semester, I actively audit live network flows with Wireshark, scan infrastructure with Nmap, test web parameters with Burp Suite, and leverage my AWS Certified Cloud Practitioner credential for secure cloud architecture.",
    developmentPhilosophy: "I approach software engineering with a 'Security-by-Design' mindset, paired with high-craft UI/UX and modern AI-assisted development workflows. I believe security and intuitive user experiences must be ingrained into every data model, API endpoint, and reactive frontend component from day one.",
    futureGoals: "My aspiration is to engineer impactful, secure digital products — creating resilient cloud services, cutting-edge interactive web/mobile applications, and contributing to high-stakes defense and vulnerability research."
  },
  location: 'Namakkal, Tamil Nadu, India',
  email: 'gopinathvarudharaj@gmail.com',
  phone: '+91 63825 99927',
  whatsappNumber: '916382599927',
  whatsappDisplay: '+91 63825 99927',
  linkedin: 'https://linkedin.com/in/gopinathvarudharaj',
  github: 'https://github.com/gopinathvarudharaj',
  instagram: 'https://instagram.com/gopinathvarudharaj',
  resumeUrl: '#resume',
  avatarUrl: '/gopinath_avatar.jpg',
  batchYears: '2024–2028'
};

export const aboutPillars: AboutPillar[] = [
  {
    title: 'Network Forensics & Packet Auditing',
    code: 'SEC-01',
    description: 'Analyzing TCP/IP protocol behavior, DNS handshakes, and packet flows with Wireshark to identify anomalies and eavesdropping vectors.',
    iconName: 'ShieldAlert',
    highlights: ['Wireshark packet capture analysis', 'Protocol inspection (HTTP/S, DNS, TCP, ARP)', 'Port reconnaissance with Nmap & Netdiscover']
  },
  {
    title: 'Web Application Pentesting (OWASP)',
    code: 'SEC-02',
    description: 'Intercepting and manipulating web traffic with Burp Suite to audit for authentication flaws, CSRF, IDOR, and injection vulnerabilities.',
    iconName: 'Lock',
    highlights: ['Burp Suite Proxy & Repeater workflows', 'OWASP Top 10 vulnerability remediation', 'Secure session & JWT management']
  },
  {
    title: 'Cloud Infrastructure & IAM Security',
    code: 'SEC-03',
    description: 'Validated foundational knowledge of AWS Cloud architecture, least-privilege IAM policies, VPC segmentation, and compliance models.',
    iconName: 'Cloud',
    highlights: ['AWS Certified Cloud Practitioner validated', 'IAM role scoping & zero-trust principles', 'S3 bucket security & encryption standards']
  },
  {
    title: 'Full-Stack Architecture & Engineering',
    code: 'DEV-04',
    description: 'Building reactive, component-driven web applications with React, TypeScript, Node.js, and Java that are fast, accessible, and resilient.',
    iconName: 'Code2',
    highlights: ['Modern React 18+ & TypeScript component systems', 'RESTful API design with Express & Node.js', 'Relational database modeling with MySQL & Firebase']
  }
];

export const education: EducationItem = {
  degree: 'B.E. Computer Science and Engineering',
  specialization: 'Cyber Security',
  institution: 'K.S.R College of Engineering',
  duration: '2024 – 2028',
  location: 'Tiruchengode, Tamil Nadu, India',
  year: 'III Year / V Semester (Batch 2024–2028)',
  status: 'Actively Pursuing B.E. CSE (Cyber Security) — III Year / V Semester',
  coursework: [
    'Cybersecurity & Network Defense',
    'Web Application Pentesting & Forensics',
    'Database Management Systems (MySQL)',
    'Object-Oriented Programming (Java)',
    'Full-Stack Web & Mobile Architecture',
    'Data Structures & Algorithm Design'
  ]
};

// Distinctive Software / Tool Badges styled in the exact aesthetic of the uploaded poster screenshot (Ps, Ai, Id style)
export const softwareBadges: SoftwareBadge[] = [
  { id: 're', code: 'Re', name: 'React.js', category: 'Frontend', bgGradient: 'from-cyan-950 to-blue-900 border-cyan-500/50', textColor: 'text-cyan-400', level: 'Proficient' },
  { id: 'ts', code: 'Ts', name: 'TypeScript', category: 'Frontend', bgGradient: 'from-blue-950 to-indigo-900 border-blue-500/50', textColor: 'text-blue-400', level: 'Intermediate' },
  { id: 'nd', code: 'Nd', name: 'Node.js', category: 'Backend', bgGradient: 'from-emerald-950 to-green-900 border-emerald-500/50', textColor: 'text-emerald-400', level: 'Proficient' },
  { id: 'jv', code: 'Jv', name: 'Java OOP', category: 'Languages', bgGradient: 'from-amber-950 to-orange-900 border-orange-500/50', textColor: 'text-orange-400', level: 'Proficient' },
  { id: 'sq', code: 'Sq', name: 'MySQL DB', category: 'Database', bgGradient: 'from-sky-950 to-blue-900 border-sky-500/50', textColor: 'text-sky-400', level: 'Intermediate' },
  { id: 'ws', code: 'Ws', name: 'Wireshark', category: 'CyberSec', bgGradient: 'from-blue-950 to-cyan-900 border-cyan-400/50', textColor: 'text-cyan-300', level: 'Packet Analysis' },
  { id: 'bp', code: 'Bp', name: 'Burp Suite', category: 'CyberSec', bgGradient: 'from-orange-950 to-amber-900 border-amber-500/50', textColor: 'text-amber-400', level: 'Pentesting' },
  { id: 'nm', code: 'Nm', name: 'Nmap Scan', category: 'CyberSec', bgGradient: 'from-red-950 to-rose-900 border-rose-500/50', textColor: 'text-rose-400', level: 'Network Audit' },
  { id: 'fb', code: 'Fb', name: 'Firebase', category: 'Cloud', bgGradient: 'from-yellow-950 to-amber-900 border-yellow-500/50', textColor: 'text-yellow-400', level: 'Auth & DB' },
  { id: 'gt', code: 'Gt', name: 'Git & GitHub', category: 'Tools', bgGradient: 'from-slate-900 to-zinc-800 border-emerald-500/30', textColor: 'text-emerald-400', level: 'Version Control' }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    category: 'frontend',
    skills: [
      { name: 'React.js', level: 'Proficient', iconName: 'Code2', badgeCode: 'Re', color: '#38bdf8', description: 'Component architecture, Hooks, State Management' },
      { name: 'TypeScript', level: 'Intermediate', iconName: 'FileCode', badgeCode: 'Ts', color: '#60a5fa', description: 'Strong typing, Interfaces, Modular Code' },
      { name: 'Tailwind CSS', level: 'Advanced', iconName: 'Palette', badgeCode: 'Tw', color: '#2dd4bf', description: 'Cyber grid styling, Glassmorphism, Responsive design' },
      { name: 'Framer Motion', level: 'Intermediate', iconName: 'Sparkles', badgeCode: 'Fm', color: '#f472b6', description: 'Micro-interactions, 3D cards, Entrance transitions' }
    ]
  },
  {
    title: 'Backend & Databases',
    category: 'backend',
    skills: [
      { name: 'Node.js', level: 'Proficient', iconName: 'Server', badgeCode: 'Nd', color: '#22c55e', description: 'REST APIs, Middleware, Express.js architecture' },
      { name: 'Firebase', level: 'Proficient', iconName: 'Flame', badgeCode: 'Fb', color: '#f59e0b', description: 'Firestore, Authentication, Cloud deployment' },
      { name: 'MySQL', level: 'Intermediate', iconName: 'Database', badgeCode: 'Sq', color: '#0ea5e9', description: 'Relational data models, SQL queries, Indexing' }
    ]
  },
  {
    title: 'Programming Languages',
    category: 'languages',
    skills: [
      { name: 'Java', level: 'Proficient', iconName: 'Coffee', badgeCode: 'Jv', color: '#f97316', description: 'Core Java, OOP principles, Algorithms' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', iconName: 'Terminal', badgeCode: 'Js', color: '#eab308', description: 'Async/await, DOM APIs, Modern functional patterns' }
    ]
  },
  {
    title: 'Cybersecurity Tools & Pentesting',
    category: 'cybersecurity',
    skills: [
      { name: 'Wireshark', level: 'Intermediate', iconName: 'ShieldAlert', badgeCode: 'Ws', color: '#38bdf8', description: 'Live packet capture, protocol analysis, network forensics' },
      { name: 'Burp Suite', level: 'Intermediate', iconName: 'Lock', badgeCode: 'Bp', color: '#fb923c', description: 'Web application vulnerability testing & request intercept' },
      { name: 'Nmap', level: 'Proficient', iconName: 'Search', badgeCode: 'Nm', color: '#f43f5e', description: 'Network mapping, port scanning, service discovery' },
      { name: 'Netdiscover & Shodan', level: 'Intermediate', iconName: 'Globe', badgeCode: 'Sd', color: '#a855f7', description: 'OSINT reconnaissance & infrastructure asset audit' }
    ]
  },
  {
    title: 'Dev Tools & Practices',
    category: 'tools',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', iconName: 'GitBranch', badgeCode: 'Gt', color: '#22c55e', description: 'Version control, collaborative workflows, repositories' },
      { name: 'REST APIs', level: 'Proficient', iconName: 'Cpu', badgeCode: 'Ap', color: '#818cf8', description: 'API architecture, Postman testing, JSON pipelines' },
      { name: 'Mobile-First UI', level: 'Advanced', iconName: 'Smartphone', badgeCode: 'Mf', color: '#4ade80', description: 'Touch responsiveness, sub-second speed, 100/100 Lighthouse' }
    ]
  }
];

export const personalProjects: PersonalProject[] = [
  {
    id: 'project-expense',
    title: 'Smart Expense Tracker',
    subtitle: 'Personal Finance & Category Budget Analytics',
    category: 'Finance & Productivity',
    shortDesc: 'A personal expense tracking and budget analytics web application for logging daily income and expenses, visual category breakdowns, monthly spending thresholds, and financial insights.',
    fullDesc: 'Engineered to provide streamlined personal financial management. Features real-time income vs. expense balance calculations, monthly budget limits, interactive category visualizations, receipt metadata tracking, and client-side encryption for private financial data.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
    technologies: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS', 'IndexedDB', 'Vercel'],
    liveUrl: 'https://friendly-twilight-85d51e.netlify.app/',
    keyFeatures: [
      'Interactive income & expense breakdown charts with category analytics',
      'Monthly spending limit alerts and budget progress tracking',
      'Transaction search, date range filtering, and CSV report export',
      'Local-first privacy storage with zero external data leakage',
      'Mobile-optimized responsive design with fast one-tap entry'
    ],
    featured: true,
    impactBadge: 'FINANCE & ANALYTICS'
  },
  {
    id: 'project-together',
    title: 'Together — Two Friends, One Space',
    subtitle: 'Private Shared Digital Sanctuary for Two Friends',
    category: 'Social & Collaborative',
    shortDesc: 'A cozy, real-time social application tailored specifically for two close friends to share private thoughts, milestone countdowns, shared memories, and interactive mood status.',
    fullDesc: 'Designed to move away from noisy social feeds into an intimate, secure digital space for two. Includes mutual mood check-ins, collaborative memory timelines with photo cards, private shared notes, ambient ping notifications, and invite-only encryption.',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80',
    technologies: ['React', 'Firebase Firestore', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
    liveUrl: 'https://friendu.netlify.app/',
    keyFeatures: [
      'Real-time Firestore synchronization between two authenticated accounts',
      'Interactive shared memory cards with milestone countdown timers',
      'Mutual mood status sharing and reciprocal ambient tap pings',
      'Collaborative shared bucket list and to-do scratchpad',
      'Passcode-protected private room with zero public exposure'
    ],
    featured: true,
    impactBadge: 'SOCIAL / COLLABORATIVE'
  },
  {
    id: 'project-zenjournal',
    title: 'ZenJournal(Notepad)',
    subtitle: 'Secure & Private Mindfulness Journaling App',
    category: 'Web App',
    shortDesc: 'A secure, private digital journaling app focused on user data protection, local storage encryption, and a calming, distraction-free writing experience.',
    fullDesc: 'ZenJournal is engineered for individuals seeking a tranquil digital space for daily reflections and mental health tracking. It emphasizes strict privacy, intuitive rich text input, daily mood tracking, and zero clutter so users can express themselves without distraction.',
    imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1000&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Netlify Deploy'],
    liveUrl: 'https://zenjournalapp.netlify.app/',
    keyFeatures: [
      'Encrypted local privacy storage for complete data ownership',
      'Minimalist dark/light mode UI with custom typography',
      'Daily mood logging and habit tracking calendars',
      'Distraction-free focus writing mode',
      'Instant search and tag-based entry filtering'
    ],
    featured: true,
    impactBadge: 'NETLIFY DEPLOYED'
  },
  {
    id: 'project-nutritrack',
    title: 'NutriTrack',
    subtitle: 'Personal Nutrition & Health Metrics Dashboard',
    category: 'Web App',
    shortDesc: 'A comprehensive nutrition and health metrics tracker for logging meals, monitoring wellness data, calculating calories, and visualizing health progress over time.',
    fullDesc: 'NutriTrack empowers users to manage their daily dietary habits, macro ratios, and fitness metrics through responsive charts and intelligent calorie calculators. Designed with a clean data visualization dashboard that breaks down progress clearly.',
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=80',
    technologies: ['React', 'TypeScript', 'Recharts / Visualizer', 'Tailwind CSS', 'Vercel Deploy'],
    liveUrl: 'https://nutri-track-5toytglnm-gopinathvarudharaj-5095s-projects.vercel.app/metrics',
    keyFeatures: [
      'Interactive health metrics and macro calorie chart visualizers',
      'Custom meal and daily water intake logging',
      'Progress tracking over weekly and monthly intervals',
      'Responsive dashboard layout tailored for mobile & desktop',
      'Sub-second fast loading speed deployed on Vercel'
    ],
    featured: true,
    impactBadge: 'VERCEL DEPLOYED'
  },
  {
    id: 'project-freshfarm',
    title: 'Fresh Farm Web Portal',
    subtitle: 'Agricultural & Farm Inventory Web Platform',
    category: 'Web App',
    shortDesc: 'A responsive agricultural product showcase and real-time inventory web application featuring high-speed product catalogues, interactive geolocation, and direct messaging workflows.',
    fullDesc: 'Fresh Farm is an end-to-end full-stack web application designed for agricultural inventory management and seamless customer discovery. It features reactive item filtering, real-time cart state management, and direct communication integrations with sub-second page loads.',
    imageUrl: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1000&q=80',
    technologies: ['React', 'Tailwind CSS', 'Vercel', 'Netlify', 'REST APIs'],
    liveUrl: 'https://freshfarmshop.netlify.app/',
    keyFeatures: [
      'Dynamic product catalogue with instant search & category filtering',
      'Direct order dispatch and customer communication workflows',
      'Interactive geolocation mapping and facility directions',
      'Mobile-optimized shopping cart interface with 100/100 Lighthouse score',
      'Dual live mirror deployments on Vercel and Netlify'
    ],
    featured: true,
    impactBadge: 'VERCEL & NETLIFY'
  },
  {
    id: 'project-alumni',
    title: 'Alumni Management System',
    subtitle: 'Institutional Alumni Network & Portal',
    category: 'EdTech',
    shortDesc: 'A unified platform for colleges to manage alumni records, keep graduates connected, foster mentorship, and streamline communication between alumni and the institution.',
    fullDesc: 'Designed to solve alumni engagement challenges for educational institutions. Provides a structured directory for graduates to update career achievements, mentor current students, organize reunions, and support campus initiatives.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    technologies: ['React', 'Node.js', 'Express', 'MySQL / DB', 'Netlify'],
    liveUrl: 'https://alumni-lmanagement-system.netlify.app/',
    keyFeatures: [
      'Searchable alumni directory with graduation year and industry filters',
      'Event management and college news bulletin board',
      'Student-to-alumni mentorship connection request forms',
      'Admin control panel for verifying graduate registration',
      'Database integration with structured student records'
    ],
    featured: true,
    impactBadge: 'DATABASE BACKEND'
  }
];

export const certifications: Certification[] = [
  {
    id: 'cert-aws',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    type: 'Cloud Certification',
    issueDate: 'April 17, 2026',
    expiryDate: 'April 17, 2029',
    validationNumber: '1213f1754e464440bd88172aa4e5fa01',
    verifyUrl: 'https://aws.amazon.com/verification',
    badgeIcon: 'Cloud',
    highlights: [
      'Validated knowledge of AWS Cloud infrastructure, security models, IAM and compliance',
      'Foundational expertise across EC2, S3, RDS, CloudWatch, and Lambda',
      'Validated credential verifiable directly through AWS official portal'
    ]
  },
  {
    id: 'cert-imagecon',
    title: 'Web Development Internship',
    issuer: 'Imagecon India Pvt. Ltd.',
    type: 'Web Development Internship',
    issueDate: 'July 22, 2025',
    duration: 'July 8 – July 22, 2025',
    internshipId: 'IMIN25082207',
    projectFocus: 'TeamTask Organizer (Web Development)',
    badgeIcon: 'Code2',
    highlights: [
      'Completed practical web development training and hands-on project building',
      'Developed TeamTask Organizer — a collaborative task management application',
      'Mastered frontend state management, responsive layout engineering, and REST APIs'
    ]
  },
  {
    id: 'cert-pargavan',
    title: 'Cybersecurity Internship (Pentesting)',
    issuer: 'Pargavan Cyyber Solutions',
    type: 'Cybersecurity Internship',
    issueDate: 'July 10, 2026',
    duration: 'June 23 – July 10, 2026 (15 Days)',
    badgeIcon: 'ShieldCheck',
    highlights: [
      'Practical training in Cybersecurity Fundamentals & Network Penetration Testing',
      'Executed vulnerability identification using Nmap, Wireshark, and Burp Suite',
      'Practiced threat analysis, mitigation protocols, and ethical hacking methodologies',
      'Studied OWASP Top 10 vulnerabilities and secure defense architecture'
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: 'exp-pargavan',
    title: 'Cybersecurity Intern (Pentesting)',
    company: 'Pargavan Cyyber Solutions',
    role: 'Cybersecurity Intern',
    location: 'Remote / India',
    duration: 'June 23 – July 10, 2026',
    type: 'Internship',
    description: 'Intensive 15-day hands-on penetration testing and network security internship focusing on practical vulnerability assessment and threat mitigation.',
    keyAchievements: [
      'Performed network reconnaissance and port auditing using Nmap and Netdiscover',
      'Analyzed live packet captures with Wireshark to detect protocol anomalies and insecure communications',
      'Audited web application parameters using Burp Suite for common OWASP vulnerabilities (SQLi, XSS, Broken Auth)',
      'Formulated remediation documentation and mitigation strategies for identified security flaws'
    ],
    technologies: ['Wireshark', 'Burp Suite', 'Nmap', 'Netdiscover', 'Threat Analysis', 'Network Security']
  },
  {
    id: 'exp-imagecon',
    title: 'Web Development Intern',
    company: 'Imagecon India Pvt. Ltd.',
    role: 'Frontend Developer Intern',
    location: 'Tamil Nadu, India',
    duration: 'July 8 – July 22, 2025',
    type: 'Internship',
    description: 'Web development internship focused on building real-world React web applications and mastering responsive user interface architecture.',
    keyAchievements: [
      'Engineered and delivered the TeamTask Organizer web application (Credential ID: IMIN25082207)',
      'Created reusable UI components in React and styled responsive layouts with Tailwind CSS',
      'Mastered frontend state synchronization, component lifecycles, and Git version control workflows'
    ],
    technologies: ['React.js', 'JavaScript', 'CSS3 / Tailwind', 'Git', 'REST APIs']
  },
  {
    id: 'exp-ksr',
    title: 'Cyber Security Undergraduate & Security Researcher',
    company: 'K.S.R College of Engineering',
    role: 'B.E. CSE (Cyber Security) Student',
    location: 'Tiruchengode, Tamil Nadu',
    duration: '2024 – Present (Batch 2024–2028)',
    type: 'Project Work',
    isCurrent: true,
    description: 'Pursuing foundational and advanced studies in cyber defense, cryptographic theory, network protocol security, and modern full-stack software architecture.',
    keyAchievements: [
      'Achieved AWS Certified Cloud Practitioner credential (Validation ID: 1213f1754e464440bd88172aa4e5fa01)',
      'Constructed isolated laboratory environments for testing packet injection and vulnerability remediation',
      'Engineered multiple production-grade web applications with a focus on local data encryption and security-by-design (ZenJournal, NutriTrack, Alumni Portal)',
      'Active participant in technical symposiums, hands-on CTF exercises, and cybersecurity peer learning'
    ],
    technologies: ['Java OOP', 'MySQL', 'Wireshark', 'Nmap', 'AWS Cloud', 'React', 'Linux']
  }
];

// Profile Questionnaire for Gopinath V to fill in his custom info directly
export const profileQuestions: ProfileQuestion[] = [
  {
    id: 'q-photo',
    category: 'identity',
    question: 'What is your photo or avatar preference?',
    description: 'Provide an image URL for your profile photo or center graphic.',
    placeholder: 'https://... your photo URL',
    currentValue: 'Cyber Dev Statue / Digital Avatar',
    fieldKey: 'avatarUrl'
  },
  {
    id: 'q-headline',
    category: 'identity',
    question: 'What is your dream role or primary career headline?',
    description: 'e.g., Full-Stack Security Engineer, Junior Pentester, Backend Developer',
    placeholder: 'Full-Stack Developer & Cybersecurity Enthusiast',
    currentValue: 'Full-Stack Developer & Cybersecurity Enthusiast',
    fieldKey: 'role'
  },
  {
    id: 'q-tagline',
    category: 'identity',
    question: 'What is your personal tagline / motto?',
    description: 'Short statement summarizing your mission.',
    placeholder: 'Building Secure, Scalable Digital Solutions.',
    currentValue: 'Building Secure, Scalable Digital Solutions.',
    fieldKey: 'tagline'
  },
  {
    id: 'q-phone',
    category: 'socials',
    question: 'What phone / WhatsApp number should recruiters & collaborators contact you on?',
    description: 'Include country code (+91 for India).',
    placeholder: '+91 93452 10892',
    currentValue: '+91 93452 10892',
    fieldKey: 'phone'
  },
  {
    id: 'q-linkedin',
    category: 'socials',
    question: 'What is your LinkedIn profile URL?',
    description: 'Direct link to your LinkedIn profile.',
    placeholder: 'https://linkedin.com/in/gopinathvarudharaj',
    currentValue: 'https://linkedin.com/in/gopinathvarudharaj',
    fieldKey: 'linkedin'
  },
  {
    id: 'q-github',
    category: 'socials',
    question: 'What is your GitHub profile or organization URL?',
    description: 'Direct link to your GitHub repositories.',
    placeholder: 'https://github.com/gopinathvarudharaj',
    currentValue: 'https://github.com/gopinathvarudharaj',
    fieldKey: 'github'
  },
  {
    id: 'q-favorite-project',
    category: 'projects',
    question: 'Which of your projects is your proudest accomplishment?',
    description: 'e.g. ZenJournal (security-first), NutriTrack (analytics), Fresh Farm (client revenue), Alumni System',
    placeholder: 'ZenJournal / Fresh Farm',
    currentValue: 'ZenJournal & Fresh Farm',
    fieldKey: 'favoriteProject'
  },
  {
    id: 'q-skills-focus',
    category: 'cybersec',
    question: 'What specific security or full-stack domains are you exploring next?',
    description: 'e.g., Cloud Security, Web Pentesting (OWASP), Reverse Engineering, Docker, Kubernetes',
    placeholder: 'Web App Pentesting & Cloud Security',
    currentValue: 'Web App Penetration Testing & Cloud Security Architecture',
    fieldKey: 'securityFocus'
  }
];
