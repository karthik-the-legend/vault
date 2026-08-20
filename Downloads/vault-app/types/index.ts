export type AccountType = "GAMER" | "ESPORTS_CLUB" | "ORGANIZER";

export interface StatEntry {
  label: string;
  value: string;
}

export interface Profile {
  id: string;
  username: string;
  displayName: string;
  type: AccountType;
  typeLabel: string;
  avatarUrl?: string;
  avatarGradient?: string;
  verified: boolean;
  country?: string;
  countryFlag?: string;
  bio: string;
  shortTag: string;
  followers?: string;
  following?: string;
  isPrivate?: boolean;
  stats: StatEntry[];
  tags: string[];
  youtubeUrl?: string;
  twitchUrl?: string;
}

export interface GameDef {
  id: string;
  slug: string;
  name: string;
  color: string;
  letter: string;
}

export interface GamePassport {
  gameSlug: string;
  gameName: string;
  ign: string;
  rank: string;
  role: string;
  verifiedDate: string;
  verified: boolean;
  isPrimary?: boolean;
  stats: {
    uid: string;
    level: number;
    kdRatio: string;
    matches: number;
    wins: number;
    season: string;
  };
  verificationSource: string;
}

export interface Team {
  id: string;
  name: string;
  status: string;
  league: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
}

export interface ContentItem {
  id: string;
  title: string;
  meta: string;
  platform: string;
}

export interface EventItem {
  id: string;
  title: string;
  meta: string;
  badge: string;
}

export interface MatchResult {
  id: string;
  event: string;
  placement: string;
  date: string;
  game: string;
}

export interface ClubPlayer {
  id: string;
  name: string;
  game: string;
  role: string;
  verified: boolean;
  username: string;
  isSelf?: boolean;
}

export interface ClubTeam {
  id: string;
  name: string;
  description: string;
  tierBadge?: string;
  playersCount: number;
  captain: string;
  statusBadge?: string;
  roster: ClubPlayer[];
  achievements: { title: string; result: string }[];
}

export interface RecruitmentOpportunity {
  id: string;
  title: string;
  region: string;
  requiredRank: string;
  experience: string;
  status: string;
  applicantsCount: number;
}

export interface Applicant {
  id: string;
  name: string;
  appliedFor: string;
  verifiedRank: string;
  verified: boolean;
  appliedAgo: string;
}

export interface ContentPost {
  id: string;
  title: string;
  category: string;
  date: string;
}

export interface League {
  id: string;
  slug: string;
  name: string;
  badges: string[];
  description: string;
  establishedYear: string;
  prizePool: string;
  teamsCount: number;
  verifiedStats: boolean;
  status: string;
  tournamentIds: string[];
  proInvites: string;
  openQualifiers: string;
  requiredLevel: string;
}

export type TournamentStatus =
  | "REGISTRATION_OPEN"
  | "UPCOMING"
  | "COMPLETED"
  | "DRAFT";

export interface Tournament {
  id: string;
  slug: string;
  name: string;
  game: string;
  status: TournamentStatus;
  prizePool: string;
  date: string;
  teamsRegistered: number;
  teamsMax: number;
  leagueId?: string;
}

export interface TournamentResult {
  tournamentId: string;
  tournamentName: string;
  participants: number;
  verified: boolean;
  champion: string;
  runnerUp: string;
}

export interface PlatformActivity {
  id: string;
  text: string;
  timeAgo: string;
}

export interface DiscoverTournament {
  id: string;
  name: string;
  game: string;
  status: TournamentStatus;
  prizePool: string;
  organizerName: string;
  organizerVerified: boolean;
  region: string;
}

export interface Community {
  id: string;
  slug: string;
  name: string;
  memberCount: string;
  description: string;
  tags: string[];
}

export type RelationshipState = "following" | "follow_back" | "connected";

export interface NetworkEntry {
  id: string;
  profileId: string;
  relationship: RelationshipState;
}

export interface RecentlyViewedEntry {
  id: string;
  label: string;
}

export type HubTournamentStatus =
  | "REGISTRATION_OPEN"
  | "REGISTRATION_CLOSED"
  | "ONGOING"
  | "COMPLETED";

export interface PrizeBreakdownRow {
  label: string;
  amount: string;
}

export interface RuleSection {
  title: string;
  description: string;
}

export interface ScheduleStage {
  date: string;
  title: string;
  description: string;
  isCurrent?: boolean;
}

export interface RegisteredSquad {
  name: string;
  verified: boolean;
  playerCount: string;
  statusTag?: string;
}

export interface PodiumEntry {
  place: string;
  placeLabel: string;
  teamName: string;
  verified: boolean;
  prize: string;
  highlighted?: boolean;
}

export interface TournamentMvp {
  name: string;
  verified: boolean;
  eliminations: string;
  avgSurvival: string;
}

export interface HubTournament {
  id: string;
  slug: string;
  game: string;
  status: HubTournamentStatus;
  title: string;
  organizerName: string;
  organizerVerified: boolean;
  prizePool: string;
  description: string;
  dateTime: string;
  matchFormat: string;
  maxParticipants: string;
  registrationDeadline: string;
  prizeBreakdown: PrizeBreakdownRow[];
  eligibility: string[];
  rules: RuleSection[];
  scheduleStages: ScheduleStage[];
  squadsRegistered: number;
  squads: RegisteredSquad[];
  podium: PodiumEntry[];
  mvp?: TournamentMvp;
}

export interface GameConnection {
  name: string;
  status: "active" | "connected" | "none";
}

export type ContentMediaType = "video" | "clip" | "image";

export interface Comment {
  id: string;
  authorUsername: string;
  text: string;
}

export interface CreatorPost {
  id: string;
  creatorUsername: string;
  game: string;
  mediaType: ContentMediaType;
  overlayLabel?: string;
  coverGradient: string;
  caption: string;
  likes: string;
  commentCount: number;
  isFeatured?: boolean;
  comments: Comment[];
}

export interface TrendingGroup {
  game: string;
  heading: string;
  postIds: string[];
}

export interface CreatorDirectoryEntry {
  username: string;
  creatorTitle: string;
  gamePosition: string;
  followers: string;
}

export interface OrgStats {
  activeTeams?: number;
  activePlayers?: number;
  openPositions?: number;
  recentApplications?: number;
  tournaments?: number;
  activeLeagues?: number;
  totalPlayers?: string;
  totalPrizePools?: string;
}

export type RoleOption =
  | "IGL"
  | "Entry Fragger"
  | "Support"
  | "Sniper"
  | "Duelist"
  | "Controller"
  | "Initiator"
  | "Sentinel"
  | "Flex"
  | "Coach"
  | "Creator"
  | "Other";
