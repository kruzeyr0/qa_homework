function checkProbabilityTheory (count) {   // Function to generate random numbers and check even/odd distribution
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        let rnd = Math.floor((Math.random() * 901) + 100); // Generates a random integer between 100 and 1000 inclusive (convert 0-1 to 100-1000 by scaling and shifting)
        console.log("Your random number is: " + rnd);

        if (rnd % 2 === 0) {    // Check if the number is even or odd
            evenCount++;
        } else {
            oddCount++;
        }   
    }

    let evenPercentage = (evenCount / count) * 100; // Calculate percentages
    let oddPercentage = (oddCount / count) * 100;

    console.log("Total numbers generated: " + count);   // Output results
    console.log("Total even numbers: " + evenCount);
    console.log("Total odd numbers: " + oddCount);
    console.log("Percentage of even numbers: " + evenPercentage.toFixed(2) + "%");
    console.log("Percentage of odd numbers: " + oddPercentage.toFixed(2) + "%");

};

checkProbabilityTheory(10000); // Call the function with 10,000 iterations