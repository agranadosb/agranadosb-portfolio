export interface DatePoint {
  label: string;
  datetime?: string;
}

export interface Role {
  id: string;
  title: string;
  start: DatePoint;
  end: DatePoint;
  current?: boolean;
  summary: string;
  achievements: string[];
}

export interface EarlyRole {
  id: string;
  title: string;
  company: string;
  start: DatePoint;
  end: DatePoint;
  summary: string;
}

interface Period {
  id: string;
  name: string;
  location: string;
  start: DatePoint;
  end: DatePoint;
}

export interface Organization extends Period {
  note?: string;
  progression?: string[];
  roles: Role[];
}

export interface EarlyCareer extends Period {
  roles: EarlyRole[];
}

export interface Experience {
  organizations: Organization[];
  early: EarlyCareer;
}
