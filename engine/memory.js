export function createMemory() {
  const store = {};
  return {
    set(key, value) {
      store[key] = value;
    },
    get(key) {
      return store[key];
    },
    dump() {
      return store;
    }
  };
}
