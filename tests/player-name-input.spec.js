const { test, expect } = require("@playwright/test")
test.describe("player name inputs", async () => {
    test("Enter player name renders ready text", async ({ page }) => {
        // Given:
        await page.goto("/")

        // When: user input name in player 1 name input and click ready
        const player1NameInput = await page.getByTestId("player1NameInput")
        await player1NameInput.fill("SPH")
        const player1Submit = await page.getByTestId("player1Submit")
        await player1Submit.click();

        // Then:
        expect(await page.getByText("SPH READY").isVisible());

    })
})