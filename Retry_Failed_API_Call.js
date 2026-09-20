let attempt = 0;
let success = false;
do {
    attempt++;
    let randomValue = Math.random();

    console.log(`Attempt ${attempt}: random value = ${randomValue.toFixed(2)}`);

    if (randomValue > 0.6) {
        success = true;
        console.log("API call successful!");
    } else {
        console.log("API call failed. Retrying...");
    }

} while (!success && attempt < 5);

console.log("----- FINAL RESULT -----");

if (success) {
    console.log(`API call succeeded after ${attempt} attempt(s).`);
} else {
    console.log(`API call failed after ${attempt} attempts.`);
}
