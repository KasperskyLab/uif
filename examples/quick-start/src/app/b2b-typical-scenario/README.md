# B2B Typical Scenario

Example of a typical B2B scenario in **strict Forma convention**: each screen is a form with `Entity.forma-config.ts`, `Entity.tsx`, `Entity.api.ts`, `Entity.api.mock.ts` (see [Forma README](../../../shared/Forma/README.md) and [form-showcase README](../form-showcase/README.md)).

## Approach

- **Forma convention (per form)** — One folder per form: `Entity.forma-config.ts` (schema, defaultValues, fields), `Entity.tsx` (view: Forma or API-driven UI), `Entity.api.ts` (client, mappers, useQuery/useMutation), `Entity.api.mock.ts` (MSW handlers). Three layers: View → Form Schema → DTO.
- **Config-driven UI** — List and card layout (columns, toolbar, tabs) are still driven by `config/` (alertList.config, alertCard.config) so views stay thin.
- **Pages** — `AlertListPage`, `AlertAddPage`, `AlertCardPage` only render the corresponding form view (`AlertListView`, `AddAlertView`, `AlertCardView`).

## Forms (screens)

| Form       | Role              | API (MSW)                    |
|-----------|-------------------|------------------------------|
| **AddAlert**  | Create alert (sidebar) | POST /api/alerts             |
| **AlertList** | List table        | GET /api/alerts?page=&pageSize= |
| **AlertCard** | Entity card (tabs, Summary, Save) | GET /api/alerts/:id, PUT /api/alerts/:id/summary |

## Structure

```
b2b-typical-scenario/
  B2bTypicalScenarioApp.tsx   # Router, layout, sidebar
  types.ts                    # AlertListItem, AlertDetail, EntityCardFormState
  data/
    mockAlerts.ts             # generateAlertList, getAlertById (used by MSW)
  config/
    types.ts                  # Column/toolbar/tab config types
    alertList.config.ts       # List table: columns, toolbar, options
    alertCard.config.ts       # Card: toolbar, tabs, tableConfigs, summaryFields, footer
    buildToolbar.tsx          # buildToolbarLeft(spec, ctx) → Hexa Toolbar items
    index.ts                  # Re-exports
  forms/
    AddAlert/
      AddAlert.forma-config.ts
      AddAlert.tsx            # AddAlertView — Forma + useAddAlertMutation
      AddAlert.api.ts
      AddAlert.api.mock.ts
    AlertList/
      AlertList.forma-config.ts  # List params schema (no visible fields)
      AlertList.tsx              # AlertListView — Table + useAlertListQuery
      AlertList.api.ts
      AlertList.api.mock.ts
    AlertCard/
      AlertCard.forma-config.ts  # Summary schema (Save)
      AlertCard.tsx              # AlertCardView — Card + useAlertCardQuery, useSaveAlertSummaryMutation
      AlertCard.api.ts
      AlertCard.api.mock.ts
  mocks/
    handlers.ts               # Aggregates forms/*/Entity.api.mock (merged in main.tsx)
  pages/
    AlertListPage.tsx         # Renders AlertListView
    AlertAddPage.tsx          # Renders AddAlertView
    AlertCardPage.tsx         # Renders AlertCardView
  README.md
```

## Routes

- `/b2b-typical-scenario` — list of alerts (AlertListView; data from GET /api/alerts).
- `/b2b-typical-scenario/create` — list + sidebar with Add Alert form (POST /api/alerts).
- `/b2b-typical-scenario/entity/:id` — list + sidebar with alert card (GET /api/alerts/:id, Save → PUT /api/alerts/:id/summary).

## Run

From repo root:

```bash
cd examples/quick-start
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and go to **B2B Typical Scenario** or `/b2b-typical-scenario`. MSW mocks all b2b API calls in dev.
