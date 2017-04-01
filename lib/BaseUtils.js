/*画布初始化*/
function canvasInit(in_canvasElementId,in_width,in_height,in_bgImgElementId){
	var canvas = document.getElementById(in_canvasElementId);
	var canvasBackgroundImge = document.getElementById(in_bgImgElementId);
	var canvasContext = canvas.getContext('2d');
	canvas.setAttribute('style','background:rgba(0,0,0,0);border:0px solid red');//设置边框
	canvasBackgroundImge.width = in_width;
	canvasBackgroundImge.height = in_height;
	canvas.width = in_width;
	canvas.height = in_height;
}