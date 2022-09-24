let loaded = false;

document.addEventListener("zrx-discount-loaded", function (e) {
  if (!loaded) {
    const discount = parseFloat(e.detail.discount);
    let elm = document.querySelector('.cart_savings .money');
    let text = elm.textContent;
    let savings = parseFloat(text.substring(1));
    const currency = text.charAt(0);
    const newSavings = discount + savings;
    document.querySelector('.cart_savings .money').textContent = String(currency + newSavings);
    loaded = true;
  }
});