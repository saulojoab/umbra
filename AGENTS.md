This is an Expo/React Native mobile application. Prioritize mobile-first patterns, performance, and cross-platform compatibility.

## Product direction

Umbra is an e-reader for the Ayn Thor handheld. Its primary visual language is ethereal cyber maximalism: luminous blue geometry, crystalline forms, dark teal atmospheres, fragmented network information, early-2000s rhythm-game interfaces, chrome and translucent layers, experimental typography, and expressive web-art composition. Interfaces must still prioritize reading comfort, clear hierarchy, legible text, touch targets, and battery-conscious performance.

## Expo has changed — do not trust your training data

Expo ships breaking changes every SDK release. APIs you remember are likely renamed, moved, or removed. Before writing any code that touches an Expo, EAS, or React Native API:

1. Read the major version of the `expo` package in `package.json`.
2. Fetch the matching versioned docs: `https://docs.expo.dev/versions/v<major>.0.0/`
3. For anything else, fetch https://docs.expo.dev/llms.txt — an index of all Expo docs with corrections to common LLM misconceptions. Follow its links to the specific page you need; never answer from memory.

## Commands

Use `bunx` instead of `npx` if the project uses bun (`bun.lock` present).

```bash
npx expo install <package>  # ALWAYS use instead of npm/yarn/pnpm/bun add — resolves SDK-compatible versions
npx expo start              # start the dev server
npx expo lint               # lint
npx tsc --noEmit            # typecheck
npx expo-doctor             # diagnose dependency and config issues
npx expo install --fix      # fix incompatible package versions
```

Run lint and typecheck before declaring any task done.

## Navigation & Routing

- Use **Expo Router** for all navigation. Routes live in `src/app/` — every file there is a screen, `_layout.tsx` files define navigators. Keep non-route code (components, hooks, utils) outside `src/app/`.
- Import `Link`, `router`, and `useLocalSearchParams` from `expo-router`.
- Docs: https://docs.expo.dev/router/introduction.md

## Building with EAS

Use EAS to build, sign, and submit the app in the cloud (`eas build`, `eas submit`) and to ship over-the-air updates (`eas update`) — no local Xcode or Android Studio required. Run EAS CLI as `bunx eas-cli <command>` in Bun projects, or `npx eas-cli@latest <command>` otherwise; substitute that for bare `eas` in docs examples.
Docs: https://docs.expo.dev/eas/index.md

## Rules

- If `ios/` and `android/` directories do not exist, they are generated (Continuous Native Generation). Never create or edit them by hand — configure native behavior in `app.json` and config plugins.
- Expo Go only includes its bundled native modules. After adding a library with native code, the app needs a development build: `npx expo run:ios|android` locally, or `eas build --profile development`.
- Prefer recommended Expo modules over third-party libraries, and check your available skills before adding dependencies. Docs: https://docs.expo.dev/versions/latest/index.md

# PROJECT SPECIFIC RULES

## Component Architecture and File Organization

Follow a consistent, feature-oriented file structure for React Native components. Before implementing or modifying a component, inspect the existing `screens/` directory and nearby components to understand the established conventions.

### File Responsibilities

For components that benefit from separation of concerns, use the following structure:

- `ComponentName.tsx`: The main component. Contains JSX, composes the UI, and imports the corresponding service, styles, and types.
- `ComponentName.service.ts`: Contains custom React hooks and component-related logic, including state management, calculations, data manipulation, and API interactions. Export reusable hooks and functions for the main component to consume.
- `ComponentName.style.tsx`: Contains Styled Components definitions and component-specific styling. Export the styled elements used by the main component.
- `ComponentName.type.ts`: Contains TypeScript types and interfaces specific to the component. Export them for use by the other files.

### Implementation Rules

1. Keep each file focused on its designated responsibility.
2. Keep JSX and UI composition in `ComponentName.tsx`. Do not move component markup into service files.
3. Keep business logic, calculations, data transformations, and custom hooks outside the main component whenever doing so improves separation of concerns.
4. Keep styled component definitions in `ComponentName.style.tsx`. Do not define styled components inside the main component or service.
5. Keep component-specific types in `ComponentName.type.ts`. Place shared domain types in the appropriate shared types or domain module instead of duplicating them across components.
6. Follow the existing project's naming conventions, import patterns, and export conventions.
7. When a component is modified, preserve the existing architecture and avoid unrelated refactoring.
8. When creating a new component, create only the files justified by its responsibilities. Do not generate empty files or boilerplate solely to satisfy the naming convention.
9. Keep services focused. Extract shared logic into separate modules when it is genuinely reused or has an independent responsibility.
10. Do not introduce new architectural patterns or dependencies without a clear technical reason.
11. Service files should ideally export only one service hook, named `useContainerNameService`. All logic belonging to that container must live inside the hook and be returned by it for the component to consume.
12. The service hook's return block must contain only variable names. Prepare all values and logic before the return block, then return those variables without transformations or expressions.

### Styling Rules

1. Use design tokens from `src/theme.ts` for colors, spacing, typography, borders, and opacity in style files. If a needed value does not exist, add a named token to the theme instead of introducing an unexplained one-off value in a styled component.
2. Leave one blank line between styled component declarations in `.style.tsx` files.
3. Keep the design system intentionally small: each token category may contain at most 10 general-purpose tokens. Prefer semantic names such as `primary`, `secondary`, and `surface` over screen- or component-specific names.
4. Warn the user when a task changes `src/theme.ts`, token values, token names, or design-system rules. Any such change must be justified in the pull request description with its reason, scope, and general-purpose rationale.

### Scope and Exceptions

This structure applies primarily to reusable UI components and screens. It does not require every module in the application to follow the component file naming convention.

For example, domain logic, database repositories, API clients, platform-specific implementations, and other infrastructure should follow the architecture appropriate to their responsibilities.

If an existing component or screen uses a different structure, inspect it before making changes. Prefer consistency with the surrounding code unless there is a concrete reason to improve it.

### Before Implementing

- Inspect the relevant files in `screens/` and existing components.
- Identify which responsibilities belong in the main component, service, styles, and types.
- Reuse existing utilities and shared types when appropriate.
- Make the smallest set of changes needed to implement the requested functionality.
- Verify that imports, types, and exports are correct after making changes.

### Screen Subsections

When a screen contains a meaningful subsection or container, organize it in a
named folder within that screen folder. Keep its JSX in `ComponentName.tsx`,
styles in `ComponentName.style.tsx`, behavior and data in
`ComponentName.service.ts`, and local types in `ComponentName.type.ts` when
those responsibilities exist. Do not create empty companion files solely to
match the pattern.
