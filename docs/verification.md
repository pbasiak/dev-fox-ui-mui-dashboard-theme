# Verification

Verified on 8 September 2026 with Node 24.13.1 and npm 11.8.0.

| Check                  | Result                                                                           |
| ---------------------- | -------------------------------------------------------------------------------- |
| Clean `npm ci`         | Successful; no peer-dependency overrides or engine warnings                      |
| `npm run build`        | TypeScript check and Vite production build passed                                |
| `npm run lint`         | Passed with zero warnings; includes feature/shared import boundaries             |
| `npm run format:check` | Passed                                                                           |
| `npm test`             | 16 tests passed across 3 files                                                   |
| `npm run test:e2e`     | 24 Chromium browser tests passed                                                 |
| Theme coverage         | All 4 themes in light and dark mode                                              |
| Axe coverage           | 112 page/theme scans: dashboard and 13 feature/auth pages in every theme/mode    |
| Responsive coverage    | 390px mobile and 1440px desktop; all primary routes fit the viewport             |
| Production smoke test  | Dashboard, customers, appearance, and login load directly without runtime errors |

Browser tests cover customer CRUD, task completion/editing, project/article creation, calendar events, order search/filtering/detail, CSV downloads, navigation search, notifications, theme persistence, profile updates, and mobile navigation.

Unit tests cover text and status contrast, selected navigation contrast, state persistence and synchronization, invalid JSON, blocked/full browser storage, leap days, and month/year boundaries.

The theme screenshots in `docs/images` are captured from the running application. The tests and screenshots are reproducible from the checked-in source and lockfile. Automated accessibility scans check the rendered default states; they are not a certification of every possible content, dialog, hover, or interaction state.

## Dependency exceptions

All retained dependencies use their latest compatible stable releases at the verification date. TypeScript remains on 6.0.x because the current TypeScript ESLint parser’s supported range ends below 6.1. jsdom remains on 29.x because jsdom 30 requires a newer Node patch than the verification environment. Both limits are recorded in `package.json`; exact resolved versions are in `package-lock.json`.

Unused packages were removed instead of upgraded into the new architecture. The template no longer includes remote analytics, a mock query layer, the old map dataset, an unconfigured Storybook installation, or a rich-text editing framework.
