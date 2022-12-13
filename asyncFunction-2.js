const hello = () => {
  console.log("helloo");
};

const asyncFunction2 = (argFunction) => {
  const valid = typeof argFunction === "function";

  if (valid) {
    setTimeout(() => {
      argFunction();
      console.log("callback is executed after 3 seconds");
    }, 3000);
  } else {
    console.log("argument is not function");
  }
};
asyncFunction2(hello);

// const asyncFunction2 = (argFunction) => {
//   const valid = typeof argFunction === "function";
//   new Promise((resolve, reject) => {
//     if (valid) {
//       resolve(() => {
//         setTimeout(() => {
//           argFunction();
//           console.log("callback resolved after 3 seconds");
//         }, 3000);
//       });
//     }
//     reject(() => {
//       console.log("not a function");
//     });
//   });
// };
// asyncFunction2(hello)
//   .then((respond) => {
//     respond();
//   })
//   .catch((error) => {
//     console.log(error);
//   });
