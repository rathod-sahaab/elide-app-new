import { mult } from "./mult"

describe("Jest TS check", () => {
  test("Mulitplies 1 * 2 to equal 2", () => {
    expect(mult(1, 2)).toBe(2)
  })
})
