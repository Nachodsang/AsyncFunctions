const asyncFunction4 = () => {
  let count = 1;
  const countFunc = () => {
    console.log(count);
    if (count >= 10) {
      clearInterval(myInterval);
    } else {
      count++;
    }
  };
  const myInterval = setInterval(countFunc, 1000);
};

asyncFunction4();
