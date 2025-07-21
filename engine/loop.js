export function createLoop() {
  const queue = [];
  let running = false;

  function run() {
    if (!queue.length) {
      running = false;
      return;
    }
    const task = queue.shift();
    Promise.resolve().then(() => {
      task();
      run();
    });
  }

  return {
    schedule(task) {
      queue.push(task);
    },
    start() {
      if (!running) {
        running = true;
        run();
      }
    }
  };
}
