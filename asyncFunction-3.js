const asyncFunction3 = (delay = 1000) => {
  setTimeout(() => {
    console.log(1);
    setTimeout(() => {
      console.log(2);
      setTimeout(() => {
        console.log(3);
        setTimeout(() => {
          console.log(4);
          setTimeout(() => {
            console.log(5);
            setTimeout(() => {
              console.log(6);
              setTimeout(() => {
                console.log(7);
                setTimeout(() => {
                  console.log(8);
                  setTimeout(() => {
                    console.log(9);
                    setTimeout(() => {
                      console.log(10);
                    }, delay);
                  }, delay);
                }, delay);
              }, delay);
            }, delay);
          }, delay);
        }, delay);
      }, delay);
    }, delay);
  }, delay);
};

asyncFunction3();
