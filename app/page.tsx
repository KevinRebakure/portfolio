import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Certificates from "./_components/Certificates";
import Header from "./_components/Header";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <div className="p-6 md:p-16 space-y-16">
      <Header />
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="projects"
      >
        <AccordionItem value="projects">
          <AccordionTrigger>
            <h2 className="text-2xl">Projects</h2>
          </AccordionTrigger>
          <AccordionContent>
            <Projects />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="certificates">
          <AccordionTrigger>
            <h2 className="text-2xl">Certificates</h2>
          </AccordionTrigger>
          <AccordionContent>
            <Certificates />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {/* <div className="space-y-4">
        <Projects />
        <Certificates />
      </div> */}
    </div>
  );
}
