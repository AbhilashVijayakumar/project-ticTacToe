const { test, expect } = require("@playwright/test")

test.describe("Winning (and non-winning) conditions", async () => {
    test("Winning conditions", async ({ page }) => {
        // Given: player 1 win
        await page.goto("/")

        // When:
        const player1Submit = await page.getByTestId("player1Submit")
        await player1Submit.click()
        const player2Submit = await page.getByTestId("player2Submit")
        await player2Submit.click()
        const square0 = await page.getByTestId("gameSquare0")
        await square0.click()
        const square1 = await page.getByTestId("gameSquare1")
        await square1.click()
        const square2 = await page.getByTestId("gameSquare2")
        await square2.click()
        const square3 = await page.getByTestId("gameSquare3")
        await square3.click()
        const square4 = await page.getByTestId("gameSquare4")
        await square4.click()
        const square5 = await page.getByTestId("gameSquare5")
        await square5.click()
        const square6 = await page.getByTestId("gameSquare6")
        await square6.click()
        const square7 = await page.getByTestId("gameSquare7")
        await square7.click()

        // Then: must see Player 1 WINS!
        console.log("check");
        const result = await page.getByTestId("result")
        console.log(await result.innerHTML())
        expect(await result.innerHTML()).toBe("Player 1 WINS!");
        console.log("check ok");

    })

    test("Losing condition", async ({ page }) => {
        // Given: player 2 wins
        await setup(page)

        // When: this sequence of clicks
        await clickCell(0, page)
        await clickCell(1, page)
        await clickCell(3, page)
        await clickCell(4, page)
        await clickCell(5, page)
        await clickCell(7, page)

        // Then: show payer 2 wins
        console.log("check");
        const result = await page.getByTestId("result")
        console.log(await result.innerHTML())
        expect(await result.innerHTML()).toBe("Player 2 WINS!");
        console.log("check ok");
    })
})

async function setup(page) {

    await  page.goto("/")
    const player1Submit = await page.getByTestId("player1Submit")
    await player1Submit.click()
    const player2Submit = await page.getByTestId("player2Submit")
    await player2Submit.click()
}

async function clickCell(n, page) {
    const square = await page.getByTestId(`gameSquare${n}`)
    await square.click()
}