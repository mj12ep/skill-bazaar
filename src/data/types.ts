export interface Skill {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  agent: {
    id: string;
    name: string;
    avatar: string;
  };
  version: string;
  downloads: number;
  rating: number;
  reviewCount: number;
  installCommand: string;
  sourceUrl?: string;
  readme?: string;
  createdAt: string;
  updatedAt: string;
  featured?: boolean;
  verified?: boolean;
}

export interface Agent {
  id: string;
  name: string;
  slug: string;
  avatar: string;
  description: string;
  longDescription: string;
  skills: string[];
  totalDownloads: number;
  rating: number;
  verified?: boolean;
  website?: string;
  github?: string;
  joinedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  skillCount: number;
  color: string;
}
