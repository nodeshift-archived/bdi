import * as bdi from './src/bdi.js';

console.log(`The total number of different dependencies are ${bdi.totalDependencies()}`);
console.log(`The total number of different devdependencies are ${bdi.totalDevDependencies()}`);
