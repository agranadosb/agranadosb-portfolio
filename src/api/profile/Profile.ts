export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  linkedin: { display: string; url: string };
  github: { display: string; url: string };
}
