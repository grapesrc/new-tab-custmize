var dataUri_var = ""
var bgcolor_rgb_set = ""
//data set
/*
var design = {};
design.color = {
    bg: 'gray'
};

chrome.storage.local.set(design, function() {
    console.log('stored');
});
*/
/*bg button cllick**************************************************/
document.getElementById("bg_red_id").onclick = function(){  //bg_red button click
    bgcolor_rgb_set = "red"
}
document.getElementById("bg_orange_id").onclick = function(){
    bgcolor_rgb_set = "orange"
}
document.getElementById("bg_yellow_id").onclick = function(){
    bgcolor_rgb_set = "yellow"
}
document.getElementById("bg_yellow-green_id").onclick = function(){
    bgcolor_rgb_set = "yellow-green"
}
document.getElementById("bg_green_id").onclick = function(){
    bgcolor_rgb_set = "green"
}
document.getElementById("bg_melon_id").onclick = function(){
    bgcolor_rgb_set = "melon"
}
document.getElementById("bg_light-blue_id").onclick = function(){
    bgcolor_rgb_set = "light-blue"
}
document.getElementById("bg_blue_id").onclick = function(){
    bgcolor_rgb_set = "blue"
}
document.getElementById("bg_purple_id").onclick = function(){
    bgcolor_rgb_set = "purple"
}
document.getElementById("bg_gray_id").onclick = function(){
    bgcolor_rgb_set = "gray"
}
document.getElementById("bg_white_id").onclick = function(){
    bgcolor_rgb_set = "white"
}
document.getElementById("bg_brack_id").onclick = function(){
    bgcolor_rgb_set = "brack"
}
/*bg button cllick end**********************************************/
document.getElementById("picture_set_button").onclick = function(){
    var picture = document.getElementById("content_picture_set").value;
    document.getElementById("content_picture").innerHTML = '<img id="'+picture+'"src="Imgs/'+picture+'.png"/>';
    document.getElementById(picture).ondragstart = function(){onDragStart(event)}
}
/*save**************************************************************/
document.getElementById("save").onclick = function(){
    var design = {};
    design.color = {
    bg: bgcolor_rgb_set, //background color
    bg_img: dataUri_var, //background picture
    box1:get_id("DropArea1"),
    box2:get_id("DropArea2"),
    box3:get_id("DropArea3"),
    box4:get_id("DropArea4"),
    box5:get_id("DropArea5"),
    box6:get_id("DropArea6"),

};
chrome.storage.local.set(design, function() {
    console.log('stored');
});
location.reload();
}
function get_id(id){
    return document.getElementById(id).innerHTML.slice(document.getElementById(id).innerHTML.indexOf('"')+1,document.getElementById(id).innerHTML.indexOf('"',10))
}
/*save end**********************************************************/
//data get
///*
var defaults = {};
defaults.color = {
    bg: 'no data',
    bg_img: 'no data',
};

chrome.storage.local.get(defaults, function(items) {
    console.log(items.color.bg);
    var backcolor = document.getElementById('bgcolor');
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
        bgcolor_rgb = "#000000"
    }
    backcolor.style.backgroundColor=bgcolor_rgb;//bgcolor style set
    backcolor.style.backgroundImage="url("+items.color.bg_img+")";// bgcolor imgs set
    /********************************************/
});
//make picture into data uri 
document.getElementById( "target" ).addEventListener( "change", function() {

	var fileList = this.files ;

	for( var blob, i=0,l=fileList.length; l>i; i++ ) {
		blob = fileList[i] ;

		var fileReader = new FileReader() ;

		fileReader.onload = function() {
			var dataUri = this.result ;
            console.log(dataUri)
            dataUri_var = dataUri
		}

		fileReader.readAsDataURL( fileList[i] ) ;
	}
} ) ;