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
          <AccordionTrigger>Projects</AccordionTrigger>
          <AccordionContent>
            <Projects />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="certificates">
          <AccordionTrigger>Certificates</AccordionTrigger>
          <AccordionContent>
            <Certificates />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
