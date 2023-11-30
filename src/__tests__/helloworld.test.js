import { render, screen } from "@testing-library/react";

test("Hello world appears on the screen", () => {
    render(<div>Hello world!</div>)
    expect(screen.getByText("Hello world!")).toBeVisible()
})