import { testCreateCheeseBoard } from "./task1_cheeseBoard.js";
import { testGetNumbers } from "./task6_getNumbers.js";
import { testCheckPolindrome } from "./task4_checkPolindrome.js";

// setting up mocha work
mocha.setup('bdd');

// call assert from chai
const assert = chai.assert;

//tests
testCreateCheeseBoard(assert);
testGetNumbers(assert);
testCheckPolindrome(assert);

// run tests
mocha.run()