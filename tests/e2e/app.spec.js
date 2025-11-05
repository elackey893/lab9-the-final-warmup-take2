import { test, expect } from '@playwright/test';

test.describe('Todo App E2E', () => {
    test.beforeEach(async ({ page }) => {
        // Auto-accept confirm dialogs (for delete)
        page.on('dialog', dialog => dialog.accept());
        await page.goto('http://localhost:8080');
    });

    test('loads the app and shows empty state', async ({ page }) => {
        await expect(page.locator('h1')).toHaveText('My Tasks');
        await expect(page.locator('.empty-state')).toBeVisible();
        await expect(page.locator('.empty-icon')).toContainText('📝');
    });

    test('adds a new todo and updates stats', async ({ page }) => {
        await page.fill('input[placeholder="What needs to be done?"]', 'Buy milk');
        await page.click('button:has-text("Add")');

        await expect(page.locator('todo-item span.todo-text')).toHaveText('Buy milk');
        await expect(page.locator('.stat-value').first()).toHaveText('1');  // Total
        await expect(page.locator('.stat-value').nth(1)).toHaveText('1');  // Active
    });

    test('toggles todo completion and updates stats', async ({ page }) => {
        // Add first
        await page.fill('input[placeholder="What needs to be done?"]', 'Test toggle');
        await page.click('button:has-text("Add")');

        // Toggle and wait for re-render via stats (reliable proxy for completion)
        await page.click('todo-item input[type="checkbox"]');
        await expect(page.locator('.stat-value').nth(1)).toHaveText('0');  // Active drops to 0
        await expect(page.locator('.stat-value').nth(2)).toHaveText('1');  // Completed to 1

        // Then assert checkbox reflects completion (direct prop check)
        await expect(page.locator('todo-item input[type="checkbox"]')).toBeChecked();
    });

    test('deletes a todo and updates stats', async ({ page }) => {
        // Add
        await page.fill('input[placeholder="What needs to be done?"]', 'Delete me');
        await page.click('button:has-text("Add")');

        // Delete (auto-accepts confirm via beforeEach)
        await page.click('todo-item button:has-text("Delete")');

        await expect(page.locator('todo-item')).not.toBeVisible();
        await expect(page.locator('.stat-value').first()).toHaveText('0');  // Total 0
    });

    test('persists todos across reloads', async ({ page }) => {
        // Add and reload
        await page.fill('input[placeholder="What needs to be done?"]', 'Persistent todo');
        await page.click('button:has-text("Add")');
        await page.reload();

        await expect(page.locator('todo-item span.todo-text')).toHaveText('Persistent todo');
        await expect(page.locator('.stat-value').first()).toHaveText('1');
    });
});