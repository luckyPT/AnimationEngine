document.write("<script language=javascript src='lib/DrawUtils.js'></script>");
function Image(in_url){
	this.img = document.createElement('img');  
	this.img.src = in_url;
	//显示相关参数
	this.x=0;
	this.y=0;
	this.width=100;
	this.height=100;
	this.angle=0;
	this.loadComplete = false;
	this.setVisual=function(in_x,in_y,in_width,in_height,in_angle){
		this.x = in_x;
		this.y = in_y;
		this.width = in_width;
		this.height = in_height;
		this.angle = in_angle;
	}
	this.img.onload = function(){
		this.loadComplete =true;
	}
	this.draw=function(in_self){
		//默认绕中心旋转
		roat(this.x+this.width/2,this.y+this.height/2,this.angle);
		if(this.loadComplete){
			drawImage(this.img,this.x,this.y,this.width,this.height);
		}else{
			this.img.onload = function(){
				roat(in_self.x+in_self.width/2,in_self.y+in_self.height/2,in_self.angle);
				drawImage(in_self.img,in_self.x,in_self.y,in_self.width,in_self.height);
				restore();
			}
			drawImage(this.img,this.x,this.y,this.width,this.height);
			in_self.loadComplete=true;
		}
		restore();
	}
}

/**
 *根据雪碧图生成动画, 雪碧图应该是一横行格式的
 *in_img 雪碧图
 *in_frameWidth  in_frameHeight 每一帧的宽和高
 *in_frameCounts  帧数
 */
function video(in_img, in_frameWidth, in_frameHeight, in_frameCounts){
	this.img = in_img;
	this.FrameWidth=in_frameWidth;
	this.FrameHeight=in_frameHeight;
	this.frame = 1;

	this.x=0;
	this.y=0;
	this.width=in_frameWidth;
	this.height=in_frameHeight;
	this.angle=0;

	this.nextFrame = function(){
		if(this.frame < in_frameCounts){
			this.frame +=1;
		}else{//从头开始
			this.frame = 1;
		}
	}

	this.preFrame = function(){
		if(this.frame > 1){
			this.frame -=1;
		}else{//从尾开始
			this.frame = in_frameCounts;
		}
	}
	
	this.draw = function(){
		roat(this.x+this.width/2,this.y+this.height/2,this.angle);
		clipImage(this.img, (this.frame-1)*this.FrameWidth, 0, this.FrameWidth, this.FrameHeight, this.x, this.y, this.width, this.height);
		restore();
	}
	//设置显示位置
	this.setVisual=function(in_x,in_y,in_width,in_height,in_angle){
		this.x = in_x;
		this.y = in_y;
		this.width = in_width;
		this.height = in_height;
		this.angle = in_angle;
	}
}

function RectEntity(in_x,in_y,in_width,in_height,in_virsual){
	this.x = in_x;
	this.y = in_y;
	this.width = in_width;
	this.height = in_height;
	this.virsual = in_virsual;
	this.draw = function(){
		drawRect('#FF0000',this.x,this.y,this.width,this.height,false);
	}
	this.drawVirsual=function(){
		this.virsual.setVisual(this.x,this.y,2*this.r,2*this.r,0);
		this.virsual.draw(this.virsual);
	}
	this.hit = function(entity){
		if(entity instanceof RectEntity){
			if (this.x >= entity.x && this.x >= entity.x + entity.width) {  
				return false;  
			} else if (this.x <= entity.x && this.x + this.width <= entity.x) {  
				return false;  
			} else if (this.y >= entity.y && this.y >= entity.y + entity.height) {  
				return false;  
			} else if (this.y <= entity.y && this.y + this.height <= entity.y) {  
				return false;  
			}  
			return true; 
		}else if(entity instanceof CircleEntity){
			//圆心在矩形的正左边或者正右边 并且触点在边上
			if(Math.abs(this.x + this.width*0.5 - entity.x) > (entity.r + this.width*0.5)){
				return false;
			}
			//圆心在矩形的正上边或者正下边 并且触点在边上
			if(Math.abs(this.y + this.height*0.5 - entity.y) > (entity.r + this.height*0.5)){
				return false;
			}
			//圆心在矩形的左上 右下 右上 左下方时触点必为矩形定点
			if((entity.x < this.x || entity.x > this.x + this.width)&&
			   (entity.y < this.y || entity.y > this.y + this.height)){
				if(getDis2(this,entity) < (entity.r * entity.r)){//左上
					console.log(this.x - entity.x + ' - ' + (entity.r * entity.r));
					return true;
				}
				if(((this.x + this.width - entity.x)*(this.x + this.width - entity.x) + (this.y - entity.y)*(this.y - entity.y) )
					< (entity.r * entity.r)){//右上
					return true;
				}
				if((this.x + this.width - entity.x)*(this.x + this.width - entity.x) + (this.y + this.height - entity.y)*(this.y + this.height - entity.y)
					< (entity.r * entity.r)){//右下
					return true;
				}
				if((this.x - entity.x)*(this.x - entity.x) + (this.y + this.height - entity.y)*(this.y + this.height - entity.y)
					< (entity.r * entity.r)){//左下
					return true;
				}
			}
			
			return true;
		}
	}
}

function CircleEntity(in_x,in_y,in_r,in_virsual){
	this.x = in_x;
	this.y = in_y;
	this.r = in_r;
	this.virsual = in_virsual;
	this.draw = function(){
		drawCircle('#FF0000',this.x,this.y,this.r,0,2*Math.PI,false);
	}
	this.drawVirsual=function(){
		this.virsual.setVisual(this.x-this.r,this.y-this.r,2*this.r,2*this.r,0);
		this.virsual.draw(this.virsual);
	}

	this.hit = function(entity){
		if(entity instanceof CircleEntity){
			if(((this.r+entity.r)*(this.r+entity.r)) < getDis2(this,entity)){
				return false;
			}else{
				return true;
			}
		}else if(entity instanceof RectEntity){
			return entity.hit(this);
		}
	}
}