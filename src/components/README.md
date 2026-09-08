# Shared UI

Small components that take ordinary props. No feature imports, API clients, or global stores.

| Component         | Purpose                                              | Main props                                                           |
| ----------------- | ---------------------------------------------------- | -------------------------------------------------------------------- |
| `PageHeader`      | Consistent responsive page title and actions         | `title`, `description?`, `eyebrow?`, `action?`                       |
| `SectionCard`     | Shared panel surface and heading                     | `title?`, `description?`, `action?`, `children`, `noPadding?`, `sx?` |
| `MetricCard`      | Statistic with change label and decorative sparkline | `label`, `value`, `change`, `icon`, `points?`                        |
| `StatusChip`      | Semantic label with a color and dot                  | `status`                                                             |
| `SearchField`     | Labeled search input                                 | `value`, `onChange`, `placeholder?`                                  |
| `EmptyState`      | Useful feedback when a list is empty                 | `title?`, `description?`, `action?`                                  |
| `ConfirmDialog`   | Confirmation before deletion                         | `open`, `title`, `description`, `onClose`, `onConfirm`               |
| `Logo`            | Local SVG identity and home link                     | `light?`; requires a router                                          |
| `FeedbackContext` | Optional notification callback                       | `useFeedback()` returns `(message: string) => void`                  |

Use `sx` for Material UI 9 styling. Deprecated direct system props such as `<Stack gap={2}>` are not used; write `<Stack sx={{ gap: 2 }}>`.

```tsx
<SectionCard
  title='Recent activity'
  description='The latest from your workspace.'
  action={<Button onClick={refresh}>Refresh</Button>}
>
  {items.length ? <ActivityList items={items} /> : <EmptyState />}
</SectionCard>
```

Keep feature-specific components in their feature. For example, `OrdersTable` lives in `features/orders` because its columns and callbacks describe orders, not a generic table.

Interactive examples are available at `/components`. Components inherit the theme; copying them does not require using the DevFox palette.
