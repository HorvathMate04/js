//w3schoolsról szedtem a scripet https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp//
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext"); 
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}