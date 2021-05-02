var sellingPrice=199;
var listingPrice=799;
var discountPercentage=((listingPrice-sellingPrice)/listingPrice)*100;
var displaydiscountPercent=Math.round(discountPercentage);
console.log(displaydiscountPercent+"% offer");
var result=listingPrice>sellingPrice;
console.log(result);
console.log(typeof(result));