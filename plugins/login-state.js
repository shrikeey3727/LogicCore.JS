export function createStateNeuron(initial) {
  let state = initial;
  return {
    get() {
      return state;
    },
    set(val) {
      state = val;
    }
  };
}
