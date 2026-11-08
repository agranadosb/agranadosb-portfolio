export interface Methodology {
  figure: {
    core: { number: string; label: string };
    ports: string;
    adapters: string;
  };
  principle: string;
  text: string;
  concepts: { term: string; description: string }[];
  practice: { title: string; description: string }[];
  legend: { number: string; text: string }[];
}
