import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CertificatesTable from "./_components/CertificatesTable";
import Header from "./_components/Header";
import LearningTable from "./_components/LearningTable";
import ProjectsTable from "./_components/ProjectsTable";
import Skills from "./_components/Skills";
import certificates from "@/data/certificates.json";
import projects from "@/data/projects.json";
import Connect from "./_components/Connect";

export default function Home() {
  return (
    <div className="p-6 md:p-16 space-y-16">
      <Header />
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="connect"
      >
        <AccordionItem value="connect">
          <AccordionTrigger>Let&apos;s connect</AccordionTrigger>
          <AccordionContent>
            <Connect />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="learning">
          <AccordionTrigger>Currently learning</AccordionTrigger>
          <AccordionContent>
            <LearningTable />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="skills">
          <AccordionTrigger>Main tools for my daily chores</AccordionTrigger>
          <AccordionContent>
            <Skills />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="projects">
          <AccordionTrigger>Projects ({projects.length})</AccordionTrigger>
          <AccordionContent>
            <ProjectsTable />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="certificates">
          <AccordionTrigger>
            Certificates ({certificates.length})
          </AccordionTrigger>
          <AccordionContent>
            <CertificatesTable />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
