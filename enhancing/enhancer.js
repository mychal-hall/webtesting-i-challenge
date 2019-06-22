module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item.enhancement < 20) {
    return { ...item, enhancement: item.enhancement++ };
  } else {
    return item;
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability -= 5;
    return { ...item };
  } else if (item.enhancement > 15) {
    item.durability -= 10;
    if (item.enhancement > 16) {
      item.enhancement -= 1;
      return { ...item };
    }
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
