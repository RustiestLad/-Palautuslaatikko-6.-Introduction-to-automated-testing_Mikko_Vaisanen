export default function divide(a,b) {
if (typeof a !== "number" || typeof b !== "number") {
throw new TypeError("Both arguments must be numbers");
}
if (Number.isNaN(a) || Number.isNaN(b)) {
throw new TypeError("Arguments cannot be NaN"); //Rendered reduntant by the above code.
}
if (b === 0) {
throw new RangeError("Division by zero is not allowed"); // Calculate.js only handles if B is 0, not if A = 0.
}
return a / b;
}