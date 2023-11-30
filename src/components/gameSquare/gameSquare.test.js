import GameSquare from "./gameSquare";
import userEvent from "@testing-library/user-event";
import {act, render, screen} from "@testing-library/react";
import gameSquare from "./gameSquare";

describe("when clicked, x or 0 appears", () => {

    test("X", async () => {
        // Given: Empty game square and player 1's turn
        render(<GameSquare
            turn={true}
            changeTurn={() => {}}
            markSquare={() => {}} />);

        // When: user click game square
        const gameSquare = screen.getByTestId("gameSquare");
        act(async () => {
            await userEvent.click(gameSquare);
            console.log("Hello");
        })

        // Then: X appears
        const gameSquareWithX = await screen.findByText("X");
        expect(gameSquareWithX.toBeVisible())

    })
})