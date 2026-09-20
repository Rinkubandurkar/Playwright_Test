let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

let state;
let action;

// Determine element state
if (isPresent === false) {
    state = "NOT FOUND";
    action = "Element not found. Check locator.";
}
else if (isPresent === true && isDisplayed === false) {
    state = "HIDDEN";
    action = "Element is hidden. Wait or check visibility.";
}
else if (isPresent === true && isDisplayed === true && isEnabled === false) {
    state = "DISABLED";
    action = "Element is disabled. Wait or check application state.";
}
else if (isPresent === true && isDisplayed === true && isEnabled === true) {
    state = "READY";
    action = "Element is ready. Proceed with interaction.";
}

// Ternary operator for severity
let severity = (state === "NOT FOUND")
    ? "CRITICAL"
    : (state === "HIDDEN" || state === "DISABLED")
        ? "WARNING"
        : "OK";

console.log("----- ELEMENT STATUS -----");
console.log("Present:", isPresent);
console.log("Displayed:", isDisplayed);
console.log("Enabled:", isEnabled);
console.log("State:", state);
console.log("Severity:", severity);
console.log("QA Action:", action);