import React, { useState } from 'react';
import { personalInfo as initialPersonalInfo } from './config/portfolioConfig';
import { PersonalInfo } from './types';
import { CyberNavbar } from './components/CyberNavbar';
import { CyberHero } from './components/CyberHero';
import { CyberAboutMe } from './components/CyberAboutMe';
import { CyberProjects } from './components/CyberProjects';
import { CyberSkills } from './components/CyberSkills';
import { CyberCertifications } from './components/CyberCertifications';
import { CyberMilestones } from './components/CyberMilestones';
import { CyberContact } from './components/CyberContact';
import { CyberFooter } from './components/CyberFooter';
import { ProfileQuestionnaireModal } from './components/ProfileQuestionnaireModal';
import { ResumeModal } from './components/ResumeModal';
import { PortfolioPromptModal } from './components/PortfolioPromptModal';
import { CyberWhatsAppWidget } from './components/CyberWhatsAppWidget';

export default function App() {
  const [personalData, setPersonalData] = useState<PersonalInfo>(() => {
    const savedAvatar = typeof window !== 'undefined' ? localStorage.getItem('portfolio_avatar') : null;
    if (savedAvatar) {
      return { ...initialPersonalInfo, avatarUrl: savedAvatar };
    }
    return initialPersonalInfo;
  });
  const [questionnaireOpen, setQuestionnaireOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [promptModalOpen, setPromptModalOpen] = useState(false);

  const handleUpdateInfo = (updated: Partial<PersonalInfo>) => {
    setPersonalData(prev => ({
      ...prev,
      ...updated
    }));
    if (updated.avatarUrl) {
      try {
        localStorage.setItem('portfolio_avatar', updated.avatarUrl);
      } catch (e) {
        console.warn('Could not persist avatar to localStorage:', e);
      }
    }
  };

  const handleAvatarUpdate = (newAvatarUrl: string) => {
    handleUpdateInfo({ avatarUrl: newAvatarUrl });
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.querySelector(sectionId);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 selection:bg-emerald-500 selection:text-black">
      {/* Cyber Sticky Navigation */}
      <CyberNavbar
        onOpenQuestionnaire={() => setQuestionnaireOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={() => scrollToSection('#contact')}
        onOpenPromptModal={() => setPromptModalOpen(true)}
        onNavigate={scrollToSection}
      />

      {/* Main Sections */}
      <main>
        {/* 1. Top Section: Huge Neon Green PORTFOLIO Display + Center Hacker Sculpture */}
        <CyberHero
          onOpenContact={() => scrollToSection('#contact')}
          onOpenResume={() => setResumeOpen(true)}
          onOpenQuestionnaire={() => setQuestionnaireOpen(true)}
          onViewProjects={() => scrollToSection('#projects')}
          onOpenPromptModal={() => setPromptModalOpen(true)}
          personalInfo={personalData}
        />

        {/* 2. Featured Section: ABOUT ME with 3D Phone Mockups & Software Badges matching image */}
        <CyberAboutMe
          onOpenContact={() => scrollToSection('#contact')}
          onOpenResume={() => setResumeOpen(true)}
          personalInfo={personalData}
          onUpdateAvatar={handleAvatarUpdate}
        />

        {/* 3. Featured Live Projects (ZenJournal, NutriTrack, Fresh Farm, Alumni System) */}
        <CyberProjects
          onOpenContact={() => scrollToSection('#contact')}
        />

        {/* 4. Full Technical Skills & Pentesting Tool Matrix */}
        <CyberSkills />

        {/* 5. Industry Certifications (AWS Certified Cloud Practitioner, Internships) */}
        <CyberCertifications
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* 6. Academic Journey & Technical Milestones */}
        <CyberMilestones
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* 7. Contact Section */}
        <CyberContact />
      </main>

      {/* Footer */}
      <CyberFooter />

      {/* Floating Direct WhatsApp Widget */}
      <CyberWhatsAppWidget />

      {/* Interactive Profile Questionnaire Modal (Ask Questions & Live Customizer) */}
      <ProfileQuestionnaireModal
        isOpen={questionnaireOpen}
        onClose={() => setQuestionnaireOpen(false)}
        currentInfo={personalData}
        onUpdateInfo={handleUpdateInfo}
      />

      {/* Printable / Downloadable Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Portfolio Prompt & Personal Details Modal */}
      <PortfolioPromptModal
        isOpen={promptModalOpen}
        onClose={() => setPromptModalOpen(false)}
        onOpenCustomize={() => setQuestionnaireOpen(true)}
      />
    </div>
  );
}
