import * as gulp from 'gulp';

/* Those imports lack typings. */
const gulpRunSequence = require('run-sequence');

/** Create a task that's a sequence of other tasks. */
export function sequenceTask(...args: any[]) {
  return (done: any) => {
    gulpRunSequence(
      ...args,
      done
    );
  };
}
