import http from 'node:http';
import fs from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

/**
 * A fake server to simulate github and the respective
 * package.json files.
 */
export default class FakeServer {
  /**
   * A static method to create the server inside the tests.
   * @returns {object} the server to be used in tests.
   */
  static create () {
    const handler = (req, res) => {
      const filename = fileURLToPath(import.meta.url);
      let pkg;
      if (req.url === '/a.json') {
        pkg = fs.readFileSync(join(dirname(filename), 'fixtures/a.json'));
      } else if (req.url === '/b.json') {
        pkg = fs.readFileSync(join(dirname(filename), 'fixtures/b.json'));
      } else {
        pkg = fs.readFileSync(join(dirname(filename), 'fixtures/c.json'));
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(JSON.parse(pkg)));
      res.end();
    };
    const server = http.createServer(handler);
    return server.listen(3001);
  }
}
