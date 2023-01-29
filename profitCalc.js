function calcProfit(prices) {
  //assign the min price as the first element to compare with the following ones
  let minPrice = prices[0];
  let maxProfit = 0;

  prices.forEach((price) => {
    //compares the max profit saved with the difference between the current day price and the min price got until the moment
    const currentMaxTransactionProfit = Math.max(maxProfit, price - minPrice);
    //if the day price is lower than minprice minprice receives the price
    if (price < minPrice) {
      minPrice = price;
    }
    maxProfit = currentMaxTransactionProfit;
  });

  return maxProfit;
}

console.log(calcProfit([7, 1, 5, 3, 6, 4])); //output 5
console.log(calcProfit([7, 6, 4, 3, 1])); //output 0
console.log(calcProfit([])); //output 0
