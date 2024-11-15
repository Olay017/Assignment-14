// SOLUTION 1
async function newFunction() {
  const delayedPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise is resolved!");
    }, 1000);
  });

  const result = await delayedPromise;
  console.log(result);
}
newFunction();

// SOLUTION 2
function startTimer() {
  let elapsedTime = 0;

  const timer = setInterval(() => {
    elapsedTime += 1;
    console.log(`Elapsed time: ${elapsedTime} second(s)`);

    if (elapsedTime >= 5) {
      clearInterval(timer);
      console.log("Timer stopped after 5 seconds.");
    }
  }, 1000);
}

startTimer();

// SOLUTION 3
function printHello() {
  setTimeout(() => {
    console.log("Hello");
  }, 2000);
}

printHello();

// SOLUTION 4
function firstLevel(callback) {
  setTimeout(() => {
    console.log("Level 1");
    callback();
  }, 1000);
}

function secondLevel(callback) {
  setTimeout(() => {
    console.log("Level 2");
    callback();
  }, 1000);
}

function thirdLevel(callback) {
  setTimeout(() => {
    console.log("Level 3");
    callback();
  }, 1000);
}

firstLevel(() => {
  secondLevel(() => {
    thirdLevel(() => {
      console.log("Reach the end of callback hell!");
    });
  });
});

// SOLUTION 5
function firstOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("First operation completed.");
      resolve("Data from first operation");
    }, 1000);
  });
}

function secondOperation(dataFromFirst) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Second operation completed with:", dataFromFirst);
      resolve("Data from second operation");
    }, 1000);
  });
}

firstOperation()
  .then((resultFromFirst) => {
    console.log("Result from first operation:", resultFromFirst);
    return secondOperation(resultFromFirst);
  })
  .then((resultFromSecond) => {
    console.log("Result from second operation:", resultFromSecond);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

// SOLUTION 6
function multiply(num1, num2, callback) {
  const product = num1 * num2;
  callback(product);
}

function logResult(result) {
  console.log("The result is:", result);
}

multiply(5, 3, logResult);

// SOLUTION 7
async function faultyFunction() {
  throw new Error("Something went wrong!");
}

/*
try {
  await faultyFunction();
} catch (error) { 
 */

console.error("Caught an error:", error.message);

// SOLUTION 8
function riskyOperation() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; //50% chance of success
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed.");
    }
  });
}

riskyOperation()
  .then((result) => {
    console.log(result); //Logs success message if resolved
  })

  .catch((error) => {
    console.error("Caught an error:", error); //Logs error message if rejected
  });

// SOLUTION 9
function fetchData1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from fetchData1");
    }, 1000);
  });
}

function fetchData2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from fetchData2");
    }, 2000);
  });
}

Promise.all([fetchData1(), fetchData2()])
  .then((results) => {
    console.log("Both results:", results);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

// SOLUTION 10
function riskyOperation() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve("Operation succeeded!");
    } else {
      reject("Operation failed!");
    }
  });
}

riskyOperation()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
