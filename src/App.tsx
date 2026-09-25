import React, { useState } from 'react';
import { TopBar } from './components/TopBar.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { MediaNetworkSection } from './components/MediaNetworkSection.tsx';
import { VisualPortfolioSection } from './components/VisualPortfolioSection.tsx';
import { MultimediaNodeSection } from './components/MultimediaNodeSection.tsx';
import { ClientEndorsementsSection } from './components/ClientEndorsementsSection.tsx';
import { DownloadsRepositorySection } from './components/DownloadsRepositorySection.tsx';
import { CaseStudiesSection } from './components/CaseStudiesSection.tsx';
import { BlogSection } from './components/BlogSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ConsultationModal } from './components/ConsultationModal.tsx';
import { WhatsAppFloat } from './components/WhatsAppFloat.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedServiceForConsultation, setSelectedServiceForConsultation] = useState<string | undefined>(undefined);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        const headerOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // Scroll spy to keep active section in sync
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'multimedia', 'endorsements', 'downloads', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section === 'home') {
          if (window.scrollY < 300) {
            setActiveSection('home');
            break;
          }
        } else {
          const el = document.getElementById(section);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedServiceForConsultation(serviceName);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#d89e28]/30 selection:text-[#0d2137]">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Main Navigation Bar with Blueprint Items */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* 3. Home Page [REQUIRED] — Hero Section with Soaring Golden Trend Arrow */}
      <HeroSection
        onOpenConsultation={() => handleOpenConsultation()}
        onExploreServices={() => handleNavigate('services')}
      />

      {/* 4. Media Outlets & Publications Press Strip */}
      <MediaNetworkSection />

      {/* 5. About Us / Pedigree [REQUIRED] */}
      <AboutSection
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* 6. Services Matrix [REQUIRED] — 3-Pillar Operational Modules */}
      <ServicesSection
        onSelectService={(serviceName) => handleOpenConsultation(serviceName)}
      />

      {/* 7. Visual Portfolio [REQUIRED] — High-Density Masonry Documentaries & Cases */}
      <VisualPortfolioSection
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* 8. Multimedia Node [REQUIRED] — Corporate Podcasts, Broadcasts & Wires */}
      <MultimediaNodeSection />

      {/* 9. Client Endorsements [REQUIRED] — Verified Institutional & Sovereign Quotes */}
      <ClientEndorsementsSection />

      {/* 10. Downloads Repository [REQUIRED] — API-Monitored Official Assets */}
      <DownloadsRepositorySection />

      {/* 11. Featured Case Studies */}
      <CaseStudiesSection
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* 12. Thought Leadership & PR Blog */}
      <BlogSection />

      {/* 13. Contact & Ingestion [REQUIRED] — Encrypted Form & Sandboxed Crisis Console */}
      <ContactSection preselectedService={selectedServiceForConsultation} />

      {/* 14. Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* 15. WhatsApp Link [REQUIRED] — Brand-Colored Float Anchor */}
      <WhatsAppFloat
        onOpenDirectConsultation={() => handleOpenConsultation()}
      />

      {/* Global Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedService={selectedServiceForConsultation}
      />
    </div>
  );
}
