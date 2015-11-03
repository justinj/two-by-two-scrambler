import twoByTwo from 'rubik-sol/dist/two';
import solve from 'rubik-sol/dist/solve';

export default function getScramble() {
  return solve({
    puz: twoByTwo,
    state: twoByTwo.generateRandomState(),
  }).join(" ")
};
