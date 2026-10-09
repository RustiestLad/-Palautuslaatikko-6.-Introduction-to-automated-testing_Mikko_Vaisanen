import divide from '../src/calculate.js'

describe('division',() => {
    it ('Succesfully divides two numbers', () => {
        expect(divide(10,2)).toBe(5)
    })
    it ('Throws error when dividing with NaN', () => {
        expect(() => divide(typeof(NaN), 2)).toThrow('Arguments cannot be NaN')
    })
    it ('Throws error when numbers are not numbers.', () => {
        expect(() => divide("burger", 5 )).toThrow("Both arguments must be numbers")
    })
    it ('Throws error when dividing with Zero', () => {
        expect(() => divide(0, 5)).toThrow("Division by zero is not allowed") // Calculate.js only handles if B is 0, not if A = 0.
    })
    it ('Throws error when input is null.', () => {
        expect(() => divide(null,null)).toThrow("Both arguments must be numbers");
        
    })
    it ('Throws error when both numbers are zero.', () => {
        expect(() => divide(0,0)).toThrow("Division by zero is not allowed")
    })
})
