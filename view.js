
//data set
/*
var design = {};
design.color = {
    bg: 'blue'
};

chrome.storage.local.set(design, function() {
    console.log('stored');
});
*/

//data get
///*
var defaults = {};
defaults.color = {
    bg: 'no data',
    bg_img:'no data',
    box1:'no data',
    box2:'no data',
    box3:'no data',
    box4:'no data',
    box5:'no data',
    box6:'no data',
};

chrome.storage.local.get(defaults, function(items) {
    console.log(items.color.bg);
    var backcolor = document.getElementById('bgcolor');
if(items.color.box1 != ""){document.getElementById("view_box1").innerHTML = "<iframe src='content/"+items.color.box1+".html'></iframe>"}
if(items.color.box2 != ""){document.getElementById("view_box2").innerHTML = "<iframe src='content/"+items.color.box2+".html'></iframe>"}
if(items.color.box3 != ""){document.getElementById("view_box3").innerHTML = "<iframe src='content/"+items.color.box3+".html'></iframe>"}
if(items.color.box4 != ""){document.getElementById("view_box4").innerHTML = "<iframe src='content/"+items.color.box4+".html'></iframe>"}
if(items.color.box5 != ""){document.getElementById("view_box5").innerHTML = "<iframe src='content/"+items.color.box5+".html'></iframe>"}
if(items.color.box6 != ""){document.getElementById("view_box6").innerHTML = "<iframe src='content/"+items.color.box6+".html'></iframe>"}
    //bgcolor***********************************/
    if(items.color.bg == "red"){
        bgcolor_rgb = "#ff0000"
    }else
    if(items.color.bg == "orange"){
        bgcolor_rgb = "#ff8000"
    }else
    if(items.color.bg == "yellow"){
        bgcolor_rgb = "#ffff00"
    }else
    if(items.color.bg == "yellow-green"){
        bgcolor_rgb = "#80ff00"
    }else
    if(items.color.bg == "green"){
        bgcolor_rgb = "#00ff00"
    }else
    if(items.color.bg == "melon"){
        bgcolor_rgb = "#00ff80"
    }else
    if(items.color.bg == "light-blue"){
        bgcolor_rgb = "#00ffff"
    }else
    if (items.color.bg == "blue"){
        bgcolor_rgb = "#0000ff"
    }else
    if (items.color.bg == "purple"){
        bgcolor_rgb = "#ff00ff"
    }else
    if (items.color.bg == "gray"){
        bgcolor_rgb = "#aaaaaa"
    }else
    if (items.color.bg == "white"){
        bgcolor_rgb = "#ffffff"
    }else
    if (items.color.bg == "black"){
        bgcolor_rgb = "#000000"
    }else{
        bgcolor_rgb="#000000"
    }
    backcolor.style.backgroundColor=bgcolor_rgb;//bgcolor style set
    backcolor.style.backgroundImage="url("+items.color.bg_img+")";//bgcolor imgs set
    console.log(items.color.bg_img)
    /********************************************/
});
//*/
