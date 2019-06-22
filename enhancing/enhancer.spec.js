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
    const item = gladius;
    expect(enhancer.repair(gladius).durability).toBe(100);
  });
});

describe("enhancement success", () => {
  it("creates a new object", () => {
    expect(enhancer.succeed(gladius)).not.toBe(gladius);
  });
  it("will increase enhancement by +1 ONLY if enhancement level is below 20", () => {
    const item = { ...gladius, enhancement: 2 };
    expect(enhancer.succeed(gladius).enhancement).toBe(3);
  });
  it("will not enhance beyond +20", () => {
    const item = { ...gladius, enhancement: 20 };
    expect(enhancer.succeed(item).enhancement).toBe(20);
  });
});
