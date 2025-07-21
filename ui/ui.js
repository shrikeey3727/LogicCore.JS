import { createNeuron } from '../engine/neuron.js';

const logic = createNeuron('UI-01');
document.getElementById('fire').onclick = () => logic.fire();
