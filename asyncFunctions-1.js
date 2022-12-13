const asyncFunction1 = (delay = 3000) => {
  setTimeout(() => {
    console.log("Hello World");
  }, delay);
};

asyncFunction1();
