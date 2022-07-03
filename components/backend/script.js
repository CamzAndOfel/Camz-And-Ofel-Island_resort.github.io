function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className.replace("active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += "active";
}

document.getElementById("defaultOpen").click();

const change = src => {
    document.getElementById('main-1').src = src
}

const image = source => {
    document.getElementById('preview-main').src = source
}

const picture = image => {
    document.getElementById('image-main').src = image
}

const Photo = Pic => {
    document.getElementById('play-image').src = Pic
}