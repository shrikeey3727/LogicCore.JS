export function createNeuron(id) {
  let pulse = 0;
  return {
    fire() {
      pulse++;
      console.log(`Neuron ${id} fired! Pulse: ${pulse}`);
    },
    reset() {
      pulse = 0;
    }
  };
}
