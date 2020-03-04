//  импорт функций 
import {testCheckRoles} from "./test_checkRoles.js";
import {testGetInputGridName} from "./test_inputGridNames.js";
import {testFibRow} from "./test_fibonachi.js";

mocha.setup("bdd")

// импорт assert из chai
const assert = chai.assert;

// запуск тестов
testCheckRoles(assert);
testGetInputGridName(assert);
testFibRow(assert);

// запуск мока
mocha.run();