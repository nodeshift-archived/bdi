import * as bdi from './src/bdi.js';

console.info(`The total number of different dependencies are ${bdi.totalDependencies()}`);
console.info(`The total number of different devdependencies are ${bdi.totalDevDependencies()}`);
