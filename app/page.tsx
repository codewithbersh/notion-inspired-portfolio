import { About } from "./_components/about";
import { Banner } from "./_components/banner";
import { Education } from "./_components/education";
import { Projects } from "./_components/projects";
import { Skills } from "./_components/skills";
import { WorkExperience } from "./_components/work-experience";

const HomePage = () => {
  return (
    <div className=" pb-16">
      <Banner />
      <div className=" mx-auto flex max-w-2xl flex-col gap-20 px-4 md:px-0">
        <About />
        <Skills />
        <Projects />
        <WorkExperience />
        <Education />
      </div>
    </div>
  );
};

export default HomePage;
