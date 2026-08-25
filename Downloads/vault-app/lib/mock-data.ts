import {
  AccountType,
  Achievement,
  Applicant,
  ClubPlayer,
  ClubTeam,
  Community,
  ContentItem,
  ContentPost,
  CreatorDirectoryEntry,
  CreatorPost,
  DiscoverTournament,
  EventItem,
  GameConnection,
  GamePassport,
  HubTournament,
  League,
  MatchResult,
  NetworkEntry,
  OrgStats,
  PlatformActivity,
  Profile,
  RecentlyViewedEntry,
  RecruitmentOpportunity,
  Team,
  Tournament,
  TournamentResult,
  TrendingGroup,
} from "@/types";

export const currentUsername = "aniket";

// Usernames this demo session has owner/admin access to (no real auth backend).
export const ownedUsernames = ["aniket", "zarx_esports", "zarx_gaming"];

export const profiles: Profile[] = [
  {
    id: "p1",
    username: "aniket",
    displayName: "Aniket",
    type: "GAMER",
    typeLabel: "GAMER",
    avatarGradient: "linear-gradient(135deg, #1e3a8a, #7c3aed)",
    verified: true,
    country: "India",
    countryFlag: "🇮🇳",
    bio: "Competitive gamer · IGL · BGMI · India. Team lead focused on strategy, tournament coordination and community growth.",
    shortTag: "Competitive gamer · IGL · BGMI",
    followers: "1.2K",
    following: "450",
    stats: [
      { label: "TOURNAMENTS", value: "24" },
      { label: "ACHIEVEMENTS", value: "8" },
      { label: "TEAMS", value: "3" },
    ],
    tags: ["BGMI", "CONQUEROR"],
    youtubeUrl: "youtube.com/c/aniket_gaming",
    twitchUrl: "twitch.tv/aniket_igl",
  },
  {
    id: "p2",
    username: "zarx_esports",
    displayName: "Zarx Esports",
    type: "ESPORTS_CLUB",
    typeLabel: "ESPORTS CLUB",
    avatarGradient: "linear-gradient(135deg, #111827, #374151)",
    verified: true,
    bio: "Leading south-asian competitive esports organization.",
    shortTag: "Leading south-asian competitive esports organization.",
    stats: [
      { label: "Teams", value: "12" },
      { label: "Players", value: "84" },
    ],
    tags: ["BGMI", "VALORANT", "FREE FIRE"],
  },
  {
    id: "p3",
    username: "zarx_gaming",
    displayName: "Zarx Gaming",
    type: "ORGANIZER",
    typeLabel: "ORGANIZER",
    avatarGradient: "linear-gradient(135deg, #0f172a, #1e293b)",
    verified: true,
    bio: "The authority in tier-1 community tournament execution.",
    shortTag: "The authority in tier-1 community tournament execution.",
    stats: [
      { label: "TOURNAMENTS", value: "124" },
      { label: "LEAGUES", value: "12" },
      { label: "PATRONS", value: "50k" },
    ],
    tags: ["BGMI", "VALORANT"],
  },
  {
    id: "p4",
    username: "mortal",
    displayName: "Mortal",
    type: "GAMER",
    typeLabel: "GAMER",
    avatarGradient: "linear-gradient(135deg, #7c2d12, #f97316)",
    verified: true,
    bio: "Soul Esports · BGMI Pro",
    shortTag: "Soul Esports · BGMI Pro",
    stats: [
      { label: "TOURNAMENTS", value: "56" },
      { label: "ACHIEVEMENTS", value: "22" },
      { label: "TEAMS", value: "2" },
    ],
    tags: ["BGMI"],
  },
  {
    id: "p5",
    username: "scoutop",
    displayName: "ScOutOP",
    type: "GAMER",
    typeLabel: "GAMER",
    avatarGradient: "linear-gradient(135deg, #164e63, #06b6d4)",
    verified: false,
    bio: "BGMI Athlete · Team Xspark",
    shortTag: "BGMI Athlete · Team Xspark",
    stats: [
      { label: "TOURNAMENTS", value: "18" },
      { label: "ACHIEVEMENTS", value: "6" },
      { label: "TEAMS", value: "1" },
    ],
    tags: ["BGMI"],
  },
  {
    id: "p6",
    username: "jonathan",
    displayName: "Jonathan",
    type: "GAMER",
    typeLabel: "GAMER",
    avatarGradient: "linear-gradient(135deg, #365314, #84cc16)",
    verified: false,
    isPrivate: true,
    bio: "GodLike Esports · Pro Assaulter",
    shortTag: "GodLike Esports · Pro Assaulter",
    stats: [
      { label: "TOURNAMENTS", value: "31" },
      { label: "ACHIEVEMENTS", value: "9" },
      { label: "TEAMS", value: "2" },
    ],
    tags: ["BGMI"],
  },
  {
    id: "p7",
    username: "mavi",
    displayName: "Mavi",
    type: "GAMER",
    typeLabel: "GAMER",
    avatarGradient: "linear-gradient(135deg, #581c87, #c026d3)",
    verified: false,
    bio: "IGL Expert · Global Esports",
    shortTag: "IGL Expert · Global Esports",
    stats: [
      { label: "TOURNAMENTS", value: "40" },
      { label: "ACHIEVEMENTS", value: "12" },
      { label: "TEAMS", value: "3" },
    ],
    tags: ["BGMI"],
  },
  {
    id: "p8",
    username: "zacksharma",
    displayName: "Aman 'Zack' Sharma",
    type: "GAMER",
    typeLabel: "GAMER",
    avatarGradient: "linear-gradient(135deg, #1e40af, #3b82f6)",
    verified: true,
    country: "India",
    bio: "BGMI · CONQUEROR · Slasher · Tier 1 · IGL",
    shortTag: "BGMI · CONQUEROR · Slasher · Tier 1 · IGL",
    stats: [
      { label: "Tournaments", value: "42" },
      { label: "Achievements", value: "12" },
    ],
    tags: ["BGMI"],
  },
  {
    id: "p9",
    username: "raptor_gaming",
    displayName: "Rohan 'Raptor' Sen",
    type: "GAMER",
    typeLabel: "GAMER",
    avatarGradient: "linear-gradient(135deg, #1e3a8a, #0ea5e9)",
    verified: true,
    country: "India",
    bio: "Valorant · Radiant · Duelist · Tier 1 · Entry Fragger",
    shortTag: "Valorant · Radiant · Duelist · Tier 1 · Entry Fragger",
    stats: [
      { label: "Tournaments", value: "31" },
      { label: "Achievements", value: "9" },
    ],
    tags: ["VALORANT"],
  },
  {
    id: "p10",
    username: "aniketsoul",
    displayName: "Aniket 'Soul' Singh",
    type: "GAMER",
    typeLabel: "GAMER",
    avatarGradient: "linear-gradient(135deg, #7c2d12, #ea580c)",
    verified: true,
    country: "India",
    bio: "BGMI · Conqueror · Tier 1 · IGL",
    shortTag: "BGMI · Conqueror · Tier 1 · IGL",
    stats: [
      { label: "Tournaments", value: "24" },
      { label: "Achievements", value: "8" },
    ],
    tags: ["BGMI"],
  },
  {
    id: "p11",
    username: "naman_mortal",
    displayName: "Naman 'Mortal' Sandip",
    type: "GAMER",
    typeLabel: "GAMER",
    avatarGradient: "linear-gradient(135deg, #831843, #db2777)",
    verified: true,
    country: "India",
    bio: "BGMI · Esports Legend · Tier 1 · IGL",
    shortTag: "BGMI · Esports Legend · Tier 1 · IGL",
    stats: [
      { label: "Tournaments", value: "56" },
      { label: "Achievements", value: "18" },
    ],
    tags: ["BGMI"],
  },
  {
    id: "p12",
    username: "aniket_viper",
    displayName: "Aniket 'Viper' Roy",
    type: "GAMER",
    typeLabel: "GAMER",
    avatarGradient: "linear-gradient(135deg, #14532d, #16a34a)",
    verified: true,
    country: "India",
    bio: "BGMI · CONQUEROR · Assaulter",
    shortTag: "BGMI · CONQUEROR · Assaulter",
    stats: [
      { label: "Tournaments", value: "18" },
      { label: "Achievements", value: "4" },
    ],
    tags: ["BGMI"],
  },
  {
    id: "p13",
    username: "aniketrex",
    displayName: "Aniket 'Rex' Patil",
    type: "GAMER",
    typeLabel: "GAMER",
    avatarGradient: "linear-gradient(135deg, #78350f, #d97706)",
    verified: true,
    country: "India",
    bio: "BGMI · CONQUEROR · Support",
    shortTag: "BGMI · CONQUEROR · Support",
    stats: [
      { label: "Tournaments", value: "12" },
      { label: "Achievements", value: "3" },
    ],
    tags: ["BGMI"],
  },
  {
    id: "p14",
    username: "aniketstorm",
    displayName: "Aniket 'Storm' Joshi",
    type: "GAMER",
    typeLabel: "GAMER",
    avatarGradient: "linear-gradient(135deg, #312e81, #6366f1)",
    verified: true,
    country: "India",
    bio: "BGMI · ACE · IGL",
    shortTag: "BGMI · ACE · IGL",
    stats: [
      { label: "Tournaments", value: "8" },
      { label: "Achievements", value: "1" },
    ],
    tags: ["BGMI"],
  },
  {
    id: "p15",
    username: "s8ulesports",
    displayName: "S8UL Esports",
    type: "ESPORTS_CLUB",
    typeLabel: "ESPORTS CLUB",
    avatarGradient: "linear-gradient(135deg, #18181b, #3f3f46)",
    verified: true,
    country: "India",
    bio: "BGMI · Clash of Clans",
    shortTag: "BGMI · Clash of Clans",
    stats: [
      { label: "Teams", value: "6" },
      { label: "Players", value: "42" },
    ],
    tags: ["BGMI", "CLASH OF CLANS"],
  },
  {
    id: "p16",
    username: "velocitygaming",
    displayName: "Velocity Gaming",
    type: "ESPORTS_CLUB",
    typeLabel: "ESPORTS CLUB",
    avatarGradient: "linear-gradient(135deg, #0f172a, #0891b2)",
    verified: true,
    country: "India",
    bio: "VALORANT · BGMI",
    shortTag: "VALORANT · BGMI",
    stats: [
      { label: "Teams", value: "3" },
      { label: "Players", value: "21" },
    ],
    tags: ["VALORANT", "BGMI"],
  },
  {
    id: "p17",
    username: "globalesports",
    displayName: "Global Esports",
    type: "ESPORTS_CLUB",
    typeLabel: "ESPORTS CLUB",
    avatarGradient: "linear-gradient(135deg, #1e293b, #475569)",
    verified: true,
    country: "India",
    bio: "VALORANT",
    shortTag: "VALORANT",
    stats: [
      { label: "Teams", value: "4" },
      { label: "Players", value: "28" },
    ],
    tags: ["VALORANT"],
  },
  {
    id: "p18",
    username: "skyesports",
    displayName: "Skyesports",
    type: "ORGANIZER",
    typeLabel: "ORGANIZER",
    avatarGradient: "linear-gradient(135deg, #0c4a6e, #0284c7)",
    verified: true,
    country: "India",
    bio: "Premier community tournament host for BGMI, Valorant and more.",
    shortTag: "Verified League Organizer",
    stats: [
      { label: "Tournaments Hosted", value: "112" },
      { label: "Active Leagues", value: "8" },
    ],
    tags: ["BGMI", "VALORANT"],
  },
  {
    id: "p19",
    username: "nodwingaming",
    displayName: "Nodwin Gaming",
    type: "ORGANIZER",
    typeLabel: "ORGANIZER",
    avatarGradient: "linear-gradient(135deg, #1e1b4b, #4338ca)",
    verified: true,
    country: "India",
    bio: "India's largest esports and gaming events organizer.",
    shortTag: "Verified League Organizer",
    stats: [
      { label: "Tournaments Hosted", value: "245" },
      { label: "Active Leagues", value: "14" },
    ],
    tags: ["BGMI", "VALORANT", "CS2"],
  },
  {
    id: "p20",
    username: "godlike",
    displayName: "GodLike Esports",
    type: "ESPORTS_CLUB",
    typeLabel: "ESPORTS CLUB",
    avatarGradient: "linear-gradient(135deg, #3f0d0d, #b91c1c)",
    verified: true,
    country: "India",
    bio: "BGMI · CODM",
    shortTag: "BGMI · CODM",
    stats: [
      { label: "Teams", value: "5" },
      { label: "Players", value: "30" },
    ],
    tags: ["BGMI", "CODM"],
  },
  {
    id: "p22",
    username: "phoenix",
    displayName: "Phoenix",
    type: "ESPORTS_CLUB",
    typeLabel: "ESPORTS CLUB",
    avatarGradient: "linear-gradient(135deg, #7c2d12, #ea580c)",
    verified: true,
    country: "India",
    bio: "Free Fire tournament organizer and content creator.",
    shortTag: "Free Fire · Tournament Organizer",
    stats: [
      { label: "Teams", value: "3" },
      { label: "Players", value: "18" },
    ],
    tags: ["FREE FIRE"],
  },
  {
    id: "p21",
    username: "hydra_gaming",
    displayName: "Hydra Gaming",
    type: "ESPORTS_CLUB",
    typeLabel: "ESPORTS CLUB",
    avatarGradient: "linear-gradient(135deg, #164e63, #0e7490)",
    verified: false,
    country: "India",
    bio: "CODM · Esports Community",
    shortTag: "CODM · Esports Community",
    stats: [
      { label: "Teams", value: "2" },
      { label: "Players", value: "16" },
    ],
    tags: ["CODM"],
  },
  {
    id: "p22",
    username: "playerx",
    displayName: "Player_X",
    type: "GAMER",
    typeLabel: "GAMER",
    avatarGradient: "linear-gradient(135deg, #4c0519, #9f1239)",
    verified: true,
    country: "India",
    bio: "VALORANT",
    shortTag: "VALORANT",
    stats: [
      { label: "Tournaments", value: "6" },
      { label: "Achievements", value: "1" },
    ],
    tags: ["VALORANT"],
  },
  {
    id: "p23",
    username: "rohit_pro",
    displayName: "Rohit 'Raptor' Sen",
    type: "GAMER",
    typeLabel: "GAMER",
    avatarGradient: "linear-gradient(135deg, #1e3a8a, #0ea5e9)",
    verified: true,
    country: "India",
    bio: "VALORANT · DUELIST · Radiant",
    shortTag: "VALORANT · DUELIST · Radiant",
    stats: [
      { label: "Tournaments", value: "20" },
      { label: "Achievements", value: "5" },
    ],
    tags: ["VALORANT"],
  },
  {
    id: "p24",
    username: "zarxtron",
    displayName: "Zarxtron",
    type: "GAMER",
    typeLabel: "GAMER",
    avatarGradient: "linear-gradient(135deg, #164e63, #06b6d4)",
    verified: false,
    country: "India",
    bio: "Rising BGMI competitor.",
    shortTag: "BGMI competitor",
    stats: [
      { label: "Tournaments", value: "4" },
      { label: "Achievements", value: "0" },
    ],
    tags: ["BGMI"],
  },
  {
    id: "p25",
    username: "sayyara",
    displayName: "Sayyara",
    type: "GAMER",
    typeLabel: "GAMER",
    avatarGradient: "linear-gradient(135deg, #0e7490, #67e8f9)",
    verified: true,
    country: "India",
    bio: "Esports Pro · VALORANT Duelist",
    shortTag: "Esports Pro · VALORANT Duelist",
    stats: [
      { label: "Tournaments", value: "28" },
      { label: "Achievements", value: "10" },
    ],
    tags: ["VALORANT"],
  },
  {
    id: "p26",
    username: "viper_fps",
    displayName: "Viper_FPS",
    type: "GAMER",
    typeLabel: "GAMER",
    avatarGradient: "linear-gradient(135deg, #1e293b, #64748b)",
    verified: true,
    country: "India",
    bio: "Streamer · BGMI Assaulter",
    shortTag: "Streamer · BGMI Assaulter",
    stats: [
      { label: "Tournaments", value: "35" },
      { label: "Achievements", value: "11" },
    ],
    tags: ["BGMI"],
  },
  {
    id: "p27",
    username: "gamerx",
    displayName: "GamerX",
    type: "GAMER",
    typeLabel: "GAMER",
    avatarGradient: "linear-gradient(135deg, #374151, #9ca3af)",
    verified: true,
    country: "India",
    bio: "Analyst · Free Fire Leader",
    shortTag: "Analyst · Free Fire Leader",
    stats: [
      { label: "Tournaments", value: "15" },
      { label: "Achievements", value: "4" },
    ],
    tags: ["FREE FIRE"],
  },
  {
    id: "p28",
    username: "zed_clutch",
    displayName: "ZED_CLUTCH",
    type: "GAMER",
    typeLabel: "GAMER",
    avatarGradient: "linear-gradient(135deg, #7c2d12, #ea580c)",
    verified: true,
    country: "India",
    bio: "Gaming Creator · VALORANT Sentinel",
    shortTag: "Gaming Creator · VALORANT Sentinel",
    stats: [
      { label: "Tournaments", value: "19" },
      { label: "Achievements", value: "6" },
    ],
    tags: ["VALORANT"],
  },
  {
    id: "p29",
    username: "alphaqueen",
    displayName: "AlphaQueen",
    type: "GAMER",
    typeLabel: "GAMER",
    avatarGradient: "linear-gradient(135deg, #4c0519, #f472b6)",
    verified: true,
    country: "India",
    bio: "Verified Pro · COD Mobile Sniper",
    shortTag: "Verified Pro · COD Mobile Sniper",
    stats: [
      { label: "Tournaments", value: "44" },
      { label: "Achievements", value: "17" },
    ],
    tags: ["COD MOBILE"],
  },
  {
    id: "p30",
    username: "nova",
    displayName: "Nova",
    type: "GAMER",
    typeLabel: "GAMER",
    avatarGradient: "linear-gradient(135deg, #581c87, #d946ef)",
    verified: true,
    country: "India",
    bio: "VALORANT · Content Creator",
    shortTag: "VALORANT · Content Creator",
    stats: [
      { label: "Tournaments", value: "22" },
      { label: "Achievements", value: "7" },
    ],
    tags: ["VALORANT"],
  },
  {
    id: "p31",
    username: "hyper",
    displayName: "Hyper",
    type: "GAMER",
    typeLabel: "GAMER",
    avatarGradient: "linear-gradient(135deg, #1e1b4b, #6366f1)",
    verified: true,
    country: "India",
    bio: "VALORANT · Radiant",
    shortTag: "VALORANT · Radiant",
    stats: [
      { label: "Tournaments", value: "17" },
      { label: "Achievements", value: "5" },
    ],
    tags: ["VALORANT"],
  },
];

export function getProfileByUsername(username: string): Profile | undefined {
  return profiles.find((p) => p.username === username);
}

export const landingDirectoryUsernames: Record<AccountType, string[]> = {
  GAMER: ["aniket", "zacksharma", "aniketsoul"],
  ESPORTS_CLUB: ["zarx_esports", "s8ulesports", "godlike"],
  ORGANIZER: ["zarx_gaming", "skyesports", "nodwingaming"],
};

export const gamePassports: Record<string, GamePassport[]> = {
  aniket: [
    {
      gameSlug: "bgmi",
      gameName: "BGMI",
      ign: "ANIKET07",
      rank: "CONQUEROR",
      role: "In-Game Leader (IGL)",
      verifiedDate: "August 2026",
      verified: true,
      isPrimary: true,
      stats: {
        uid: "5126849310",
        level: 72,
        kdRatio: "4.72",
        matches: 1248,
        wins: 224,
        season: "Current Season",
      },
      verificationSource:
        "In-game Profile API & verified e-sports tournament roster screenshots",
    },
    {
      gameSlug: "valorant",
      gameName: "VALORANT",
      ign: "ANIKET#IN1",
      rank: "IMMORTAL",
      role: "Duelist / Initiator",
      verifiedDate: "July 2026",
      verified: true,
      stats: {
        uid: "88213409",
        level: 156,
        kdRatio: "1.38",
        matches: 620,
        wins: 341,
        season: "Episode 9",
      },
      verificationSource: "Riot Games API & linked Riot ID",
    },
    {
      gameSlug: "codmobile",
      gameName: "COD MOBILE",
      ign: "Aniket_CM",
      rank: "LEGENDARY",
      role: "Sniper / Support",
      verifiedDate: "June 2026",
      verified: true,
      stats: {
        uid: "40928123",
        level: 148,
        kdRatio: "3.10",
        matches: 2140,
        wins: 980,
        season: "Season 5",
      },
      verificationSource: "In-game Profile API",
    },
    {
      gameSlug: "freefire",
      gameName: "FREE FIRE",
      ign: "Aniket_FF",
      rank: "HEROIC",
      role: "Rusher",
      verifiedDate: "August 2026",
      verified: true,
      stats: {
        uid: "702938441",
        level: 65,
        kdRatio: "2.85",
        matches: 3050,
        wins: 610,
        season: "Current Season",
      },
      verificationSource: "In-game Profile API",
    },
  ],
};

export const teams: Record<string, Team[]> = {
  aniket: [
    {
      id: "t1",
      name: "ZARX Alpha",
      status: "Active Squad",
      league: "Battlegrounds India",
      game: "Free Fire",
      role: "IGL",
      period: "2026 — Present",
      isActive: true,
      logoLabel: "Z",
    },
    {
      id: "t2",
      name: "Team XYZ",
      status: "Previous",
      league: "Battlegrounds India",
      game: "BGMI",
      role: "Fragger",
      period: "2025 — 2026",
      isActive: false,
      logoLabel: "XYZ",
    },
    {
      id: "t3",
      name: "Team ABC",
      status: "Previous",
      league: "COD Mobile League",
      game: "COD Mobile",
      role: "Support",
      period: "2024 — 2025",
      isActive: false,
      logoLabel: "ABC",
    },
  ],
};

export const achievements: Record<string, Achievement[]> = {
  aniket: [
    {
      id: "a1",
      title: "ZCL Winter Wars",
      description:
        "First Place / Champion · 2026 Season. Representing ZARX Esports.",
      result: "CHAMPION",
      game: "Free Fire MAX",
      year: "2026",
      category: "trophy",
    },
    {
      id: "a2",
      title: "Campus Clash",
      description: "MVP · BGMI · 2026",
      result: "MVP",
      game: "BGMI",
      year: "2026",
      category: "star",
    },
    {
      id: "a3",
      title: "Regional Championship",
      description: "Top 10 · VALORANT · 2025",
      result: "TOP 10",
      game: "VALORANT",
      year: "2025",
      category: "medal",
    },
    {
      id: "a4",
      title: "100 Matches",
      description: "BGMI · 2025",
      result: "BGMI",
      game: "BGMI",
      year: "2025",
      category: "milestone",
    },
    {
      id: "a5",
      title: "Tournament Winner",
      description: "COD Mobile · 2025",
      result: "COD MOBILE",
      game: "COD Mobile",
      year: "2025",
      category: "trophy",
    },
  ],
};

export const contentItems: Record<string, ContentItem[]> = {
  aniket: [
    {
      id: "c1",
      title: "32-kill ranked game",
      meta: "YouTube · 12K Views",
      platform: "YouTube",
      tag: "BGMI",
      duration: "4:12",
      gradient: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
    },
    {
      id: "c2",
      title: "ZCL Finals clutch",
      meta: "YouTube · 8K Views",
      platform: "YouTube",
      tag: "Clips",
      duration: "1:45",
      gradient: "linear-gradient(135deg, #374151 0%, #111827 100%)",
    },
    {
      id: "c3",
      title: "MVP moment",
      meta: "YouTube · 5K Views",
      platform: "YouTube",
      tag: "Highlights",
      duration: "0:58",
      gradient: "linear-gradient(135deg, #1f2937 0%, #111111 100%)",
    },
    {
      id: "c4",
      title: "Conqueror push highlights",
      meta: "YouTube · 15K Views",
      platform: "YouTube",
      tag: "BGMI",
      duration: "8:30",
      gradient: "linear-gradient(135deg, #0f172a 0%, #000000 100%)",
    },
  ],
};

export const events: EventItem[] = [
  {
    id: "e1",
    title: "Skyesports BGMI Pro Cup",
    meta: "Tomorrow, 18:00 IST · Group Stage · Squad Match",
    badge: "TOURNAMENT",
  },
];

export const matchHistory: Record<string, MatchResult[]> = {
  aniket: [
    { id: "m1", event: "ZCL Winter Wars", placement: "1st Place", badge: "1st", team: "ZARX Alpha", date: "2026", game: "Free Fire MAX" },
    { id: "m2", event: "Campus Clash", placement: "2nd Place", badge: "2nd", team: "Team XYZ", date: "2026", game: "BGMI" },
    { id: "m3", event: "Tournament XYZ", placement: "MVP", badge: "MVP", date: "2026", game: "Valorant" },
    { id: "m4", event: "Regional Open", placement: "Top 10", badge: "T10", team: "Solo", date: "2025", game: "BGMI" },
    { id: "m5", event: "Qualifier Round", placement: "3rd Place", badge: "3rd", team: "Team ABC", date: "2025", game: "COD Mobile" },
  ],
};

// ---------- Esports Club data ----------

export const orgStats: Record<string, OrgStats> = {
  zarx_esports: {
    activeTeams: 3,
    activePlayers: 14,
    openPositions: 2,
    recentApplications: 8,
  },
  zarx_gaming: {
    tournaments: 124,
    activeLeagues: 12,
    totalPlayers: "38K",
    totalPrizePools: "₹42L",
  },
};

export const clubProfileStats: Record<
  string,
  { teams: number; players: number; wins: number; achievements: number }
> = {
  zarx_esports: { teams: 12, players: 84, wins: 24, achievements: 8 },
};

export const clubTeams: Record<string, ClubTeam[]> = {
  zarx_esports: [
    {
      id: "team-bgmi",
      name: "ZARX BGMI",
      description: "Official battlegrounds division of ZARX",
      tierBadge: "BGMI Tier 1",
      playersCount: 5,
      captain: "Aniket",
      statusBadge: "CHAMPION",
      roster: [
        { id: "r1", name: "Aniket", game: "BGMI", role: "IGL", verified: true, username: "aniket", isSelf: true },
        { id: "r2", name: "Player B", game: "BGMI", role: "Assaulter", verified: true, username: "player-b" },
        { id: "r3", name: "Player C", game: "BGMI", role: "Support", verified: true, username: "player-c" },
        { id: "r4", name: "Player D", game: "BGMI", role: "Support", verified: true, username: "player-d" },
        { id: "r5", name: "Player E", game: "BGMI", role: "Fragger", verified: true, username: "player-e" },
      ],
      achievements: [
        { title: "ZCL Winter Wars 2025", result: "1st Place (Champion)" },
        { title: "India BGMI Cup 2024", result: "3rd Place" },
        { title: "Pro Showdown Series S2", result: "2nd Place" },
      ],
    },
    {
      id: "team-freefire",
      name: "ZARX Free Fire",
      description: "Official Free Fire division of ZARX",
      playersCount: 4,
      captain: "Rohit",
      roster: [
        { id: "r6", name: "Rohit", game: "Free Fire", role: "IGL", verified: true, username: "rohit" },
      ],
      achievements: [],
    },
    {
      id: "team-valorant",
      name: "ZARX Valorant",
      description: "Official Valorant division of ZARX",
      playersCount: 5,
      captain: "Priya",
      roster: [
        { id: "r7", name: "Priya", game: "Valorant", role: "Duelist", verified: true, username: "priya" },
      ],
      achievements: [],
    },
  ],
};

export const clubPlayers: Record<string, ClubPlayer[]> = {
  zarx_esports: [
    { id: "r1", name: "Aniket", game: "BGMI", role: "IGL", verified: true, username: "aniket", isSelf: true },
    { id: "r2", name: "Player B", game: "BGMI", role: "Assaulter", verified: true, username: "player-b" },
    { id: "r6", name: "Rohit", game: "Free Fire", role: "IGL", verified: true, username: "rohit" },
    { id: "r7", name: "Priya", game: "Valorant", role: "Duelist", verified: true, username: "priya" },
  ],
};

export const recruitmentOpportunities: Record<string, RecruitmentOpportunity[]> = {
  zarx_esports: [
    {
      id: "opp1",
      title: "BGMI Assaulter",
      region: "Bangalore / Remote",
      requiredRank: "Conqueror",
      experience: "2+ Yrs Tier 1",
      status: "OPEN",
      applicantsCount: 5,
    },
    {
      id: "opp2",
      title: "Valorant Duelist",
      region: "Mumbai / Hybrid",
      requiredRank: "Radiant / Imm 3",
      experience: "Hybrid Pro Roster",
      status: "OPEN",
      applicantsCount: 2,
    },
  ],
};

export const applicants: Record<string, Applicant[]> = {
  opp1: [
    { id: "app1", name: "Aarav 'Viper' Sharma", appliedFor: "Valorant Sentinel", verifiedRank: "Immortal 3", verified: false, appliedAgo: "2 hours ago" },
    { id: "app2", name: "Rohan 'Slayer' Sen", appliedFor: "BGMI Assaulter", verifiedRank: "Ace Master", verified: false, appliedAgo: "5 hours ago" },
    { id: "app3", name: "Kabir 'Ghost' Verma", appliedFor: "BGMI Assaulter", verifiedRank: "Ace Dominator", verified: false, appliedAgo: "1 day ago" },
    { id: "app4", name: "Nisha 'Nova' Roy", appliedFor: "Valorant Sentinel", verifiedRank: "Immortal 1", verified: false, appliedAgo: "2 days ago" },
  ],
  opp2: [
    { id: "app5", name: "Dev 'Kratos' Dutt", appliedFor: "BGMI Assaulter", verifiedRank: "Conqueror", verified: true, appliedAgo: "3 hours ago" },
    { id: "app6", name: "Arjun 'Ghost' Nair", appliedFor: "BGMI Assaulter", verifiedRank: "Ace Master", verified: false, appliedAgo: "1 day ago" },
    { id: "app7", name: "Kunal 'Viper' Roy", appliedFor: "BGMI Assaulter", verifiedRank: "Conqueror", verified: true, appliedAgo: "2 days ago" },
  ],
};

export const recentTrialApplications: Record<string, Applicant[]> = {
  zarx_esports: [
    {
      id: "trial1",
      name: "Viper_99",
      appliedFor: "BGMI Assaulter",
      verifiedRank: "Conqueror (4.9 K/D)",
      verified: true,
      appliedAgo: "3 hours ago",
      vaultScore: "98/100",
      status: "Trial Scheduled",
    },
    {
      id: "trial2",
      name: "GhostRider_X",
      appliedFor: "Valorant Duelist",
      verifiedRank: "Radiant #412",
      verified: true,
      appliedAgo: "1 day ago",
      vaultScore: "95/100",
      status: "New",
    },
  ],
};

export const clubContent: Record<string, ContentPost[]> = {
  zarx_esports: [
    { id: "cc1", title: "BGMI Grand Finals Clutch Decider", category: "Match Highlight", date: "Feb 2026" },
    { id: "cc2", title: "ZARX BGMI Roster Reveal 2026", category: "Team Announcement", date: "Jan 2026" },
    { id: "cc3", title: "ZCL Trophy Lifting Ceremony", category: "Trophy Showcase", date: "Jan 2026" },
    { id: "cc4", title: "Priya 1v4 Valorant Clutch Clip", category: "Clutch Moment", date: "Dec 2025" },
    { id: "cc5", title: "Inside ZARX Bootcamp: Day in the Life", category: "Bootcamp BTS", date: "Nov 2025" },
    { id: "cc6", title: "2026 Season Official Teaser", category: "Tournament Teaser", date: "Oct 2025" },
  ],
};

// ---------- League Organizer data ----------

export const leagues: Record<string, League[]> = {
  zarx_gaming: [
    {
      id: "league-champions",
      slug: "zarx-champions-league",
      name: "ZARX Champions League",
      badges: ["MULTI-GAME", "ACTIVE SEASON"],
      description:
        "The signature tournament road managed directly by ZARX Esports. Multi-game framework featuring active competition tables in Free Fire, BGMI, and Valorant, linked to VAULT global brackets.",
      establishedYear: "2026",
      prizePool: "₹5,00,000",
      teamsCount: 24,
      verifiedStats: true,
      status: "ACTIVE_SEASON",
      tournamentIds: ["t-winterwars", "t-campuscup"],
      proInvites: "8 Teams",
      openQualifiers: "16 Spots",
      requiredLevel: "VAULT Tier 3+",
    },
    {
      id: "league-regional",
      slug: "zarx-regional-series",
      name: "ZARX Regional Series",
      badges: ["BATTLEGROUNDS MOBILE INDIA (BGMI)"],
      description:
        "Regional grass-roots series connecting tier-2 college squads with top-tier recognition pipelines. Play in your region, rise to national levels.",
      establishedYear: "2026",
      prizePool: "₹2,50,000",
      teamsCount: 128,
      verifiedStats: false,
      status: "ACTIVE",
      tournamentIds: [],
      proInvites: "-",
      openQualifiers: "128 Registered",
      requiredLevel: "Open",
    },
  ],
};

export const tournaments: Record<string, Tournament[]> = {
  zarx_gaming: [
    {
      id: "t-winterwars",
      slug: "zcl-winter-wars",
      name: "ZCL Winter Wars",
      game: "Free Fire MAX",
      status: "REGISTRATION_OPEN",
      prizePool: "₹1,50,000",
      date: "Jan 2026",
      teamsRegistered: 48,
      teamsMax: 128,
      leagueId: "league-champions",
    },
    {
      id: "t-valorantseries",
      slug: "zarx-valorant-series",
      name: "ZARX Valorant Series",
      game: "Valorant",
      status: "UPCOMING",
      prizePool: "₹1,00,000",
      date: "Feb 2026",
      teamsRegistered: 12,
      teamsMax: 256,
    },
    {
      id: "t-campuscup",
      slug: "zarx-campus-cup",
      name: "ZARX Campus Cup",
      game: "BGMI",
      status: "COMPLETED",
      prizePool: "₹50,000",
      date: "Jan 2026",
      teamsRegistered: 128,
      teamsMax: 128,
      leagueId: "league-champions",
    },
  ],
};

export const tournamentResults: Record<string, TournamentResult[]> = {
  zarx_gaming: [
    {
      tournamentId: "t-winterwars",
      tournamentName: "ZCL Winter Wars (2026 Edition)",
      participants: 2400,
      verified: true,
      champion: "Team XYZ",
      runnerUp: "Team ABC",
    },
    {
      tournamentId: "t-campuscup",
      tournamentName: "ZARX Campus Cup (2026 Edition)",
      participants: 1200,
      verified: true,
      champion: "ZARX BGMI",
      runnerUp: "Team DEF",
    },
  ],
};

export const organizerContent: Record<string, ContentPost[]> = {
  zarx_gaming: [
    { id: "oc1", title: "ZCL Winter Wars Registration starts this Friday!", category: "ANNOUNCEMENT", date: "Nov 12, 2024" },
    { id: "oc2", title: "ZARX Campus Cup 2024 — Grand Finale highlights", category: "HIGHLIGHTS", date: "Oct 28, 2024" },
    { id: "oc3", title: "Announcing BGMI Pro League Season 4 schedules", category: "LEAGUE UPDATE", date: "Oct 15, 2024" },
    { id: "oc4", title: "Partner Showcase: Red Bull Gaming x VAULT gaming keys", category: "PROMO POSTER", date: "Sep 30, 2024" },
  ],
};

export const platformActivity: Record<string, PlatformActivity[]> = {
  zarx_gaming: [
    { id: "pa1", text: "Team Hydra registered for ZCL Winter Wars", timeAgo: "2 mins ago" },
    { id: "pa2", text: "₹1,50,000 prize claimed by Team Soul", timeAgo: "1 hour ago" },
    { id: "pa3", text: "CS2 Showdown rules update published", timeAgo: "3 hours ago" },
    { id: "pa4", text: "Verified Badge renewed by VAULT staff", timeAgo: "Yesterday" },
  ],
};

// ---------- Discover / search ----------

export const discoverTournaments: DiscoverTournament[] = [
  {
    id: "dt1",
    name: "ZCL Winter Wars",
    game: "FREE FIRE MAX",
    status: "REGISTRATION_OPEN",
    prizePool: "₹1,50,000",
    organizerName: "ZARX GAMING",
    organizerVerified: true,
    region: "India",
  },
  {
    id: "dt2",
    name: "BGMI Pro Series",
    game: "BGMI",
    status: "UPCOMING",
    prizePool: "₹2,00,000",
    organizerName: "ESPORTS HUB",
    organizerVerified: true,
    region: "India",
  },
  {
    id: "dt3",
    name: "Valorant Clash",
    game: "VALORANT",
    status: "UPCOMING",
    prizePool: "₹75,000",
    organizerName: "ACTION GAMES",
    organizerVerified: false,
    region: "India",
  },
  {
    id: "dt4",
    name: "CODM Masters Cold War",
    game: "COD MOBILE",
    status: "REGISTRATION_OPEN",
    prizePool: "₹1,00,000",
    organizerName: "MOBILE CLANS",
    organizerVerified: false,
    region: "India",
  },
];

export const communities: Community[] = [
  {
    id: "com1",
    slug: "free-fire-india",
    name: "Free Fire India",
    memberCount: "24.8K Members",
    description:
      "The largest hub for active Free Fire players in India. Daily custom rooms, scrims, and friendly chat.",
    tags: ["FREE FIRE MAX", "India Regional"],
  },
  {
    id: "com2",
    slug: "bgmi-competitive",
    name: "BGMI Competitive",
    memberCount: "18.2K Members",
    description:
      "Focusing strictly on T1/T2 scrims, strategy discussions, and finding teammates for major events.",
    tags: ["BGMI", "Scrims & Tourneys"],
  },
  {
    id: "com3",
    slug: "valorant-india",
    name: "Valorant India",
    memberCount: "12.5K Members",
    description:
      "LFG channel for Radiant grind, local tournaments, highlights sharing, and active voice chats.",
    tags: ["VALORANT", "Tactical & LFG"],
  },
  {
    id: "com4",
    slug: "cod-mobile-regiment",
    name: "COD Mobile Regiment",
    memberCount: "9.1K Members",
    description:
      "Ranked multiplayer grind, tournament alerts, weapon loadout optimization, and friendly scrims.",
    tags: ["COD MOBILE", "Clans & Ranked"],
  },
];

export const recentlyViewed: RecentlyViewedEntry[] = [
  { id: "rv1", label: "Viper Gaming @viper_esports" },
  { id: "rv2", label: "ZCL Winter Wars (Tournament)" },
  { id: "rv3", label: "GodLike Esports @godlike" },
];

export const recommendedForYou = ["zacksharma", "raptor_gaming"];
export const popularInRegion = ["aniketsoul", "naman_mortal"];
export const trendingTournamentIds = ["dt1", "dt2"];

export const followersList: NetworkEntry[] = [
  { id: "f1", profileId: "aniketsoul", relationship: "following" },
  { id: "f2", profileId: "zarx_esports", relationship: "following" },
  { id: "f3", profileId: "playerx", relationship: "follow_back" },
  { id: "f4", profileId: "raptor_gaming", relationship: "following" },
  { id: "f5", profileId: "s8ulesports", relationship: "following" },
  { id: "f6", profileId: "hydra_gaming", relationship: "follow_back" },
];

export const followingList: NetworkEntry[] = [
  { id: "g1", profileId: "aniketsoul", relationship: "following" },
  { id: "g2", profileId: "zarx_esports", relationship: "following" },
  { id: "g3", profileId: "rohit_pro", relationship: "following" },
  { id: "g4", profileId: "godlike", relationship: "following" },
  { id: "g5", profileId: "zarx_gaming", relationship: "following" },
];

export const connectionsList: NetworkEntry[] = [
  { id: "c1", profileId: "aniketsoul", relationship: "connected" },
  { id: "c2", profileId: "zarx_esports", relationship: "connected" },
  { id: "c3", profileId: "rohit_pro", relationship: "connected" },
  { id: "c4", profileId: "s8ulesports", relationship: "connected" },
  { id: "c5", profileId: "naman_mortal", relationship: "connected" },
  { id: "c6", profileId: "hydra_gaming", relationship: "connected" },
];

export function getProfileById(id: string): Profile | undefined {
  return profiles.find((p) => p.id === id || p.username === id);
}

// ---------- Creator Zone ----------

export const creatorPosts: CreatorPost[] = [
  {
    id: "cp1",
    creatorUsername: "aniket",
    game: "BGMI",
    mediaType: "video",
    overlayLabel: "CONQUEROR LOBBY",
    coverGradient: "radial-gradient(circle at 30% 30%, #7c2d12, #1c1917 75%)",
    caption: "32-kill ranked game — Conqueror lobby highlights and final circle execution",
    likes: "1.2K",
    commentCount: 84,
    isFeatured: true,
    profileFeatured: true,
    comments: [
      { id: "cm1", authorUsername: "aniketsoul", text: "Insane sprays in that 3rd sector!" },
      { id: "cm2", authorUsername: "playerx", text: "Cleanest lobby clear ive seen today." },
      { id: "cm3", authorUsername: "raptor_gaming", text: "What sensitivity settings do you play on?" },
    ],
  },
  {
    id: "cp2",
    creatorUsername: "zarx_esports",
    game: "VALORANT",
    mediaType: "video",
    overlayLabel: "AURORA ROSTER",
    coverGradient: "radial-gradient(circle at 60% 40%, #4c1d95, #1e1b4b 75%)",
    caption: "New roster announcement for the upcoming winter split tournament",
    likes: "920",
    commentCount: 41,
    isFeatured: true,
    comments: [
      { id: "cm4", authorUsername: "aniket", text: "Loaded roster, good luck this split!" },
    ],
  },
  {
    id: "cp3",
    creatorUsername: "phoenix",
    game: "Free Fire",
    mediaType: "video",
    overlayLabel: "BOOYAH!",
    coverGradient: "radial-gradient(circle at 50% 60%, #7c2d12, #ea580c 20%, #1c1917 75%)",
    caption: "Tournament clutch moment - final circle team wipeout",
    likes: "2.4K",
    commentCount: 156,
    isFeatured: true,
    comments: [],
  },
  {
    id: "cp4",
    creatorUsername: "aniket",
    game: "BGMI",
    mediaType: "video",
    coverGradient: "radial-gradient(circle at 40% 30%, #7c2d12, #1c1917 75%)",
    caption: "Conqueror lobby match highlight showcase",
    likes: "1.2K",
    commentCount: 84,
    isFeatured: true,
    comments: [],
  },
  {
    id: "cp4b",
    creatorUsername: "zarx_esports",
    game: "Free Fire",
    mediaType: "image",
    coverGradient: "radial-gradient(circle at 50% 50%, #b91c1c, #1c1917 75%)",
    caption: "Free Fire team announcement image post",
    likes: "710",
    commentCount: 19,
    isFeatured: true,
    comments: [],
  },
  {
    id: "cp5",
    creatorUsername: "nova",
    game: "VALORANT",
    mediaType: "clip",
    overlayLabel: "MATCH POINT",
    coverGradient: "radial-gradient(circle at 40% 40%, #a21caf, #1e1b4b 75%)",
    caption: "Ranked match highlight gameplay clip",
    likes: "1.8K",
    commentCount: 92,
    isFeatured: true,
    comments: [],
  },
  {
    id: "cp6",
    creatorUsername: "aniket",
    game: "BGMI",
    mediaType: "image",
    coverGradient: "linear-gradient(135deg, #e5e7eb, #d1d5db)",
    caption: "Weapon Tier List Guide",
    likes: "482",
    commentCount: 12,
    profileFeatured: true,
    comments: [],
  },
  {
    id: "cp7",
    creatorUsername: "aniket",
    game: "BGMI",
    mediaType: "video",
    coverGradient: "radial-gradient(circle at 50% 50%, #0891b2, #1e1b4b 75%)",
    caption: "Final Circle Strategy Breakdown",
    likes: "356",
    commentCount: 8,
    profileFeatured: true,
    comments: [],
  },
  {
    id: "cp8",
    creatorUsername: "aniket",
    game: "BGMI",
    mediaType: "video",
    coverGradient: "radial-gradient(circle at 30% 70%, #075985, #0c0a09 75%)",
    caption: "Sniper Training Routine",
    likes: "241",
    commentCount: 5,
    comments: [],
  },
  {
    id: "cp9",
    creatorUsername: "aniket",
    game: "BGMI",
    mediaType: "image",
    coverGradient: "linear-gradient(135deg, #e5e7eb, #d1d5db)",
    caption: "Esports Setup Showcase",
    likes: "198",
    commentCount: 3,
    comments: [],
  },
  {
    id: "cp10",
    creatorUsername: "sayyara",
    game: "BGMI",
    mediaType: "video",
    coverGradient: "radial-gradient(circle at 60% 40%, #1e3a8a, #0c0a09 75%)",
    caption: "New Zone Strategy",
    likes: "530",
    commentCount: 22,
    comments: [],
  },
  {
    id: "cp11",
    creatorUsername: "hydra_gaming",
    game: "BGMI",
    mediaType: "video",
    coverGradient: "radial-gradient(circle at 40% 60%, #7c2d12, #0c0a09 75%)",
    caption: "Clutch IGL Callouts",
    likes: "610",
    commentCount: 30,
    comments: [],
  },
  {
    id: "cp12",
    creatorUsername: "nova",
    game: "VALORANT",
    mediaType: "clip",
    overlayLabel: "SPIKE DEFUSED",
    coverGradient: "radial-gradient(circle at 50% 40%, #0e7490, #0c0a09 75%)",
    caption: "Icebox Ace Defuse",
    likes: "1.4K",
    commentCount: 63,
    comments: [],
  },
  {
    id: "cp13",
    creatorUsername: "hyper",
    game: "VALORANT",
    mediaType: "clip",
    coverGradient: "radial-gradient(circle at 50% 50%, #4c1d95, #0c0a09 75%)",
    caption: "Valorant Clutch Radiants",
    likes: "870",
    commentCount: 34,
    comments: [],
  },
];

export function getCreatorPostById(id: string): CreatorPost | undefined {
  return creatorPosts.find((p) => p.id === id);
}

export const trendingGroups: TrendingGroup[] = [
  {
    game: "BGMI",
    heading: "BGMI Trending Highlights",
    postIds: ["cp1", "cp10", "cp11"],
  },
  {
    game: "VALORANT",
    heading: "Valorant Trending Content",
    postIds: ["cp12", "cp2", "cp13"],
  },
];

export const trendingViewCounts: Record<string, string> = {
  cp1: "1.2K views",
  cp10: "942 views",
  cp11: "1.5K views",
  cp12: "3.1K views",
  cp2: "840 views",
  cp13: "1.1K views",
};

export const creatorDirectory: CreatorDirectoryEntry[] = [
  { username: "aniket", creatorTitle: "Gaming Creator", gamePosition: "BGMI · IGL", followers: "1.2K" },
  { username: "sayyara", creatorTitle: "Esports Pro", gamePosition: "VALORANT · Duelist", followers: "4.8K" },
  { username: "viper_fps", creatorTitle: "Streamer", gamePosition: "BGMI · Assaulter", followers: "8.2K" },
  { username: "gamerx", creatorTitle: "Analyst", gamePosition: "FREE FIRE · Leader", followers: "920" },
  { username: "zed_clutch", creatorTitle: "Gaming Creator", gamePosition: "VALORANT · Sentinel", followers: "2.1K" },
  { username: "alphaqueen", creatorTitle: "Verified Pro", gamePosition: "COD MOBILE · Sniper", followers: "15.4K" },
];

export const trendingCreatorGames = ["BGMI", "VALORANT", "FREE FIRE", "COD MOBILE"];

// ---------- Tournaments Hub ----------

export const myGames: GameConnection[] = [
  { name: "BGMI", status: "active", subtitle: "In Season · Conqueror" },
  { name: "VALORANT", status: "connected", subtitle: "Rank: Radiant" },
  { name: "Free Fire MAX", status: "connected", subtitle: "Registered · Squad Ready" },
];

export const hubTournaments: HubTournament[] = [
  {
    id: "ht1",
    slug: "zcl-winter-invitational-2026",
    game: "BGMI",
    status: "REGISTRATION_OPEN",
    title: "ZCL Winter Invitational 2026",
    organizerName: "ZARX ESPORTS",
    organizerVerified: true,
    prizePool: "₹1,50,000",
    description:
      "The ZCL Winter Invitational 2026 brings together the tier-1 competitive BGMI squads across the subcontinent. Featuring 64 verified teams battling across 4 intensive qualifier and final stages with Krafton API anti-cheat verification.",
    dateTime: "Jan 29, 2026 / 18:00 IST",
    matchFormat: "BGMI · Squad Battle Royale (4v4)",
    maxParticipants: "48 / 64 Teams Registered",
    registrationDeadline: "Closing in 24 Hours",
    prizeBreakdown: [
      { label: "1st Place (Champion)", amount: "₹75,000" },
      { label: "2nd Place (Runner-up)", amount: "₹40,000" },
      { label: "3rd Place", amount: "₹20,000" },
      { label: "Tournament MVP Award", amount: "₹15,000" },
    ],
    eligibility: [
      "All 4 squad players must hold a verified VAULT Gamer ID.",
      "Minimum in-game level 40 with Conqueror or Ace tier rank in current or preceding season.",
      "Mobile hand-held devices only (iPads, tablets, emulators strictly prohibited).",
    ],
    rules: [
      {
        title: "1. General Tournament Rules & Player Conduct",
        description:
          "All participating teams must adhere to high standards of sportsmanship. Toxic behavior, stream sniping, harassment, or teaming will result in immediate disqualification and a permanent platform ban.",
      },
      {
        title: "2. Device & Hardware Restrictions",
        description:
          "Mobile smartphones only. iPads, Android tablets, triggers, Bluetooth controllers, and PC emulators (BlueStacks, Gameloop) are strictly forbidden and flagged via hardware telemetry.",
      },
      {
        title: "3. Official Point System & Placement Scoring",
        description:
          "Standard 10-point system: 1st Place = 10 pts, 2nd = 6 pts, 3rd = 5 pts, 4th = 4 pts, 5th = 3 pts, 6th = 2 pts, 7th-8th = 1 pt. Each verified kill awards +1 point.",
      },
      {
        title: "4. Anti-Cheat & Live Telemetry Verification",
        description:
          "Match results are directly synchronized via Krafton Official API webhook. All players are required to keep in-game telemetry enabled throughout all official custom rooms.",
      },
      {
        title: "5. Roster Locks & Substitution Policies",
        description:
          "Rosters are locked 2 hours prior to the first qualifier match. Each squad may register up to 1 official substitute who must meet all verification criteria.",
      },
      {
        title: "6. Disqualification & Dispute Resolution",
        description:
          "Any match disputes must be filed within 15 minutes of match conclusion along with POV recording proofs via the VAULT Referee portal.",
      },
    ],
    scheduleStages: [
      { date: "Jan 15 – Jan 18", title: "Phase 1: Open Qualifiers", description: "64 registered squads compete across 4 groups. Top 8 from each group advance." },
      { date: "Jan 20 – Jan 22", title: "Phase 2: Quarter Finals", description: "Top 32 teams battle in 6 custom matches on Erangel and Miramar." },
      { date: "Jan 24 – Jan 25", title: "Phase 3: Semi Finals", description: "Top 24 squads play in round-robin format. Top 16 qualify for Grand Finals." },
      { date: "Jan 28 – Jan 29", title: "Phase 4: Grand Finals (Live Streamed)", description: "Final 16 teams play 12 high-stakes matches for the championship trophy and ₹1,50,000 prize pool.", isCurrent: true },
    ],
    squadsRegistered: 48,
    squads: [
      { name: "Team Soul", verified: false, playerCount: "4 Members · Squad Ready", statusTag: "CONFIRMED" },
      { name: "GodLike Esports", verified: false, playerCount: "4 Members · Squad Ready", statusTag: "CONFIRMED" },
      { name: "ZARX Esports Pro", verified: true, playerCount: "4 Members (IGL: ANIKET)", statusTag: "CONFIRMED" },
      { name: "Hydra Official", verified: false, playerCount: "4 Members · Squad Ready", statusTag: "CONFIRMED" },
    ],
    podium: [
      { place: "2", placeLabel: "Runner Up (2nd)", teamName: "GodLike Esports", verified: false, prize: "₹40,000" },
      { place: "1", placeLabel: "Champion (1st)", teamName: "ZARX Esports Pro", verified: true, prize: "₹75,000", highlighted: true },
      { place: "3", placeLabel: "3rd Place", teamName: "Team Soul", verified: false, prize: "₹20,000" },
    ],
    mvp: { name: "ANIKET", verified: true, eliminations: "48 Kills", avgSurvival: "12,400 DMG · 8.4 KD" },
  },
  {
    id: "ht2",
    slug: "skyesports-masters-2026",
    game: "VALORANT",
    status: "REGISTRATION_OPEN",
    title: "Skyesports Masters 2026",
    organizerName: "SKYESPORTS",
    organizerVerified: true,
    prizePool: "₹25,00,000",
    description:
      "Skyesports Masters 2026 is South Asia's premiere VALORANT league, bringing together the region's top organizations for a multi-stage championship.",
    dateTime: "Feb 12, 2026 / 19:00 IST",
    matchFormat: "VALORANT · 5v5 Elimination",
    maxParticipants: "32 / 32 Teams Registered",
    registrationDeadline: "Registration Open",
    prizeBreakdown: [
      { label: "1st Place (Champion)", amount: "₹12,00,000" },
      { label: "2nd Place (Runner-up)", amount: "₹6,00,000" },
      { label: "3rd Place", amount: "₹3,00,000" },
    ],
    eligibility: [
      "All 5 roster players must hold a verified VAULT Gamer ID.",
      "Minimum Immortal 3 rank in the current episode.",
    ],
    rules: [
      { title: "1. Eligibility & Registration", description: "All players must register with a verified VAULT ID linked to their Riot account." },
      { title: "2. Tournament Format", description: "Group stage into single elimination playoffs, best of 3 grand finals." },
    ],
    scheduleStages: [
      { date: "Feb 5, 2026", title: "Registration Closes", description: "Roster compositions locked and verified." },
      { date: "Feb 12, 2026", title: "Grand Final", description: "Live broadcasted finals.", isCurrent: true },
    ],
    squadsRegistered: 32,
    squads: [],
    podium: [],
  },
  {
    id: "ht3",
    slug: "phoenix-survival-cup-2026",
    game: "FREE FIRE",
    status: "REGISTRATION_OPEN",
    title: "Phoenix Survival Cup 2026",
    organizerName: "PHOENIX",
    organizerVerified: true,
    prizePool: "₹50,000",
    description:
      "Phoenix hosts a fast-paced monthly cup for rising Free Fire talent, with a group stage into single elimination playoffs.",
    dateTime: "Feb 20, 2026 / 17:00 IST",
    matchFormat: "Free Fire · Squad Battle Royale",
    maxParticipants: "12 / 32 Teams Registered",
    registrationDeadline: "Registration Open",
    prizeBreakdown: [
      { label: "1st Place (Champion)", amount: "₹25,000" },
      { label: "2nd Place (Runner-up)", amount: "₹15,000" },
      { label: "3rd Place", amount: "₹10,000" },
    ],
    eligibility: ["Verified VAULT identity card linked to gamer profile."],
    rules: [
      { title: "1. Eligibility & Registration", description: "All players must register with a verified VAULT ID." },
    ],
    scheduleStages: [
      { date: "Feb 20, 2026", title: "Grand Final", description: "Live broadcasted finals.", isCurrent: true },
    ],
    squadsRegistered: 12,
    squads: [],
    podium: [],
  },
  {
    id: "ht4",
    slug: "esl-india-premiership",
    game: "BGMI",
    status: "REGISTRATION_OPEN",
    title: "ESL India Premiership",
    organizerName: "ESL Gaming",
    organizerVerified: true,
    prizePool: "₹10,00,000",
    description: "ESL Gaming's flagship national invitational for tier-1 BGMI organizations.",
    dateTime: "Mar 1, 2026 / 18:00 IST",
    matchFormat: "BGMI · Squad Battle Royale (4v4)",
    maxParticipants: "24 / 24 Teams Registered",
    registrationDeadline: "Registration Open",
    prizeBreakdown: [{ label: "1st Place (Champion)", amount: "₹4,00,000" }],
    eligibility: ["Verified VAULT identity card linked to gamer profile."],
    rules: [],
    scheduleStages: [],
    squadsRegistered: 24,
    squads: [],
    podium: [],
  },
  {
    id: "ht5",
    slug: "nodwin-valorant-challengers",
    game: "VALORANT",
    status: "REGISTRATION_OPEN",
    title: "NODWIN Valorant Challengers",
    organizerName: "NODWIN Gaming",
    organizerVerified: true,
    prizePool: "₹5,00,000",
    description: "NODWIN Gaming's open challenger circuit for rising VALORANT talent.",
    dateTime: "Mar 10, 2026 / 19:00 IST",
    matchFormat: "VALORANT · 5v5 Elimination",
    maxParticipants: "16 / 16 Teams Registered",
    registrationDeadline: "Registration Open",
    prizeBreakdown: [{ label: "1st Place (Champion)", amount: "₹2,00,000" }],
    eligibility: ["Verified VAULT identity card linked to gamer profile."],
    rules: [],
    scheduleStages: [],
    squadsRegistered: 16,
    squads: [],
    podium: [],
  },
  {
    id: "ht6",
    slug: "bgmi-campus-championship",
    game: "BGMI",
    status: "REGISTRATION_OPEN",
    title: "BGMI Campus Championship",
    organizerName: "Krafton Official",
    organizerVerified: true,
    prizePool: "₹2,50,000",
    description: "Krafton Official's nationwide campus championship for college BGMI squads.",
    dateTime: "Mar 20, 2026 / 18:00 IST",
    matchFormat: "BGMI · Squad Battle Royale (4v4)",
    maxParticipants: "128 / 128 Teams Registered",
    registrationDeadline: "Registration Open",
    prizeBreakdown: [{ label: "1st Place (Champion)", amount: "₹1,00,000" }],
    eligibility: ["Verified VAULT identity card linked to gamer profile."],
    rules: [],
    scheduleStages: [],
    squadsRegistered: 128,
    squads: [],
    podium: [],
  },
  {
    id: "ht7",
    slug: "zcl-pre-season-wars",
    game: "FREE FIRE MAX",
    status: "REGISTRATION_CLOSED",
    title: "ZCL PRE-SEASON WARS",
    organizerName: "ZARX GAMING",
    organizerVerified: true,
    prizePool: "₹50,000",
    description: "The pre-season warm-up event ahead of ZCL Winter Wars.",
    dateTime: "Jul 10, 2026 / 18:00 IST",
    matchFormat: "Online Battle Royale",
    maxParticipants: "800 squads maximum",
    registrationDeadline: "Jul 8, 2026 / 23:59 IST",
    prizeBreakdown: [{ label: "1st Place (Champion)", amount: "₹25,000" }],
    eligibility: ["Verified VAULT identity card linked to gamer profile."],
    rules: [],
    scheduleStages: [],
    squadsRegistered: 0,
    squads: [],
    podium: [],
  },
];

export function getHubTournamentBySlug(slug: string): HubTournament | undefined {
  return hubTournaments.find((t) => t.slug === slug);
}

export const upcomingTournamentIds = ["ht1", "ht2", "ht3"];
export const popularTournamentIds = ["ht4", "ht5"];
export const recentlyAddedTournamentIds = ["ht6"];

export const myTournamentRegistrations = [
  {
    id: "reg1",
    tournamentId: "ht1",
    status: "Registration Confirmed",
    startLabel: "Starts Aug 25, 2026",
    registeredTeam: "ZARX Alpha",
    stage: "upcoming" as const,
  },
];

export const myTournamentHistory = [
  {
    id: "hist1",
    game: "VALORANT",
    name: "CAMPUS CLASH S2",
    placement: "2nd Place (Runner-up)",
    completedLabel: "Completed July 12, 2026",
    prizeWon: "₹45,000",
  },
];

// ---------- Static export params (used by generateStaticParams) ----------

export function getAllUsernames(): { username: string }[] {
  return profiles.map((p) => ({ username: p.username }));
}

export function getOwnedDashboardUsernames(): { username: string }[] {
  return ownedUsernames
    .filter((username) => getProfileByUsername(username)?.type !== "GAMER")
    .map((username) => ({ username }));
}

export function getGameSlugParams(): { username: string; gameSlug: string }[] {
  return Object.entries(gamePassports).flatMap(([username, passports]) =>
    passports.map((g) => ({ username, gameSlug: g.gameSlug }))
  );
}

export function getTeamParams(): { username: string; teamId: string }[] {
  return Object.entries(clubTeams).flatMap(([username, teamList]) =>
    teamList.map((t) => ({ username, teamId: t.id }))
  );
}

export function getLeagueParams(): { username: string; leagueId: string }[] {
  return Object.entries(leagues).flatMap(([username, leagueList]) =>
    leagueList.map((l) => ({ username, leagueId: l.slug }))
  );
}

export function getTournamentSlugParams(): { slug: string }[] {
  return hubTournaments.map((t) => ({ slug: t.slug }));
}

export function getContentIdParams(): { id: string }[] {
  return creatorPosts.map((p) => ({ id: p.id }));
}
