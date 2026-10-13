import Header from "./_components/Header";
import Connect from "./_components/Connect";
import Skills from "./_components/Skills";
import ProjectsView from "./_components/ProjectsView";
import SectionTitle from "./_components/SectionTitle";

export default function Home() {
  return (
    <main className="min-h-screen max-w-[960px] px-[clamp(20px,5vw,64px)] pt-[clamp(32px,7vw,88px)] pb-30">
      <Header />
      <div className="mt-[72px] flex flex-col gap-14">
        <section>
          <SectionTitle index="01">Connect</SectionTitle>
          <div className="mt-4 md:ml-[38px]">
            <Connect />
          </div>
        </section>
        <section>
          <SectionTitle index="02">Knowledge</SectionTitle>
          <div className="mt-4 md:ml-[38px]">
            <Skills />
          </div>
        </section>
        <section>
          <ProjectsView />
        </section>
      </div>
    </main>
  );
}
