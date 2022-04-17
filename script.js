var btc = document.getElementById("bitcoin");
var dog = document.getElementById("dogecoin");
var eth = document.getElementById("ethereum");
var rip = document.getElementById("ripple");
var tet = document.getElementById("tether");

var settings={
    "async":true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Ctether%2Cripple%2Cethereum&vs_currencies=inr",
    "method":"GET",
    "headers":{}


}
$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.inr;
    dog.innerHTML = response.dogecoin.inr;
    eth.innerHTML = response.ethereum.inr;
    rip.innerHTML = response.ripple.inr;
    tet.innerHTML = response.tether.inr;
});