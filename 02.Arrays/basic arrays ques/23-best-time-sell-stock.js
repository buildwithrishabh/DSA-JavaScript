// Question: Given an array 'prices', find the maximum profit from buying on one day and selling on a future day. If no profit is possible, return 0.
//
// Example 1:
// Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 5 (Buy at 1, Sell at 6)
//
// Example 2:
// Input: prices = [7, 6, 4, 3, 1]
// Output: 0


let prices = [7, 1, 5, 3, 6, 4]

let minPrice = prices[0]
let maxProfit = 0;

for (let i = 0 ; i < prices.length; i++){
    if (minPrice > prices[i]){
        minPrice = prices[i]
    }

    let profit = prices[i] - minPrice;

    if (profit > maxProfit){
        maxProfit = profit;
    }
}

console.log(maxProfit);