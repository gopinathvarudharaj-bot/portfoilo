import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { profileQuestions } from '../config/portfolioConfig';
import { PersonalInfo } from '../types';
import {
  X,
  Sparkles,
  HelpCircle,
  Check,
  Copy,
  Save,
  Send,
  User,
  Shield,
  Briefcase,
  Share2,
  RefreshCw,
  ExternalLink,
  Camera,
  Upload
} from 'lucide-react';

interface ProfileQuestionnaireModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentInfo: PersonalInfo;
  onUpdateInfo: (updated: Partial<PersonalInfo>) => void;
}

export const ProfileQuestionnaireModal: React.FC<ProfileQuestionnaireModalProps> = ({
  isOpen,
  onClose,
  currentInfo,
  onUpdateInfo
}) => {
  const [activeCategory, setActiveCategory] = useState<'identity' | 'cybersec' | 'projects' | 'socials'>('identity');
  const [formData, setFormData] = useState({
    name: currentInfo.name,
    role: currentInfo.role,
    tagline: currentInfo.tagline,
    bio: currentInfo.bio,
    phone: currentInfo.phone,
    email: currentInfo.email,
    linkedin: currentInfo.linkedin,
    github: currentInfo.github,
    avatarUrl: currentInfo.avatarUrl || '',
    targetCertification: 'CompTIA Security+ & CEH (Targeting 2026)',
    favoriteProject: 'ZenJournal & Fresh Farm E-Commerce',
  });

  const [copied, setCopied] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateInfo({
      name: formData.name,
      role: formData.role,
      tagline: formData.tagline,
      bio: formData.bio,
      phone: formData.phone,
      email: formData.email,
      linkedin: formData.linkedin,
      github: formData.github,
      avatarUrl: formData.avatarUrl
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const generateAnswersText = () => {
    return `=== GOPINATH V PROFILE CUSTOMIZATION ANSWERS ===
Full Name: ${formData.name}
Role / Headline: ${formData.role}
Tagline: ${formData.tagline}
Bio: ${formData.bio}
Phone / WhatsApp: ${formData.phone}
Email: ${formData.email}
LinkedIn: ${formData.linkedin}
GitHub: ${formData.github}
Proudest Project: ${formData.favoriteProject}
Next Security Goal: ${formData.targetCertification}
Photo URL: ${formData.avatarUrl || 'Default Cyber Avatar'}
Batch: 2024–2028 (K.S.R College of Engineering - B.E. CSE Cyber Security)
==============================================`;
  };

  const handleCopyAnswers = () => {
    navigator.clipboard.writeText(generateAnswersText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl 2xl:max-w-4xl max-h-[92vh] flex flex-col bg-slate-950 border border-emerald-500/40 rounded-3xl shadow-2xl shadow-emerald-500/10 overflow-hidden z-10 my-4 sm:my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 sm:p-6 border-b border-emerald-500/20 bg-emerald-950/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/60 flex items-center justify-center text-emerald-400">
                <Sparkles className="w-5 h-5 animate-spin" />
              </div>
              <div>
                <h3 className="font-cyber text-base sm:text-lg md:text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  PORTFOLIO QUESTIONNAIRE & PROFILE BUILDER
                </h3>
                <p className="text-xs text-slate-400">
                  Answer these questions about yourself to tailor your cyber & full-stack portfolio!
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex border-b border-slate-800 bg-black/40 px-4 sm:px-6 overflow-x-auto gap-2 py-2">
            <button
              onClick={() => setActiveCategory('identity')}
              className={`px-3 py-1.5 rounded-lg text-xs font-cyber transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeCategory === 'identity'
                  ? 'bg-emerald-500 text-black font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              1. Identity & Bio
            </button>
            <button
              onClick={() => setActiveCategory('cybersec')}
              className={`px-3 py-1.5 rounded-lg text-xs font-cyber transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeCategory === 'cybersec'
                  ? 'bg-emerald-500 text-black font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              2. Security & Tech Stack
            </button>
            <button
              onClick={() => setActiveCategory('projects')}
              className={`px-3 py-1.5 rounded-lg text-xs font-cyber transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeCategory === 'projects'
                  ? 'bg-emerald-500 text-black font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              3. Featured Projects
            </button>
            <button
              onClick={() => setActiveCategory('socials')}
              className={`px-3 py-1.5 rounded-lg text-xs font-cyber transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeCategory === 'socials'
                  ? 'bg-emerald-500 text-black font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Share2 className="w-3.5 h-3.5" />
              4. Contact & Socials
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSave} className="p-5 sm:p-6 space-y-5 max-h-[60vh] overflow-y-auto">
            {activeCategory === 'identity' && (
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-300">
                  💡 <strong>Question:</strong> How do you want recruiters, clients, and visitors to perceive your professional brand?
                </div>

                <div>
                  <label className="block text-xs font-cyber text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Full Name / Display Moniker
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-cyber text-sm focus:border-emerald-500 focus:outline-none"
                    placeholder="GOPINATH V"
                  />
                </div>

                <div>
                  <label className="block text-xs font-cyber text-slate-300 uppercase tracking-wider mb-1.5">
                    Headline Role
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
                    placeholder="FULL-STACK DEVELOPER & CYBER SECURITY ENTHUSIAST"
                  />
                </div>

                <div>
                  <label className="block text-xs font-cyber text-slate-300 uppercase tracking-wider mb-1.5">
                    Personal Tagline / Motto
                  </label>
                  <input
                    type="text"
                    value={formData.tagline}
                    onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
                    placeholder="Building Secure, Scalable Digital Solutions."
                  />
                </div>

                <div>
                  <label className="block text-xs font-cyber text-slate-300 uppercase tracking-wider mb-1.5">
                    About Me Bio
                  </label>
                  <textarea
                    rows={4}
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs leading-relaxed focus:border-emerald-500 focus:outline-none"
                    placeholder="Briefly describe your degree, internships, passion, and skills..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-cyber text-slate-300 uppercase tracking-wider mb-1.5">
                    Profile Photo / Portfolio Image
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <label className="flex-1 cursor-pointer flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/50 hover:border-emerald-400 text-xs font-cyber text-emerald-300 hover:text-emerald-200 transition-colors shadow-neon-green-sm">
                        <Upload className="w-3.5 h-3.5" />
                        <span>UPLOAD PHOTO FILE (PNG / JPG)</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onload = (ev) => {
                                const res = ev.target?.result as string;
                                if (res) {
                                  setFormData({ ...formData, avatarUrl: res });
                                }
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                      </label>
                      {formData.avatarUrl && (
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, avatarUrl: '' })}
                          className="px-3 py-2.5 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-400 hover:text-red-300"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                    <input
                      type="text"
                      value={formData.avatarUrl}
                      onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none"
                      placeholder="Or enter image URL (e.g. /image.png or https://...)"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeCategory === 'cybersec' && (
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-300">
                  💡 <strong>Question:</strong> What are your primary cybersecurity and developer tools, and what certifications are you pursuing next?
                </div>

                <div>
                  <label className="block text-xs font-cyber text-slate-300 uppercase tracking-wider mb-1.5">
                    Current Verified Certifications
                  </label>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-xs text-slate-200 space-y-1 font-cyber">
                    <p className="text-emerald-400 font-bold">✓ AWS Certified Cloud Practitioner (Active to 2029)</p>
                    <p>✓ Imagecon India Web Dev Internship (ID: IMIN25082207)</p>
                    <p>✓ Pargavan Cyyber Solutions Pentesting Internship</p>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-cyber text-slate-300 uppercase tracking-wider mb-1.5">
                    Next Target Security Certification / Specialization
                  </label>
                  <input
                    type="text"
                    value={formData.targetCertification}
                    onChange={(e) => setFormData({ ...formData, targetCertification: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
                    placeholder="e.g. CompTIA Security+, CEH, Cloud Security Architect"
                  />
                </div>

                <div>
                  <label className="block text-xs font-cyber text-slate-300 uppercase tracking-wider mb-1.5">
                    Key Cyber & Tech Toolset
                  </label>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {['React', 'TypeScript', 'Node.js', 'Wireshark', 'Burp Suite', 'Nmap', 'Java', 'MySQL', 'Firebase', 'Git'].map((tool) => (
                      <span key={tool} className="px-2.5 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-cyber font-medium">
                        ✓ {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeCategory === 'projects' && (
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-300">
                  💡 <strong>Question:</strong> Which project is your top showcase, and what real-world results did it achieve?
                </div>

                <div>
                  <label className="block text-xs font-cyber text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Proudest Project
                  </label>
                  <input
                    type="text"
                    value={formData.favoriteProject}
                    onChange={(e) => setFormData({ ...formData, favoriteProject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
                    placeholder="ZenJournal, Fresh Farm, NutriTrack, or Alumni System"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="font-bold text-emerald-400 block font-cyber">ZenJournal</span>
                    <span className="text-slate-400 block text-[11px]">Private mindfulness & mood logging web app</span>
                    <a href="https://zenjournalapp.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline text-[10px] mt-1 inline-flex items-center gap-1">
                      zenjournalapp.netlify.app <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="font-bold text-emerald-400 block font-cyber">Fresh Farm Web Store</span>
                    <span className="text-slate-400 block text-[11px]">Dairy e-commerce with 1-click WhatsApp order</span>
                    <a href="https://freshfarm-topaz.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline text-[10px] mt-1 inline-flex items-center gap-1">
                      freshfarm-topaz.vercel.app <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="font-bold text-emerald-400 block font-cyber">NutriTrack</span>
                    <span className="text-slate-400 block text-[11px]">Nutrition & health metrics visualizer dashboard</span>
                    <a href="https://nutri-track-5toytglnm-gopinathvarudharaj-5095s-projects.vercel.app/metrics" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline text-[10px] mt-1 inline-flex items-center gap-1">
                      nutri-track.vercel.app <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="font-bold text-emerald-400 block font-cyber">Alumni Management</span>
                    <span className="text-slate-400 block text-[11px]">College alumni directory & mentorship portal</span>
                    <a href="https://alumni-lmanagement-system.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline text-[10px] mt-1 inline-flex items-center gap-1">
                      alumni-system.netlify.app <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeCategory === 'socials' && (
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-300">
                  💡 <strong>Question:</strong> What are your primary direct contact channels and social links?
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-cyber text-slate-300 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none font-mono"
                      placeholder="+91 93452 10892"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-cyber text-slate-300 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none font-mono"
                      placeholder="gopinathvarudharaj@gmail.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-cyber text-slate-300 uppercase tracking-wider mb-1.5">
                      LinkedIn Profile URL
                    </label>
                    <input
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none"
                      placeholder="https://linkedin.com/in/..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-cyber text-slate-300 uppercase tracking-wider mb-1.5">
                      GitHub Profile URL
                    </label>
                    <input
                      type="url"
                      value={formData.github}
                      onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none"
                      placeholder="https://github.com/..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Footer Action Buttons */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleCopyAnswers}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-cyber border border-slate-700 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Answers to Chat'}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 text-xs font-cyber transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-cyber font-bold tracking-wider uppercase transition-colors shadow-neon-green-sm"
                >
                  {savedSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Updated!</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      <span>Save & Apply Live</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
