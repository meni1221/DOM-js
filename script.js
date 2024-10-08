//Task 1

const filterAndSortEvenNumbers = (x) =>
  x.filter((x) => x % 2 === 0).sort((a, b) => a - b);
console.log(filterAndSortEvenNumbers([12, 112, 4, 2, 1]));

//Task 2
const removeDuplicates = (x) => {
  const result = [];
  for (let i = 0; i < x.length; i++) {
    if (!result.includes(x[i])) {
      result.push(x[i]);
    }
  }
  return result;
};

console.log(removeDuplicates([2, 2, 3, 4, 4, 55, 55]));

//Task 3
const capitalizeFirstLetter = (str) => {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].includes(".")) {
      console.log(`this is the fake arr:${arr[i]}`);
      let strResult = arr[i];
      const first = strResult[0].toUpperCase();
      const rest = strResult.slice(1);
      let newStr = first + rest;
      arr[i] = newStr;
    }
  }
  return arr.join(" ");
};
console.log(capitalizeFirstLetter("my name. is. meni"));

//Task 4
//saveTasks
const saveTasks = (arr) => {
  localStorage.setItem("tasks", JSON.stringify(arr));
};
saveTasks([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//loadTasks
const loadTasks = () => {
  return JSON.parse(localStorage.getItem("tasks"));
};
console.log(loadTasks());

//addTask
const addTask = (task) => {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

addTask(37);
console.log(loadTasks());

//removeTask
const removeTask = (task) => {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const newTasks = tasks.filter((t) => t !== task);
  localStorage.setItem("tasks", JSON.stringify(newTasks));
};

removeTask(4);
console.log(loadTasks());
