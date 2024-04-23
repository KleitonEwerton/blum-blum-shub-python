var TestSuit = require('nist-randomness-test-suite');

var alpha = 0.001;

var testSuite = new TestSuit(alpha);

// you can also pass in a PRNG/RNG and the testsuite would generate 10^5 bits to test
var generator = () => Math.round(Math.random());
testSuite.frequencyTest(generator);
testSuite.runsTest(generator);
testSuite.binaryMatrixRankTest(generator);
testSuite.nonOverlappingTemplateMatchingTest(generator);

// you can pass in a bit string to test its randomness
var bitString = "0100100110";

const frequencyTest = testSuite.frequencyTest(bitString);
const runsTest = testSuite.runsTest(bitString);
const binaryMatrixRankTest = testSuite.binaryMatrixRankTest(bitString);
const nonOverlappingTemplateMatchingTest = testSuite.nonOverlappingTemplateMatchingTest(bitString);

const frequencyTestString = frequencyTest ? 'Passed' : 'Failed';
const runsTestString = runsTest ? 'Passed' : 'Failed';
const binaryMatrixRankTestString = binaryMatrixRankTest ? 'Passed' : 'Failed';
const nonOverlappingTemplateMatchingTestString = nonOverlappingTemplateMatchingTest ? 'Passed' : 'Failed';

const frequencyTestText = 'Frequency Test: ' + frequencyTest + ' : ' + frequencyTestString;
const runsTestText = 'Runs Test: ' + runsTest + ' : ' + runsTestString;
const binaryMatrixRankTestText = 'Binary Matrix Rank Test: ' + binaryMatrixRankTest + ' : ' + binaryMatrixRankTestString;
const nonOverlappingTemplateMatchingTestText = 'Non Overlapping Template Matching Test: ' + nonOverlappingTemplateMatchingTest + ' : ' + nonOverlappingTemplateMatchingTestString;

// Imprimindo resultados dos testes
console.log(frequencyTestText, runsTestText, binaryMatrixRankTestText, nonOverlappingTemplateMatchingTestText);



