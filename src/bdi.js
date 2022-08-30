import * as fetcher from './fetcher.js';

const content = await fetcher.fetchAll();
/**
 * This function returns the amount of different dependencies
 * used in nodeshift and nodeshift-starters organizations.
 * @returns {number} just a number.
 */
export function totalDependencies () {
  const totalNoOfDependency = new Set(); // total different dependencies
  return findDifferent(totalNoOfDependency, 'dependencies');
}
/**
 * This function returns the different devDependencies
 * @returns {number} just a number
 */
export function totalDevDependencies () {
  const totalNoOfDevDependency = new Set();
  return findDifferent(totalNoOfDevDependency, 'devDependencies');
}
/**
 * This is common function for both dependencies an devDependencies
 * @param {object} total to store different dependencies or devDependencies
 * @param {string} typeOfDependency which type of dependencies it is
 * @returns {number} just a number
 */
function findDifferent (total, typeOfDependency) {
  content.forEach(m => {
    const dependency = m[typeOfDependency];
    for (const i in dependency) {
      total.add(i);
    }
  });
  return total.size;
}
