import { About } from "./_components/about";
import { Banner } from "./_components/banner";
import { Skills } from "./_components/skills";

const HomePage = () => {
  return (
    <div className=" pb-16">
      <Banner />
      <div className=" mx-auto flex max-w-2xl flex-col gap-20 px-4 md:px-0">
        <About />
        <Skills />
      </div>
    </div>
  );
};

export default HomePage;
