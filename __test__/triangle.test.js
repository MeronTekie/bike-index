import Triangle from "./../src/triangle.js";

describe("Triangle", () => {
  test("Should correctly create a triangle  object with three length ", () => {
    const triangle = new Triangle(2, 4, 6);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(6);
  });
});
