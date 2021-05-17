const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Do soMenthing Asiny"), 3000)
      : reject(new Error("Test error"));
  });
};

const doSomething = async () => {
  const somenthing = await doSomethingAsync();
  console.log(somenthing);
};

console.log("before1");
doSomething();
console.log("After1");

const anotherFunction = async () => {
  try {
    const somenthing = await doSomethingAsync();
    console.log(somenthing);
  } catch (error) {
    console.log(error);
  }
};

console.log("before2");
anotherFunction();
console.log("After2");
