const { test, expect } = require("@playwright/test");
test("Hello", async ({ page }) => {
    // Given: Tic Tac Toe page loaded
    await page.goto("/")

    // When: Page loaded
    // Then: TTT Title visible
    await expect(
        page.getByRole("heading", { name: "Tic Tac Toe Game Page" })
    ).toBeVisible();
})