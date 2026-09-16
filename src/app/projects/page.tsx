import { ProjectCard } from "@/components/project-card";
import { Container, SectionTitle } from "@/components/ui";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="space-y-10">
        <SectionTitle
          title="Projects"
          subtitle="Pipeline, modeling, and tool-building work spanning NCAA and MLB contexts, forecasting, and formal ML research."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </Container>
  );
}
