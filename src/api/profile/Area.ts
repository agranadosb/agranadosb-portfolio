export interface AreaItem {
  text: string;
  keywords?: string;
}

export interface Area {
  id: string;
  code: string;
  title: string;
  appliesAI: boolean;
  items: AreaItem[];
}
