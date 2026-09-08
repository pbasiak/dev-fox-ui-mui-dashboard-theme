# Feature modules

Each folder is a self-contained starting point. Pages own the demo state; dialogs receive a record and callbacks. `data.ts` holds the feature’s model and fixtures. There is no mock network layer to configure.

| Folder       | Route                                    | Local storage                                                            | Notes                                                                            |
| ------------ | ---------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| `dashboard`  | `/`                                      | Reads orders, projects, and profile                                      | Standalone sample analytics; CSV reports                                         |
| `customers`  | `/customers`                             | `devfox:customers`                                                       | CRUD, email uniqueness, selection, CSV, filters, pagination                      |
| `orders`     | `/orders`                                | `devfox:orders`                                                          | Read-only fixture, filtering, detail dialog, export; public table/detail exports |
| `projects`   | `/projects`                              | `devfox:projects`                                                        | CRUD and progress; public fixture export for dashboard                           |
| `tasks`      | `/tasks`                                 | `devfox:tasks`                                                           | Create/edit/delete/complete and search                                           |
| `calendar`   | `/calendar`                              | `devfox:events`                                                          | Monday-first month grid, local dates, event CRUD                                 |
| `articles`   | `/articles`                              | `devfox:articles`                                                        | Plain-text content, drafts/published state, local SVG illustrations              |
| `settings`   | `/settings/*`                            | `devfox:profile`, `devfox:appearance`, `devfox:notification-preferences` | Preferences update immediately and persist                                       |
| `components` | `/components`                            | None                                                                     | Live controls, tokens, and extraction examples                                   |
| `auth`       | `/login`, `/register`, `/reset-password` | None                                                                     | Validated UI previews; no authentication or credential storage                   |

Demo calendar events use today as their anchor. Other fixtures intentionally use fixed dates to keep screenshots and tests repeatable. The tiny orders fixture is separate from analytics summaries.

For feature extraction and API integration, see [the architecture guide](../../docs/architecture.md). Shared pieces are documented in [the component guide](../components/README.md).
