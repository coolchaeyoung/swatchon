function solution(orders, course) {
  const ordered = new Map();
  const eachCourseMax = Array(11).fill(0);

  function createOrder(currentOrder, lastPick, depth, order) {
    if (currentOrder.length === depth) {
      const currentOrderCount = ordered.get(currentOrder) + 1 || 1;
      ordered.set(currentOrder, currentOrderCount);
      eachCourseMax[depth] = Math.max(eachCourseMax[depth], currentOrderCount);
      return;
    }

    for (let i = lastPick + 1; i < order.length; ++i) {
      createOrder(currentOrder + order[i], i, depth, order);
    }
  }

  orders.forEach(order => {
    course.forEach(depth => {
      createOrder("", -1, depth, [...order].sort());
    });
  });

  const newMenu = [];
  ordered.forEach((count, order) => {
    if (count >= 2 && count === eachCourseMax[order.length]) {
      newMenu.push(order);
    }
  });

  return newMenu.sort();
}

const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2, 3, 4];

console.log(solution(orders, course));
