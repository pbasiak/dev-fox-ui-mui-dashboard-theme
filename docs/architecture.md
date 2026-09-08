# Architecture and reuse

## Dependency direction

```text
app → features → shared components / hooks / lib / theme
app → shared components / hooks / lib / theme
```

`src/App.tsx` composes providers; `src/app/router.tsx` lazy-loads features. `src/app/navigation.ts` is the registry for the sidebar, page search, and document titles.

A feature owns its domain model, seed data, page, and feature-specific dialogs. Shared components accept props and do not import feature data or application configuration. The theme is independent of routing and business logic.

When a feature deliberately exposes something for another feature, use an `index.ts` public entry. The dashboard, for example, imports the order table and detail dialog through `features/orders/index.ts`. Do not import a sibling feature’s internal page or dialog directly.

Each feature currently works without a backend. This is deliberate: replacing one hook is easier than first untangling a global store and a collection of mock API layers.

## Copy a shared component

`SectionCard`, `PageHeader`, `StatusChip`, `MetricCard`, `SearchField`, `ConfirmDialog`, and `EmptyState` only require React and Material UI (plus icons where imported). Copy the files directly. They receive content and event handlers through props.

```tsx
import { Button, CssBaseline, ThemeProvider } from '@mui/material';
import { createAppTheme } from './theme/create-app-theme';
import { PageHeader } from './components/page-header';
import { SectionCard } from './components/section-card';
import { StatusChip } from './components/status-chip';
import '@fontsource-variable/inter';

const theme = createAppTheme('light', 'appTheme');

export function MyPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageHeader
        title='Your next idea'
        description='A useful starting point.'
        action={<Button variant='contained'>Create project</Button>}
      />
      <SectionCard title='Website redesign'>
        <StatusChip status='In progress' />
      </SectionCard>
    </ThemeProvider>
  );
}
```

`Logo` also imports React Router’s `Link`. Change it to your router’s link component if needed. `FeedbackContext` and `PreferencesContext` are optional integration points: supply their providers for notifications and appearance controls, respectively.

## Copy the tasks feature

1. Copy `src/features/tasks/`.
2. Copy the shared components imported by its page and dialog: `page-header`, `section-card`, `search-field`, `empty-state`, and `feedback`.
3. Copy `hooks/use-local-storage.ts`.
4. Wrap your app in Material UI’s `ThemeProvider`. Use your theme or copy `theme/create-app-theme.ts` and `theme/presets.ts`.
5. Add a route with `<TasksPage />`.

That is enough for create, edit, complete, delete, search, and persistence. A snackbar provider is optional; `useFeedback` defaults to a no-op when the feature is extracted without one.

Other features follow the same pattern. Date/CSV helpers used by customers, projects, orders, and calendar live in `lib/format.ts`.

## Add a feature

```text
src/features/inventory/
  data.ts                 Product interface and a small initialProducts array
  inventory-page.tsx      Page composition, filtering, and state
  product-dialog.tsx      The form specific to a product
  index.ts                Only if other features need a public export
  data.test.ts            Only for meaningful domain behavior
```

Keep types close to the data they describe. Extract a hook when there is reusable behavior, not just to hide three lines of state. Introduce a service/repository interface when you need asynchronous data access, caching, or several data sources.

Register a lazy route in `app/router.tsx` and a navigation item in `app/navigation.ts`. Use a stable `id` for list keys and a `devfox:your-feature` storage key. Create IDs for user-entered records with `crypto.randomUUID()`; seed data uses stable readable IDs.

## Connecting an API

Replace a feature’s local hook at the page boundary. Keep the view models and presentational components stable:

```tsx
// Demo boundary:
const [customers, setCustomers] = useLocalStorage('devfox:customers', initialCustomers);

// Your application boundary, once implemented:
const { customers, isLoading, error, createCustomer, updateCustomer, deleteCustomers } = useCustomers();
```

The second line is an integration sketch, not an included hook. Implement `useCustomers` using your preferred fetching library or your application’s existing data layer. Map API responses into the `Customer` model. Give asynchronous mutations pending/error feedback, handle authorization on your server, and only close a dialog after the operation succeeds.

For lists, decide whether filtering/pagination happens on the client or server. Keep search, filters, and totals consistent with the same result set. For large datasets, replace the basic table with a virtualized grid without changing the feature’s data contract.

Authentication previews should be replaced with your authentication provider. Their submit actions currently navigate into the demo and do not establish a session.

## Persistence contract

`useLocalStorage<T>(key, initialValue)` returns `[value, setValue]`, including functional updates. It uses `useSyncExternalStore` to synchronize consumers in one page and the browser `storage` event for other tabs. It falls back to an in-memory map if storage is unavailable.

Values must be JSON-compatible. Dates are stored as local `YYYY-MM-DD` strings; sets, maps, class instances, functions, and circular objects are not supported. Invalid JSON falls back to the seed value. The generic type is a developer contract, not runtime validation of arbitrary imported data. If you change a persisted schema, version its key (for example `devfox:customers:v2`) or add a migration/validation function.

Seed data is used until the first edit. Each feature saves independently, so removing a feature does not affect another feature’s data.

## Routing and deployment

The app uses browser-history routes. Features are lazy-loaded and display a skeleton while loading. Unexpected route failures have a retry screen; unknown paths have a 404 screen. Legacy routes redirect to the closest new feature; they do not recreate the old detail-page behavior.

Use SPA fallback routing on the host. The supported default is `/`; subdirectory deployment needs matching Vite `base` and router `basename` settings.

## Testing approach

Test behavior at the most useful boundary. The included tests verify persistent updates, cross-consumer synchronization, calendar month/year arithmetic, and accessible theme contrast. Browser tests cover the interactions that matter to someone using the template. Add domain tests when new behavior warrants them; avoid testing framework internals or snapshotting implementation details.
