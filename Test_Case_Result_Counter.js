// Write your solution here
let results = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let passed = 0;
let failed = 0;
let skiped = 0;

for (let i = 0; i < results.length; i++){
  if (results[i] === "pass") {
    passed++;
  }
 else  if (results[i] === "fail") {
    failed++;
  }
  else if (results[i] === "skip") {
    skiped++;
  }

}

let totalTests = results.length;
let passRate = (passed / totalTests) * 100;

let verdict;


if (failed === 0) {
  verdict = "Ready for release";
}
else if (failed <= 2) {
  verdict = "Review";
  
}

else {
  verdict = "Block Release";
}

console.log("----- TEST REPORT -----");
console.log("Total Tests:", totalTests);
console.log("Passed:", passed);
console.log("Failed:", failed);
console.log("Skipped:", skiped);
console.log("Pass Rate:", passRate.toFixed(2) + "%");
console.log("Verdict:", verdict);

