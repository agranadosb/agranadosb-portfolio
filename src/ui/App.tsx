import { Nav } from "@/ui/components/nav/Nav";
import { Education } from "@/ui/screens/experience/Education";
import { Experience } from "@/ui/screens/experience/Experience";
import { Honors } from "@/ui/screens/experience/Honors";
import { Introduction } from "@/ui/screens/introduction/Introduction";

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
