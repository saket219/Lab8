'use strict';

window.onload = initBannerLink;
var theAd = 0;
var adURL = new Array("cnn.com","zeetv.com","microsoft.com","ndtv.com","hindustantimes.com","starplus.com")
var adImages = new Array("Lab 8 Image 1.jpeg","Lab 8 Image 2.jpeg","Lab 8 Image 3.jpeg","Lab 8 Image 4.jpeg","Lab 8 Image 5.jpeg","Lab 8 Image 6.jpeg");
function initBannerLink() {
    if (document.getElementById("adBanner").parentNode.tagName == "A")
    {
    document.getElementById("adBanner").parentNode.onclick = newLocation;
    }
    rotate();
    }
    function newLocation() {
    document.location.href = "http://www." + adURL[theAd];
    return false;
    }
    function rotate() {
    theAd++;
    if (theAd == adImages.length) {
    theAd = 0;
    }
    document.getElementById("adBanner").src = adImages[theAd];
    setTimeout(rotate, 3 * 1000);
}
