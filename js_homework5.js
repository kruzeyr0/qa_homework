// Object containing services and their prices
var services = {
    "Стрижка": "60 грн",
    "Гоління": "80 грн",
    "Миття голови": "100 грн"

};

// Object to calculate services prices
const servicesCalculator = {

    get pricesToNumbers() {
        var values = Object.values(services);  
        var prices = new Array(values.length);  // Array to hold numeric prices with same length as values of services

        for (var i = 0; i < values.length; i++) {   // Convert prices to numbers
            prices[i] = parseInt(values[i]) || 0;            
        }
        return prices;

    },

    get price() {
        var totalPrices = 0;
        var prices = this.pricesToNumbers;
        for (var i = 0; i < prices.length; i++) {   // Sum all prices
            totalPrices += prices[i];

        }   
        return totalPrices + " грн";    // Return total price

    },

    get minPrice() {
        var prices = this.pricesToNumbers;  // Find minimal price using cicle
        var min = prices[0];
        for (var i = 1; i < prices.length; i++) {
            if (prices[i] < min) {
                min = prices[i];

            }
        }

        return min + " грн";    // Return minimal price

    },

    get maxPrice() {
        return Math.max(...this.pricesToNumbers) + " грн";    // Find and return maximal price using spread operator (with IDE auto help)

    }
}


services['Розбити скло'] = "200 грн";   // Add new services
services['Залишити чайові'] = "10 грн";  
services['Комплімент'];  // Service without price


console.log("All prices are - " + servicesCalculator.price);  // Log total price
console.log("Minimal price available - " + servicesCalculator.minPrice);  // Log minimal price
console.log("Maximal price available - " + servicesCalculator.maxPrice);  // Log maximal price
