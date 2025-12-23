import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import projects from "@/data/projects.json";
import { ToolCase } from "lucide-react";
import Link from "next/link";
export default function Projects() {
  return (
    <div className="space-y-4">
      <div className="space-y-4 grid grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card key={project.name}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>
                <p className="flex gap-1 items-center">
                  <ToolCase />
                  {project.tech_stack.map((tech) => tech).join(", ")}
                </p>
              </CardDescription>
            </CardHeader>

            <CardContent>
              <p>{project.description}</p>
            </CardContent>
            <CardFooter>
              {project.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  className="underline"
                >
                  {link.label}
                </Link>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
