import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/feature/hero/HeroSection";
import AboutSection from "@/feature/about/AboutSection";
import SkillSection from "@/feature/skill/SkillSection";
import ProjectsSection from "@/feature/projects/ProjectsSection";
import EducationSection from "@/feature/education/EducationSection";
import ContactSection from "@/feature/contact/ContactSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050816] text-slate-100">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
