function addVAT(price, vat) {
    if (vat === void 0) { vat = 0.2; }
    return price * (1 + vat);
}
var vatPrice = addVAT(30, 0.2);
var vatPriceWrong = addVAT(20);
