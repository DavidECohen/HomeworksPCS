const CD = (function() {
    'use strict';
    let yearAmount;
    let rateAmount;
    return {

        setRate: function(rate) {
            rateAmount = rate / 100;
        },


        setYears: function(years) {
            yearAmount = years;
        },

        calculateInterest: function(deposit) {
            return ((deposit * rateAmount) * yearAmount);
        }

    };
}());
CD.setYears(5);
CD.setRate(10);
console.log(CD.calculateInterest(1000));


/////////////////////////////////////////////////////////////
/*
2) Write an Interest calculator module / IIFE that exposes functions allowing you to set the interest rate and the number of years,
    and lets you call a calculateInterest  function passing in a principle amount and it will
return the amount of interest you would pay
for that amount at the given rate and number of years.Interest rate and number of years should be PRIVATE module data,
    and nothing should be in the global namespace besides the one object returned which
exposes only the 3 functions - calculateInterest, setRate and setYears(not terribly useful but hey, it 's practice).*/