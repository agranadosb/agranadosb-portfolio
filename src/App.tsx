import { Education, Experience, Honors } from "@/components/experience";
import { Introduction } from "@/components/introduction";

export function App() {
  return (
    <main>
      <Introduction />
      <Experience />
      <Education />
      <Honors />
    </main>
  );
}
