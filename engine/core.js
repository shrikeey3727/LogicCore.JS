import { createNeuron } from './neuron.js';
import { createMemory } from './memory.js';
import { createLoop } from './loop.js';

const memory = createMemory();
const loop = createLoop();
const neuron = createNeuron('Core-01');

loop.schedule(() => neuron.fire());
loop.start();
