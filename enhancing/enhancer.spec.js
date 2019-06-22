const enhancer = require("./enhancer.js");
// test away!

const gladius = {
  name: "gladius",
  durability: 50,
  enhancement: 2
};

describe("repair", () => {
  it("creates a new object", () => {
    expect(enhancer.repair(gladius)).not.toBe(gladius);
  });
  it("sets new item durability to 100", () => {
    const newItem = gladius;
    expect(enhancer.repair(gladius).durability).toBe(100);
  });
});
