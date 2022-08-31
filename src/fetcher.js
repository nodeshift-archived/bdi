import URLS from './urls.js';

/**
 * Gets all the package.json from the URLS and returns an array
 * with objects containing the name, dependencies and devDependencies
 * properties.
 * @returns {object} An array of objects.
 */
export async function fetchAll () {
  const result = [];
  for (const url of URLS) {
    const res = await fetch(url);
    const json = await res.json();
    const repository = {};
    Object.assign(repository, {
      name: json.name,
      dependencies: json.dependencies,
      devDependencies: json.devDependencies
    });
    result.push(repository);
  }
  return result;
}
