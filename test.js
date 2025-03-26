
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test("One dollar should be converted to yen", function() {
    expect(fromDollarToYen(2)).toBe(292.5233644859813);
});

test("One yen should be converted to pounds", function() {
    expect(fromYenToPound(1000)).toBe(5.559105431309905);
});

