import { Education, Experience, Honors } from "@/components/experience";
import { Introduction } from "@/components/introduction";
import { Nav } from "@/components/Nav";

export function App() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        <Introduction />
        <Experience />
        <Education />
        <Honors />
      </main>
    </>
  );
}
