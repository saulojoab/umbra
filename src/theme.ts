export const theme = {
  colors: {
    primary: "#ecfffc",
    secondary: "#75d1cf",
    tertiary: "#83aaa9",
    accent: "#80f8ea",
    background: "#061716",
    surface: "#102c32",
    surfaceMuted: "rgba(12, 37, 40, 0.72)",
    success: "#75f9c2",
    error: "#ff9eaf",
    highlight: "#718cff",
  },
  spacing: {
    hairline: 1,
    tiny: 2,
    micro: 4,
    small: 8,
    medium: 12,
    content: 16,
    large: 18,
    screen: 22,
    section: 28,
    display: 56,
  },
  typography: {
    micro: 9,
    label: 11,
    body: 14,
    button: 16,
    copy: 16,
    title: 22,
    heading: 32,
    hero: 36,
    display: 44,
    line: 24,
  },
  tracking: {
    tight: -1.1,
    display: -1.8,
    subtle: -0.6,
    normal: 0.3,
    label: 1.5,
    wide: 2,
    brand: 4,
    wordmark: 5,
  },
  borders: {
    hairline: 1,
    selected: 2,
    subtle: "rgba(144, 255, 239, 0.14)",
    medium: "rgba(113, 191, 193, 0.14)",
    bright: "rgba(114, 244, 232, 0.38)",
  },
  radii: {
    small: 4,
    medium: 6,
    large: 8,
    circle: 16,
  },
  opacity: {
    muted: 0.5,
    disabled: 0.55,
    pressed: 0.76,
  },
} as const;

export type AppTheme = typeof theme;

declare module "@emotion/react" {
  interface Theme {
    colors: AppTheme["colors"];
    spacing: AppTheme["spacing"];
    typography: AppTheme["typography"];
    tracking: AppTheme["tracking"];
    borders: AppTheme["borders"];
    radii: AppTheme["radii"];
    opacity: AppTheme["opacity"];
  }
}
