const whatToDoForLunch = function(hungry, availableTime) {
  if ((hungry===true)&&(availableTime>15&&availableTime<=20)){
	console.log("I can buy a snacks")	
} else if ((hungry===true)&&(availableTime>20&&availableTime<=50)){
	console.log("I can go to restaurant")
} else if ((hungry===false)&&(availableTime<=30)){
	console.log("I can take a nap")
} else if ((hungry===true)&&(availableTime<=15)){
	console.log("Just eat an apple")
}
}
