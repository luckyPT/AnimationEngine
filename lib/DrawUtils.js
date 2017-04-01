var canvasContext;

function setCanvasContext(in_canvasElementId){
	var canvas = document.getElementById(in_canvasElementId);
	canvasContext = canvas.getContext('2d');
}

/**绘制矩形快
 * in_fileStyle  颜色; 
 * in_x,in_y	 左上角坐标
 * in_width,in_height	宽度和高度
 * isFiill  是否填充
 */
function drawRect(in_fileStyle,in_x,in_y,in_width,in_height,in_isFiill){
	if(in_isFiill){
		canvasContext.fillStyle=in_fileStyle;
		canvasContext.fillRect(in_x,in_y,in_width,in_height);
	}else{
		canvasContext.beginPath();
		canvasContext.strokeStyle =in_fileStyle;
		canvasContext.strokeRect(in_x,in_y,in_width,in_height); 
	}
}

/**绘制圆圈或实心圆
 * in_fileStyle  颜色;
 * in_x,in_y 	 圆心坐标
 * in_r			 半径
 * in_startAngle,in_endAngle	起始角度，结束角度
 * in_isFiill	 是否填充
 */
function drawCircle(in_fileStyle,in_x,in_y,in_r,in_startAngle,in_endAngle,in_isFiill){
	canvasContext.beginPath();
	if(in_isFiill){
        canvasContext.arc(in_x,in_y,in_r,in_startAngle,in_endAngle,true);
        canvasContext.fillStyle = in_fileStyle;
        canvasContext.fill();
	}else{
		canvasContext.strokeStyle=in_fileStyle;
		canvasContext.arc(in_x,in_y,in_r,in_startAngle,in_endAngle);
		canvasContext.stroke();//绘制
	}
}

/**
 * 绘制线段
 */
function drawLine(in_fileStyle,in_x1,in_y1,in_x2,in_y2){
	canvasContext.beginPath();
	canvasContext.strokeStyle = in_fileStyle;
	canvasContext.moveTo(in_x1, in_y1);
	canvasContext.lineTo(in_x2, in_y2);
	canvasContext.stroke();
}

/**
 * 绘制图片
 */
function drawImage(in_image,in_x,in_y,in_width,in_height){
	canvasContext.drawImage(in_image,in_x,in_y,in_width,in_height);
}

/**
 * 裁剪图片
 */
function clipImage(in_image,in_sx,in_sy,in_swidth,in_sheight,in_dx,in_dy,in_dwidth,in_dheight){
	canvasContext.drawImage(in_image,in_sx,in_sy,in_swidth,in_sheight,in_dx,in_dy,in_dwidth,in_dheight);
}

/**
 * 绘制视频
 */
 function drawVideo(){

 }
 
/**
 * 旋转绘图
 * in_x,in_y - 旋转中心位置
 * in_angle - 旋转角度
 */
 function roat(in_x,in_y,in_angle){
	 canvasContext.save();
	 canvasContext.translate(in_x,in_y);
	 canvasContext.rotate(in_angle/(2*Math.PI));
	 canvasContext.translate(-1*in_x,-1*in_y);
 }
 
 /**
  * 恢复之前的画布状态
  */
 function restore(){
	 canvasContext.restore();
 }
 