import { readFileSync } from 'fs';
const Data = JSON.parse(readFileSync('./src/categories.json'));
import * as fetcher from './fetcher.js';
import chalk from 'chalk';
const contents = await fetcher.fetchAll();
/**
 * Report to show the category of dependencies
 * @returns {void} Nothing is returned.
 */
export function categories() {
  let depend = [];
  for (let data in Data) {
    console.info(chalk.blue.bold(data));
    console.info(chalk.magenta(Data[data].join('  ')));
    for (let item in Data[data]) {
      let count = 0;
      const dataItem = Data[data][item];
      contents.forEach(contents => {
        for (let dependencies in contents.dependencies) {
          if (dependencies == dataItem) {
            depend.push(contents.name);
            count++;
          }
        }
        for (let dependencies in contents.devDependencies) {
          if (dependencies == dataItem) {
            depend.push(contents.name);
            count++;
          }
        }
      });
      console.info(`##${dataItem}: ${count}`);
      console.info(chalk.green(depend.join('\n')));
      depend = [];
    }
    console.info('\n');
  }
}
