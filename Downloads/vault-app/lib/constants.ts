import { GameDef, RoleOption } from "@/types";

export const ACCOUNT_TYPES = [
  {
    type: "GAMER" as const,
    eyebrow: "VERIFIED IDENTITY",
    title: "Gamer",
    description: "Build your gaming identity.",
    landingDescription:
      "Your gaming identity, verified game profiles and competitive history.",
  },
  {
    type: "ESPORTS_CLUB" as const,
    eyebrow: "ORGANIZATION",
    title: "Esports Club",
    description: "Showcase your teams and discover players.",
    landingDescription:
      "Build your organization identity, showcase your teams and discover players.",
  },
  {
    type: "ORGANIZER" as const,
    eyebrow: "PRO PRODUCTION",
    title: "League Organizer",
    description: "Build your tournament and league record.",
    landingDescription:
      "Show your tournaments, leagues and competitive track record.",
  },
];

export const GAMES: GameDef[] = [
  { id: "bgmi", slug: "bgmi", name: "BGMI", color: "#F5A623", letter: "B" },
  { id: "valorant", slug: "valorant", name: "Valorant", color: "#EF4444", letter: "V" },
  { id: "codmobile", slug: "codmobile", name: "COD Mobile", color: "#10B981", letter: "C" },
  { id: "freefire", slug: "freefire", name: "Free Fire", color: "#3B82F6", letter: "F" },
  { id: "cs2", slug: "cs2", name: "CS2", color: "#7C3AED", letter: "C" },
  { id: "fortnite", slug: "fortnite", name: "Fortnite", color: "#EC4899", letter: "F" },
  { id: "apex", slug: "apex", name: "Apex Legends", color: "#DC2626", letter: "A" },
  { id: "lol", slug: "lol", name: "League of Legends", color: "#059669", letter: "L" },
  { id: "dota2", slug: "dota2", name: "Dota 2", color: "#7C3AED", letter: "D" },
];

export const ROLE_OPTIONS: RoleOption[] = [
  "IGL",
  "Entry Fragger",
  "Support",
  "Sniper",
  "Duelist",
  "Controller",
  "Initiator",
  "Sentinel",
  "Flex",
  "Coach",
  "Creator",
  "Other",
];

export const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "Germany",
  "Brazil",
  "Indonesia",
  "Philippines",
  "Pakistan",
];
