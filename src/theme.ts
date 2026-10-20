export const theme = {
  colors: {
    void: '#061716',
    panel: '#102c32',
    panelMuted: 'rgba(12, 37, 40, 0.72)',
    artwork: '#0b2635',
    ink: '#ecfffc',
    inkMuted: '#83aaa9',
    inkDim: '#5c898d',
    signal: '#80f8ea',
    signalSoft: '#75d1cf',
    signalDark: '#21464a',
    online: '#75f9c2',
    blue: '#718cff',
    violet: '#29204a',
    rust: '#3d2d25',
    beam: 'rgba(91, 183, 255, 0.2)',
    ring: 'rgba(78, 239, 231, 0.14)',
    textAccent: '#a1fff4',
    textSecondary: '#7eabb0',
    textTertiary: '#719b9d',
    textQuiet: '#4e777b',
    artworkLine: 'rgba(145, 250, 239, 0.25)',
    artworkGlow: 'rgba(56, 195, 255, 0.18)',
    glyphBorder: 'rgba(255, 255, 255, 0.18)',
    coverOverlay: 'rgba(4, 20, 21, 0.82)',
  },
  spacing: {
    micro: 4,
    small: 8,
    medium: 12,
    large: 18,
    screen: 22,
    section: 28,
    introBlock: 72,
    coverOverlayVertical: 7,
    coverOverlayHorizontal: 6,
    introMessageOffset: 2,
  },
  typography: {
    wordmark: 18,
    hero: 36,
    cardTitle: 24,
    body: 13,
    label: 10,
    micro: 8,
    introWelcome: 19,
    introWelcomeLine: 23,
    introMessage: 14,
    introMessageLine: 17,
    progress: 9,
    introWelcomeTracking: 1.1,
    introMessageTracking: -0.2,
    progressTracking: 0.4,
  },
  borders: {
    subtle: 'rgba(144, 255, 239, 0.14)',
    medium: 'rgba(113, 191, 193, 0.14)',
    bright: 'rgba(114, 244, 232, 0.38)',
  },
  opacity: {
    muted: 0.5,
    pressed: 0.76,
  },
} as const;

export type AppTheme = typeof theme;

declare module '@emotion/react' {
  interface Theme {
    colors: AppTheme['colors'];
    spacing: AppTheme['spacing'];
    typography: AppTheme['typography'];
    borders: AppTheme['borders'];
    opacity: AppTheme['opacity'];
  }
}
