import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "./_components/Header";
import ProjectsTable from "./_components/ProjectsTable";
import Skills from "./_components/Skills";
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

      </Accordion>
    </div>
  );
}
