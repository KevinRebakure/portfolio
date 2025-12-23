import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import projects from "@/data/projects.json";
import Link from "next/link";
export default function Projects() {
  return (
    <div className="space-y-4">
      <div className="space-y-4 grid grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <Card key={project.name}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{project.goal}</p>
            </CardContent>
            <CardFooter>
              {project.link && (
                <Link href={project.link} target="_blank" className="underline">
                  Try the App
                </Link>
              )}
              {project.source_code && (
                <Link
                  href={project.source_code}
                  target="_blank"
                  className="underline"
                >
                  Source code
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
