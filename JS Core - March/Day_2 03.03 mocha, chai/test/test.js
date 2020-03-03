import { testSum } from "./test_sum.js"
import {testMulti} from "./tets_multi.js"

// setting up mocha work

mocha.setup('bdd');

// call assert from chai
const assert = chai.assert;

//tests
// testing of Sum function
testSum(assert);
testMulti(assert);


// run tests
mocha.run()