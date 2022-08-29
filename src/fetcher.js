const urls = [
  'https://raw.githubusercontent.com/nodeshift-starters/nodejs-rest-http-crud/main/package.json',
  'https://raw.githubusercontent.com/nodeshift-starters/nodejs-messaging-work-queue/main/frontend/package.json',
  'https://raw.githubusercontent.com/nodeshift-starters/nodejs-rest-http/main/package.json'
];

export async function fetchAll () {
  const result = [];
  for (const url of urls) {
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
