export interface Degree {
  level: string;
  title: string;
  note?: string;
}

export interface Education {
  institution: string;
  degrees: Degree[];
  honors: string[];
}
