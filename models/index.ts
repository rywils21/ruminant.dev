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

export interface PagerOptions {
  previous: ModuleLink | LessonLink | null;
  current: ModuleLink | LessonLink | null;
  next: ModuleLink | LessonLink | null;
}
