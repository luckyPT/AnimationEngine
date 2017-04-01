/**
 * 获取随机整数
 */
function getRandomNum(Min,Max){
	var Range = Max - Min;   
	var Rand = Math.random();
	return(Min + Math.round(Rand * Range));   
} 

/**
 * 获取两个对象的距离 - 遵循约定优于配置原则，约定如下
 * 两个对象 需要具有位置属性(即 x y属性)
 */
function getDis(obj1,obj2){
	return Math.sqrt(getDis2(obj1,obj2));
}

/**
 * 获取两个对象的距离的平方 - 遵循约定优于配置原则，约定如下
 * 两个对象 需要具有位置属性(即 x y属性)
 */
function getDis2(obj1,obj2){
	var x = obj1.x - obj2.x;
	var y = obj1.y - obj2.y;
	return x*x + y*y;
}