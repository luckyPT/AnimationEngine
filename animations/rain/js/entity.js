function RectEntity(in_x,in_y,in_width,in_height,in_visual){
	this.x = in_x;
	this.y = in_y;
	this.width = in_width;
	this.height = in_height;
	this.visual = in_visual;
	this.hit = function(pointEntity){
		if(this.x<pointEntity.x && (this.x + this.width)>pointEntity.x &&
			this.y < pointEntity.y && (this.y + this.height)>pointEntity.y){
			return true;
		}else{
			return false;
		}
	}
}

function PointEntity(in_x,in_y){
	this.x = in_x;
	this.y = in_y;
}

function Element(url,in_x,in_y,in_width,in_height){
	this.img = document.createElement('img');  
	this.img.src = url;
	
	this.x = in_x;
	this.y = in_y;
	this.width = in_width;
	this.height = in_height;
	
	this.draw = function(){
		canvasContext.drawImage(this.img,this.x,this.y ,this.width,this.height);
	}
}


function rain(in_x,in_y,in_width,in_height){
	this.x = in_x;
	this.y = in_y;
	this.width = in_width;
	this.height = in_height;
	this.draw = function(){
		canvasContext.drawImage(rainImage,this.x,this.y ,this.width,this.height);
	}
}