import type { LucideIcon } from "lucide-react";

export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  image: string;
  bio: string;
  availability: string[];
  departmentId: string;
};

export type Department = {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};
