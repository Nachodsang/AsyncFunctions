const asyncFunction3 = (delay = 1000) => {
  for (let i = 1; i < 11; i++) {
    setTimeout(() => {
      console.log(i);
    }, delay * i);
  }
};

asyncFunction3();
