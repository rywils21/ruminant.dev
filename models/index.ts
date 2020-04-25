export interface LessonLink {
  title: string;
  description: string;
  href: string;
}

export interface ModuleLink {
  title: string;
  href: string;
}

export interface ModuleTOC {
  module: ModuleLink | null;
  lessons: LessonLink[];
}

export interface LinkData {
  title: string;
  href: string;
}

export interface PagerOptions {
  previous: LinkData | null;
  current: LinkData | null;
  next: LinkData | null;
}
