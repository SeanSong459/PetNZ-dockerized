let list = [
  {
    name: "dog",
  },
  {
    name: "cat",
  },
  {
    name: "reptile",
  },
  {
    name: "horse",
  },
  {
    name: "fish",
  },
  {
    name: "bird",
  },
];

const sortName = (obj1, obj2) => {
  return obj1.title < obj2.title;
};
const quickSort = (list) => {
  if (list.length < 2) return list;
  let pivot = list[0];
  let left = [];
  let right = [];
  for (let i = 1, total = list.length; i < total; i++) {
    if (sortName(list[i], pivot))
      // if (list[i] < pivot)
      left.push(list[i]);
    else right.push(list[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort(list));
module.exports = quickSort;
