window.onload = function(){
  var ResData = new Object;
  var ResDone = false;
  var ResPath = "../Res/";
  var ResNameList = ['Hero','Npc1','Npc2','Npc3','Enemy1','Enemy2','Enemy3','Enemy4','Enemy5','Enemy6','Enemy7','Enemy8','Enemy9','Enemy10','Enemy11','Enemy12','Enemy13','Enemy14','Enemy15','Store','Terrain','Stair','Door1','Door2','Door3','Gem','Item1','Item2','Item3','Weapon','Floor','Tool','Star','Lava','Water','Name','Pencil','Paintroller','Memory','Upload'];
  var Zoom = 1;
  var MapCanvas = document.getElementById("Map");
  var ControllerCanvas = document.getElementById("Controller");
  var Map = MapCanvas.getContext("2d");
  var Controller = ControllerCanvas.getContext("2d");
  var Tip = document.getElementById("Tip");
  function LoadImage(Path,ResName,ResNum,callback){
		var Img = new Image(); //创建一个图片对象
		Img.src = Path; //获得图片路径
		//如果该图片已经缓存则直接回调
		if(Img.complete){
			callback(ResName,ResNum,Img);
			return;
		}
		//未缓存则等待加载完成后回调
		Img.onload = function(){
			callback(ResName,ResNum,Img);
		}
	}
	
	function XYMod(_TouchX,_TouchY,Left,Top,X,Y,W,H){
		  var TouchX = _TouchX - (Left * Zoom);
		  var TouchY = _TouchY - (Top * Zoom);
		  if(TouchX > X * Zoom && TouchX < (X + W) * Zoom && TouchY > Y * Zoom && TouchY < (Y + H) * Zoom){
		    return true;
		  }
		  return false;
		}
	
	function PushRes(){
	  Controller.strokeStyle = "#FFFFFF";
  	Controller.lineWidth = 2;
  	Controller.strokeRect(0,0,350,118);
  	Controller.drawImage(ResData["Pencil"],295,15,38,38);
  	Controller.drawImage(ResData["Paintroller"],295,65,38,38);
   Controller.drawImage(ResData["Memory"],245,15,38,38);
   Controller.drawImage(ResData["Upload"],245,65,38,38);
   Controller.moveTo(228,0);
   Controller.lineTo(228,118);
   Controller.stroke();
   Controller.drawImage(ResData["Terrain"],0,0,32,32,15,15,32,32);
   Controller.drawImage(ResData["Terrain"],32,0,32,32,20,20,32,32);
   Controller.drawImage(ResData["Terrain"],64,0,32,32,25,25,32,32);
   Controller.drawImage(ResData["Water"],0,0,32,32,70,15,32,32);
   Controller.drawImage(ResData["Lava"],0,0,32,32,75,20,32,32);
   Controller.drawImage(ResData["Star"],0,0,32,32,80,25,32,32);
   Controller.drawImage(ResData["Door1"],64,0,32,32,125,15,32,32);
   Controller.drawImage(ResData["Door1"],32,0,32,32,130,20,32,32);
   Controller.drawImage(ResData["Door1"],0,0,32,32,135,25,32,32);
   Controller.drawImage(ResData["Stair"],64,0,32,32,175,15,32,32);
   Controller.drawImage(ResData["Stair"],0,0,32,32,180,20,32,32);
   Controller.drawImage(ResData["Stair"],32,0,32,32,185,25,32,32);
   Controller.drawImage(ResData["Npc2"],0,64,32,32,70,67,32,32);
   Controller.drawImage(ResData["Npc1"],0,32,32,32,75,72,32,32);
   Controller.drawImage(ResData["Npc1"],0,0,32,32,80,77,32,32);
   Controller.drawImage(ResData["Gem"],32,32,32,32,15,67,32,32);
   Controller.drawImage(ResData["Gem"],0,32,32,32,20,72,32,32);
   Controller.drawImage(ResData["Gem"],0,0,32,32,25,77,32,32);
   Controller.drawImage(ResData["Enemy13"],0,0,32,32,125,67,32,32);
   Controller.drawImage(ResData["Enemy2"],0,96,32,32,130,72,32,32);
   Controller.drawImage(ResData["Enemy7"],0,32,32,32,135,77,32,32);
   Controller.strokeRect(178,67,40,40);
   Controller.fillStyle = "#FFFFFF";
   Controller.font = "bold 32px Verdana";
   Controller.fillText("？",190,98);
   
	}
	
	function LoadRes(){
		for(var r = 0;r < ResNameList.length;r++){
			var ResName = ResNameList[r]; //获得资源名称
			Tip.innerHTML = "纪元魔塔地图制作工具 Beta1.0.0 - 加载资源： "+ResName+"...";
			LoadImage(ResPath + ResName + ".png",ResName,ResNameList.length,function(ResName,ResNum,Img){
				console.log(ResName + ".png - Done");
				ResData[ResName] = Img;
				if(r == ResNameList.length - 1){
				  Tip.innerHTML = "纪元魔塔地图制作工具 Beta1.0.0 - 资源加载完毕";
		     PushRes();
		     ResDone = true;
				}
			});
		}
	}
	LoadRes();
	
	MapCanvas.ontouchstart = function(event){
	  var TouchX = event.touches[0].clientX;
	  var TouchY = event.touches[0].clientY;
	  if(XYMod(TouchX,TouchY,MapCanvas.offsetLeft,MapCanvas.offsetTop,0,0,352,352)){
	    alert([TouchX,TouchY]);
	  }
	}
	
	ControllerCanvas.ontouchstart = function(event){
	  var TouchX = event.touches[0].clientX;
	  var TouchY = event.touches[0].clientY;
	  if(XYMod(TouchX,TouchY,ControllerCanvas.offsetLeft,ControllerCanvas.offsetTop,0,0,352,100)){
	    alert([TouchX,TouchY]);
	  }
	}
	
	
}