function calculations(num: number) {
  for (let i = 0; i < 100; i++) {
   num = num + i;
    
  }
}

/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = calculations(data.num);
  postMessage(response);
});
