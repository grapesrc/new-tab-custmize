/*DropArea ondrop**************************************************/
document.getElementById("DropArea1").ondrop = function(){ onDrop(event)}
document.getElementById("DropArea2").ondrop = function(){ onDrop(event)}
document.getElementById("DropArea3").ondrop = function(){ onDrop(event)}
document.getElementById("DropArea4").ondrop = function(){ onDrop(event)}
document.getElementById("DropArea5").ondrop = function(){ onDrop(event)}
document.getElementById("DropArea6").ondrop = function(){ onDrop(event)}
/*****************************************************************/

/*DropArea ondropover*********************************************/
document.getElementById("DropArea1").ondragover = function(){onDragOver(event)}
document.getElementById("DropArea2").ondragover = function(){onDragOver(event)}
document.getElementById("DropArea3").ondragover = function(){onDragOver(event)}
document.getElementById("DropArea4").ondragover = function(){onDragOver(event)}
document.getElementById("DropArea5").ondragover = function(){onDragOver(event)}
document.getElementById("DropArea6").ondragover = function(){onDragOver(event)}
/*****************************************************************/

/*Img ondragstart*************************************************/
document.getElementById("clock").ondragstart = function(){onDragStart(event)}
/*****************************************************************/


function onDragStart(e) {
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text', e.target.id);
}

function onDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function onDrop(e) {
  if (e.stopPropagation) e.stopPropagation();
  var eid = e.dataTransfer.getData('text');
  var elem = document.getElementById(eid);
  e.target.appendChild(elem);
}