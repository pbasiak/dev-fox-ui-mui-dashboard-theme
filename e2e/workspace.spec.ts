import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('dashboard period, export, page search, and notifications work', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'A little progress. A bigger picture.' })).toBeVisible();
  await page.getByRole('combobox', { name: 'Reporting period' }).click();
  await page.getByRole('option', { name: 'This week' }).click();
  await expect(page.getByText('$12,480', { exact: true })).toHaveCount(2);
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export report' }).click();
  expect((await downloadPromise).suggestedFilename()).toBe('devfox-week-report.csv');
  await page.getByRole('button', { name: 'Notifications', exact: true }).click();
  await page.getByRole('button', { name: 'Mark all read' }).click();
  await expect(page.getByRole('button', { name: 'All read' })).toBeDisabled();
  await page.keyboard.press('Escape');
  await page.keyboard.press('Control+k');
  await page.getByRole('textbox', { name: 'Search workspace pages' }).fill('customers');
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL('/customers');
});

test('customers can be created, edited, persisted, filtered, and deleted', async ({ page }) => {
  await page.goto('/customers');
  await page.getByRole('button', { name: 'Add customer', exact: true }).click();
  const dialog = page.getByRole('dialog');
  await dialog.getByLabel('Full name').fill('Taylor Test');
  await dialog.getByLabel('Email address').fill('taylor@example.com');
  await dialog.getByLabel('Company').fill('Test Studio');
  await dialog.getByRole('button', { name: 'Add customer' }).click();
  await expect(page.getByRole('cell', { name: 'Test Studio' })).toBeVisible();
  await page.reload();
  await page.getByRole('textbox', { name: 'Search customers…' }).fill('Taylor');
  await expect(page.getByRole('row')).toHaveCount(2);
  await page.getByRole('button', { name: 'Edit Taylor Test', exact: true }).click();
  await dialog.getByLabel('Company').fill('Better Studio');
  await dialog.getByRole('button', { name: 'Save changes' }).click();
  await expect(page.getByRole('cell', { name: 'Better Studio' })).toBeVisible();
  await page.getByRole('button', { name: 'Delete Taylor Test', exact: true }).click();
  await dialog.getByRole('button', { name: 'Cancel' }).click();
  await expect(page.getByRole('cell', { name: 'Better Studio' })).toBeVisible();
  await page.getByRole('button', { name: 'Delete Taylor Test', exact: true }).click();
  await dialog.getByRole('button', { name: 'Delete', exact: true }).click();
  await expect(page.getByText('No results found')).toBeVisible();
});

test('tasks persist through completion and editing', async ({ page }) => {
  await page.goto('/tasks');
  await page.getByRole('button', { name: 'Add task', exact: true }).click();
  await page.getByLabel('Task name').fill('Ship the refreshed template');
  await page.getByRole('dialog').getByRole('button', { name: 'Add task' }).click();
  await page.getByRole('checkbox', { name: 'Complete Ship the refreshed template' }).check();
  await page.reload();
  await page.getByRole('tab', { name: 'Completed', exact: true }).click();
  await expect(page.getByText('Ship the refreshed template', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Edit Ship the refreshed template' }).click();
  await page.getByLabel('Task name').fill('Template shipped');
  await page.getByRole('button', { name: 'Save task' }).click();
  await expect(page.getByText('Template shipped', { exact: true })).toBeVisible();
});

test('calendar events can be created, edited, and removed', async ({ page }) => {
  await page.goto('/calendar');
  await page.getByRole('button', { name: 'Create event' }).click();
  await page.getByLabel('Event name').fill('Release celebration');
  await page.getByRole('button', { name: 'Save event' }).click();
  await page.reload();
  await page.getByRole('button', { name: /09:00 Release celebration/ }).click();
  await page.getByLabel('Event name').fill('Team celebration');
  await page.getByRole('button', { name: 'Save event' }).click();
  await page.getByRole('button', { name: /09:00 Team celebration/ }).click();
  await page.getByRole('button', { name: 'Delete event' }).click();
  await expect(page.getByText('Team celebration', { exact: true })).toHaveCount(0);
});

test('projects and articles save real demo content', async ({ page }) => {
  await page.goto('/projects');
  await page.getByRole('button', { name: 'New project' }).click();
  await page.getByLabel('Project name').fill('A new beginning');
  await page.getByRole('button', { name: 'Create project' }).click();
  await page.reload();
  await expect(page.getByRole('heading', { name: 'A new beginning' })).toBeVisible();
  await page.goto('/articles');
  await page.getByRole('button', { name: 'Write an article' }).click();
  await page.getByRole('dialog').getByLabel('Title').fill('A useful new story');
  await page.getByLabel('Short description').fill('A little context.');
  await page.getByLabel('Your story').fill('This is the body of our new article.');
  await page.getByRole('button', { name: 'Save article' }).click();
  await page.reload();
  await page.getByRole('heading', { name: 'A useful new story' }).click();
  await expect(page.getByRole('dialog').getByText('This is the body of our new article.')).toBeVisible();
});

test('orders search and status filters match actual rows', async ({ page }) => {
  await page.goto('/orders');
  await page.getByRole('tab', { name: 'Pending (2)' }).click();
  await expect(page.getByRole('row')).toHaveCount(3);
  await page.getByRole('textbox', { name: 'Search orders…' }).fill('Lana');
  await expect(page.getByRole('row')).toHaveCount(2);
  await page.getByRole('button', { name: '#DF-1046' }).click();
  await expect(page.getByRole('dialog').getByText('lana@sisyphus.com')).toBeVisible();
});

for (const themeId of ['devfox', 'appTheme', 'shadTheme', 'cyberpunkTheme']) {
  for (const mode of ['light', 'dark']) {
    test(`${themeId} ${mode}: readable and accessible dashboard`, async ({ page }) => {
      await page.addInitScript(
        ({ themeId, mode }) =>
          localStorage.setItem('devfox:appearance', JSON.stringify({ themeId, mode, compact: false })),
        { themeId, mode },
      );
      const errors: string[] = [];
      page.on('pageerror', (error) => errors.push(error.message));
      await page.goto('/');
      await expect(page.getByRole('heading', { name: 'A little progress. A bigger picture.' })).toBeVisible();
      await expect(page.getByRole('table', { name: 'Orders' })).toBeVisible();
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      expect(
        results.violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => ({ target: n.target, summary: n.failureSummary })),
        })),
      ).toEqual([]);
      expect(errors).toEqual([]);
      await page.screenshot({ path: `test-results/themes/${themeId}-${mode}.png`, fullPage: true });
    });
  }
}

test('theme selection and profile changes persist', async ({ page }) => {
  await page.goto('/settings/appearance');
  await page.getByRole('button', { name: 'Cyberpunk theme', exact: true }).click();
  await page.getByRole('button', { name: 'Dark', exact: true }).click();
  await page.reload();
  await expect(page.getByRole('button', { name: 'Cyberpunk theme', exact: true })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  await expect(page.getByRole('button', { name: 'Dark', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await page.getByRole('tab', { name: 'My profile' }).click();
  await page.getByLabel('Full name').fill('Robin Parker');
  await page.getByRole('button', { name: 'Save changes' }).click();
  await page.goto('/');
  await expect(page.getByText(/Welcome back, Robin/)).toBeVisible();
});

test('mobile navigation and all pages fit the viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Open navigation' }).click();
  await page.getByRole('link', { name: 'Customers', exact: true }).click();
  await expect(page).toHaveURL('/customers');
  for (const path of [
    '/',
    '/customers',
    '/orders',
    '/projects',
    '/tasks',
    '/calendar',
    '/articles',
    '/components',
    '/settings',
    '/settings/appearance',
    '/settings/notifications',
    '/login',
    '/register',
    '/reset-password',
    '/a-missing-page',
  ]) {
    await page.goto(path);
    await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), path).toBe(true);
  }
});

for (const themeId of ['devfox', 'appTheme', 'shadTheme', 'cyberpunkTheme']) {
  for (const mode of ['light', 'dark']) {
    test(`${themeId} ${mode}: feature accessibility`, async ({ page }) => {
      test.setTimeout(120000);
      await page.addInitScript(
        ({ themeId, mode }) =>
          localStorage.setItem('devfox:appearance', JSON.stringify({ themeId, mode, compact: false })),
        { themeId, mode },
      );
      const failures: unknown[] = [];
      for (const path of [
        '/customers',
        '/orders',
        '/projects',
        '/tasks',
        '/calendar',
        '/articles',
        '/settings',
        '/settings/appearance',
        '/settings/notifications',
        '/components',
        '/login',
        '/register',
        '/reset-password',
      ]) {
        await page.goto(path);
        await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible();
        const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
        for (const violation of results.violations)
          failures.push({
            path,
            id: violation.id,
            nodes: violation.nodes.map((node) => ({ target: node.target, summary: node.failureSummary })),
          });
      }
      expect(failures).toEqual([]);
    });
  }
}
