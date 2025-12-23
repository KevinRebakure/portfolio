import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Certificates from "./_components/Certificates";
import Header from "./_components/Header";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";

import certificates from "@/data/certificates.json";
import projects from "@/data/projects.json";

export default function Home() {
  return (
    <div className="p-6 md:p-16 space-y-16">
      <Header />
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="skills"
      >
        <AccordionItem value="skills">
          <AccordionTrigger>Main tools for my daily chores</AccordionTrigger>
          <AccordionContent>
            <Skills />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="projects">
          <AccordionTrigger>Projects ({projects.length})</AccordionTrigger>
          <AccordionContent>
            <Projects />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="certificates">
          <AccordionTrigger>Certificates ({certificates.length})</AccordionTrigger>
          <AccordionContent>
            <Certificates />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
