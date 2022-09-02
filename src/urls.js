import { env } from 'node:process';

const URLS = [];
if (env.TEST) {
  URLS.push(...['http://localhost:3001/a.json', 'http://localhost:3001/b.json', 'http://localhost:3001/c.json']);
} else {
  URLS.push(...[
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
  ]);
}

export default URLS;
