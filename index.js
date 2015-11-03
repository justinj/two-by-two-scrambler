import twoByTwo from 'rubik-sol/dist/two';
import solve from 'rubik-sol/dist/solve';

export function getScramble() {
  return solve({
    puz: twoByTwo,
    state: twoByTwo.generateRandomState(),
  }).join(" ")
};
