export const gameVisuals: Record<string, { bg: string; fg: string; short: string }> = {
  bgmi: { bg: "#111111", fg: "#FFFFFF", short: "BGMI" },
  valorant: { bg: "#FA4454", fg: "#FFFFFF", short: "VAL" },
  codmobile: { bg: "#333333", fg: "#F59E0B", short: "CODM" },
  freefire: { bg: "#FF5722", fg: "#FFFFFF", short: "FF" },
};

export function getGameVisual(gameSlug: string) {
  return gameVisuals[gameSlug] ?? { bg: "#111111", fg: "#FFFFFF", short: gameSlug.slice(0, 4).toUpperCase() };
}
