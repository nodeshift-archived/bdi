const URLS = [
  'https://raw.githubusercontent.com/nodeshift-starters/nodejs-rest-http-crud/main/package.json',
  'https://raw.githubusercontent.com/nodeshift-starters/nodejs-messaging-work-queue/main/frontend/package.json',
  'https://raw.githubusercontent.com/nodeshift-starters/nodejs-messaging-work-queue/main/worker/package.json',
  'https://raw.githubusercontent.com/nodeshift-starters/nodejs-rest-http/main/package.json',
  'https://raw.githubusercontent.com/nodeshift-starters/nodejs-cache/main/cute-name-service/package.json',
  'https://raw.githubusercontent.com/nodeshift-starters/nodejs-cache/main/greeting-service/package.json',
  'https://raw.githubusercontent.com/nodeshift-starters/nodejs-health-check/main/package.json',
  'https://raw.githubusercontent.com/nodeshift-starters/nodejs-rest-http/main/package.json',
  'https://raw.githubusercontent.com/nodeshift-starters/nodejs-configmap/main/package.json',
  'https://raw.githubusercontent.com/nodeshift-starters/nodejs-circuit-breaker/main/greeting-service/package.json',
  'https://raw.githubusercontent.com/nodeshift-starters/nodejs-circuit-breaker/main/name-service/package.json',
  'https://raw.githubusercontent.com/nodeshift/kube-service-bindings/main/package.json',
  'https://raw.githubusercontent.com/nodeshift/opossum/main/package.json',
  'https://raw.githubusercontent.com/nodeshift/openshift-rest-client/main/package.json',
  'https://raw.githubusercontent.com/nodeshift/nodeshift/main/package.json',
  'https://raw.githubusercontent.com/nodeshift/npcheck/main/package.json'
];

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
