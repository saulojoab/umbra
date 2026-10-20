# Umbra design system

Umbra uses a small, semantic token system so the interface stays consistent across the dashboard, onboarding, and future reader screens. The source of truth is [`src/theme.ts`](./src/theme.ts).

## Principles

- Design for the Ayn Thor first: readable text, generous touch targets, and clear focus states matter more than fitting in every detail.
- Use the existing tokens to build layouts. Do not add screen-specific tokens for one-off values.
- Keep the visual language dark, luminous, and restrained: deep backgrounds, teal surfaces, cyan accents, and selective highlights.
- Keep style declarations in `ComponentName.style.tsx`, with one blank line between styled-component declarations.

## Token vocabulary

Each category is intentionally limited to 10 or fewer general-purpose tokens.

### Colors

| Token | Use |
| --- | --- |
| `primary` | Main readable text and foreground content |
| `secondary` | Supporting text, labels, and teal emphasis |
| `tertiary` | Muted metadata and low-emphasis content |
| `accent` | Primary interactive emphasis and signal color |
| `background` | App-level dark background |
| `surface` | Default panel and card surface |
| `surfaceMuted` | Translucent or secondary surface |
| `success` | Online and positive state |
| `error` | Validation and error state |
| `highlight` | Blue decorative and crystalline emphasis |

### Spacing

`hairline`, `tiny`, `micro`, `small`, `medium`, `content`, `large`, `screen`, `section`, and `display` form the spacing scale. Use the closest existing step instead of introducing a new value for a single screen.

### Typography

`micro`, `label`, `body`, `button`, `copy`, `title`, `heading`, `hero`, `display`, and `line` cover the readable type scale and line-height support. Use `button` and above for interactive or important content on the Thor.

### Other tokens

- `tracking`: compact, readable letter-spacing presets from `tight` through `wordmark`.
- `borders`: `hairline`, `selected`, `subtle`, `medium`, and `bright`.
- `radii`: `small`, `medium`, `large`, and `circle`.
- `opacity`: `muted`, `disabled`, and `pressed` interaction states.

## Usage

Import the theme in a style file and reference tokens directly:

```tsx
import styled from "@emotion/native";

import { theme } from "@/theme";

export const Panel = styled.View({
  padding: theme.spacing.content,
  backgroundColor: theme.colors.surface,
  borderRadius: theme.radii.medium,
});
```

Keep business logic out of style files. Container behavior belongs in the container service hook; styles should only describe presentation.

## Design-system changes and pull requests

Any change to `src/theme.ts`, the token vocabulary, or the design-system rules must be called out in the pull request description. Explain:

1. Which token or rule changed.
2. Why the existing tokens were insufficient.
3. Which screens or components are affected.
4. Why the change remains general-purpose instead of screen-specific.

This justification is required even when the visual change appears small, because token changes can affect the entire application.
