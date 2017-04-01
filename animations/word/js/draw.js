			/**绘制矩形快
			 * in_fileStyle  颜色; 
			 * in_x,in_y	 左上角坐标
			 * in_width,in_height	宽度和高度
			 */
			function drawRect(canvasContext,in_fileStyle,in_x,in_y,in_width,in_height){
				canvasContext.fillStyle=in_fileStyle;
				canvasContext.fillRect(in_x,in_y,in_width,in_height);
			}
			
			/**绘制线条
			 * in_fileStyle  颜色; 
			 * in_x1,in_y1   起点坐标; 
			 * in_x2,in_y2   终点坐标;
			 * in_size       线条宽度
			 */
			function drawLine(in_fileStyle,in_x1,in_y1,in_x2,in_y2,in_size){
				canvasContext.beginPath();//重置当前路径 或 开始一条路径
				canvasContext.strokeStyle=in_fileStyle;
				canvasContext.lineWidth=in_size;
				canvasContext.moveTo(in_x1,in_y1);
				canvasContext.lineTo(in_x2,in_y2);
				canvasContext.stroke();//绘制
			}
			/**绘制圆圈或实心圆
			 * in_fileStyle  颜色;
			 * in_x,in_y 	 圆心坐标
			 * in_r			 半径
			 * in_startAngle,in_endAngle	起始角度，结束角度
			 * in_size		 宽度
			 */
			function drawCircle(canvasContext,in_fileStyle,in_x,in_y,in_r,in_startAngle,in_endAngle,in_size){
				canvasContext.beginPath();
				canvasContext.strokeStyle=in_fileStyle;
				canvasContext.lineWidth=in_size;
				canvasContext.arc(in_x,in_y,in_r,in_startAngle,in_endAngle);
				canvasContext.stroke();//绘制
			}
			/**绘制文字
			 * in_fileStyle  颜色;
			 * in_x,in_y 	 左下角坐标
			 * in_size		 大小
			 * in_fontType	 字体
			 * in_isSolid	 是否填充 true or false
			 * in_text		 内容
			 * in_lineSize	 线条宽度
			 **/
			 function drawText(canvasContext,in_fileStyle,in_x,in_y,in_size,in_fontType,in_isSolid,in_text,in_lineSize){
				canvasContext.strokeStyle=in_fileStyle;
				canvasContext.fillStyle=in_fileStyle;
				canvasContext.font=in_size + "px " + in_fontType;
				if(in_isSolid==true){
					canvasContext.fillText(in_text,in_x,in_y);
				}else{
					canvasContext.lineWidth=in_lineSize;
					canvasContext.strokeText(in_text,in_x,in_y);
				}
			 }
			 
			 /**
			  * 绘制图像,目前此函数是异步绘制，对图层次序不能控制
			  */
			 function drawImge(in_url,in_x,in_y,in_width,in_height){
				var stop = false;
				var img=new Image();
				img.src=in_url;
				img.onload = function(){
					canvasContext.drawImage(img,in_x,in_y,in_width,in_height);
				};
			 }
			/*获取随机整数*/
			function GetRandomNum(Min,Max){//获取随机数   
				var Range = Max - Min;   
				var Rand = Math.random();
				return(Min + Math.round(Rand * Range));   
			}
