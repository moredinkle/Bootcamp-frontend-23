function addToQueue() {
    queueMicrotask(() => {
      console.log("Microtask 1");
      queueMicrotask(() => {
          console.log("Microtask 2");
      });
  });
  }

  function intervalCallback() {
        count++
        console.log("clearing the interval after ", count, " seconds");
        addToQueue();
        Promise.resolve().then(promiseCallBack)
  }

  function promiseCallBack() {
      console.log("Hello from Promise");
  }


  let count = 0;
  setTimeout(intervalCallback, 1000);

  Promise.resolve().then(promiseCallBack);

  setTimeout(intervalCallback, 1000);