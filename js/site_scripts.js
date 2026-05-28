var photos = [];
var fileNames = [];
var imageList = [];
var image;

var openList = "<li class='partner'>";
var closeList = "</li>";

fileNames[0] = "partner-bustour.png";
fileNames[1] = "partner-cabinrental.png";
fileNames[2] = "partner-campingadv.png";
fileNames[3] = "partner-collegetours.png";
fileNames[4] = "partner-rentalbike.png";
fileNames[5] = "partner-tourgroup.png";

for(var i = 0; i < fileNames.length; i++) {

    photos.push(
        "<img src='partners/" + fileNames[i] + "'>"
    );

    image = openList + photos[i] + closeList;

    imageList.push(image);
}

var partners = document.getElementById("partners");

if(partners){
    partners.innerHTML = imageList.join("");
}