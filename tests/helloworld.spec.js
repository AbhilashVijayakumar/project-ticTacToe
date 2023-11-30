const { test, expect } = require("@playwright/test");
test("Hello", async ({ page }) => {
    // Given: Tic Tac Toe page loaded
    await page.goto("/")

    // When: Page loaded
    // Then: TTT Title visible
    await expect(
        page.getByText("Tic Tac Toe Game Page!"
        ).toBeVisible());
})