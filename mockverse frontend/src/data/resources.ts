import {
  BookOpen,
  FileText,
  Headphones,
  PenLine,
  PlayCircle,
} from "lucide-react";

export type ResourceType =
  | "PDF"
  | "Audio"
  | "Video"
  | "Article"
  | "Practice";

export type ResourceModule =
  | "Listening"
  | "Reading"
  | "Writing"
  | "Speaking"
  | "Grammar"
  | "Vocabulary"
  | "Strategy";

export type Difficulty =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export interface Resource {
  id: number;
  title: string;
  description: string;
  type: ResourceType;
  module: ResourceModule;
  difficulty: Difficulty;
  duration: string;
  featured?: boolean;
  recommended?: boolean;
  rating: number;
}

export const resources: Resource[] = [
  {
    id: 1,
    title: "IELTS Listening: Question Types",
    description:
      "Learn how to approach multiple choice, matching, form completion and map questions.",
    type: "Article",
    module: "Listening",
    difficulty: "Beginner",
    duration: "12 min",
    featured: true,
    recommended: true,
    rating: 4.9,
  },

  {
    id: 2,
    title: "Academic Reading Strategies",
    description:
      "Practical strategies for skimming, scanning and locating answers efficiently.",
    type: "PDF",
    module: "Reading",
    difficulty: "Intermediate",
    duration: "18 min",
    featured: true,
    recommended: true,
    rating: 4.8,
  },

  {
    id: 3,
    title: "Writing Task 2 Structure",
    description:
      "Understand the structure of a strong IELTS Writing Task 2 essay.",
    type: "Video",
    module: "Writing",
    difficulty: "Intermediate",
    duration: "24 min",
    featured: true,
    rating: 4.9,
  },

  {
    id: 4,
    title: "Speaking Part 2: Long Turn",
    description:
      "Practice organizing your ideas and speaking confidently for two minutes.",
    type: "Audio",
    module: "Speaking",
    difficulty: "Beginner",
    duration: "15 min",
    recommended: true,
    rating: 4.7,
  },

  {
    id: 5,
    title: "IELTS Academic Vocabulary",
    description:
      "Essential academic vocabulary grouped by common IELTS topics.",
    type: "PDF",
    module: "Vocabulary",
    difficulty: "Intermediate",
    duration: "30 min",
    recommended: true,
    rating: 4.8,
  },

  {
    id: 6,
    title: "Common Grammar Mistakes",
    description:
      "Identify and fix grammar mistakes that commonly affect IELTS scores.",
    type: "Article",
    module: "Grammar",
    difficulty: "Beginner",
    duration: "10 min",
    rating: 4.6,
  },

  {
    id: 7,
    title: "Matching Headings Masterclass",
    description:
      "Develop a reliable strategy for IELTS Reading matching headings questions.",
    type: "Video",
    module: "Reading",
    difficulty: "Advanced",
    duration: "21 min",
    rating: 4.9,
  },

  {
    id: 8,
    title: "Writing Task 1: Graphs & Charts",
    description:
      "Learn how to describe trends, comparisons and key features accurately.",
    type: "PDF",
    module: "Writing",
    difficulty: "Intermediate",
    duration: "25 min",
    rating: 4.8,
  },

  {
    id: 9,
    title: "Speaking Fluency Practice",
    description:
      "Audio prompts designed to help improve fluency and spontaneous speaking.",
    type: "Audio",
    module: "Speaking",
    difficulty: "Advanced",
    duration: "20 min",
    rating: 4.7,
  },

  {
    id: 10,
    title: "IELTS Exam Day Strategy",
    description:
      "A practical checklist covering timing, concentration and exam-day preparation.",
    type: "Article",
    module: "Strategy",
    difficulty: "Beginner",
    duration: "8 min",
    rating: 4.9,
  },
];

export const categories = [
  "All",
  "Listening",
  "Reading",
  "Writing",
  "Speaking",
  "Grammar",
  "Vocabulary",
  "Strategy",
] as const;

export const resourceTypes = [
  "All Types",
  "PDF",
  "Audio",
  "Video",
  "Article",
  "Practice",
] as const;

export const getResourceIcon = (
  type: ResourceType
) => {
  switch (type) {
    case "Audio":
      return Headphones;

    case "Video":
      return PlayCircle;

    case "PDF":
      return FileText;

    case "Article":
      return BookOpen;

    case "Practice":
      return PenLine;

    default:
      return FileText;
  }
};

export const getResourceColor = (type: ResourceType) => {
  switch (type) {
    case "Audio":
      return "bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400";

    case "Video":
      return "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400";

    case "PDF":
      return "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400";

    case "Article":
      return "bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400";

    case "Practice":
      return "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400";

    default:
      return "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400";
  }
};
