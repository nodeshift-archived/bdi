import * as fetcher from './fetcher.js';

const content = await fetcher.fetchAll();

/**
 * This function returns the amount of different dependencies
 * used in nodeshift and nodeshift-starters organizations.
 * @returns {number} just a number.
 */
export function totalDependencies () {
  console.log(content);
  return 1;
}
