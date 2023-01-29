function calcProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  prices.forEach((price) => {
    const currentTransactionProfit = Math.max(maxProfit, price - minPrice);
    if (price < minPrice) {
      minPrice = price;
    }
    maxProfit = currentTransactionProfit;
  });

  return maxProfit;
}

console.log(calcProfit([7, 1, 5, 3, 6, 4]));
console.log(calcProfit([7, 6, 4, 3, 1]));
console.log(calcProfit([]));
