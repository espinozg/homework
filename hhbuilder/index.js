// Your code goes here
var num = 1;
var personArr = [];
var displayArr = [];
var listArr = [];
	
var buttons = document.getElementsByTagName("button");
var orderedList = document.getElementsByClassName("household");
var inputArr = document.getElementsByTagName("input");
var selectArr = document.getElementsByTagName("select");
var listNum = document.getElementsByTagName("li");

buttons[0].style.float = "left";
buttons[1].style.float = "left";

var pos = -1;


var delBtn = document.createElement("BUTTON");       
var t = document.createTextNode("remove");       
delBtn.appendChild(t);                                
document.body.appendChild(delBtn);  

var enterBtn = document.createElement("BUTTON");        
var x = document.createTextNode("enter");       
enterBtn.appendChild(x);                                
document.body.appendChild(enterBtn);  

function listFunction(str){
	var list = document.createElement("li");
	var f = document.createTextNode(str);
	list.appendChild(f);
	orderedList[0].appendChild(list);
}


function entBtn(){
	
	var ageNum = inputArr[0].value;
	var relVal = selectArr[0].value;

	if(ageNum > 0){
		personArr.push(ageNum);
	}else{
		//alert("Please enter age");
		personArr = [];
	}
	
	if(relVal == ""){
		//alert("Please enter relationship.");
		personArr = [];

	}else{
		personArr.push(relVal);
	}
	
	var smokerBox = inputArr[1].checked;
	if(ageNum == "" || relVal == ""){
		alert("no entered value");
	}else{
		if(smokerBox == true){
			personArr.push("yes");
		}else{
			personArr.push("no");
		}
	}
	

}

buttons[3].addEventListener('click',entBtn);
buttons[3].style.float = "left";


function addBtn() {
	if(personArr[0] == "" || personArr[1] == "" || personArr[2] == ""){
		alert("values all wrong");
	}else{
		var searchIndex = 0;
		if(listArr !== []){
			while(searchIndex < listArr.length){
				pos = listArr[searchIndex][0].indexOf(personArr[0]);
				if(pos < 0){
					searchIndex ++;
				}else{
					var tempPos = pos;
					break;
				}
			}
		}
		
		if(pos == -1){
			listArr.push(personArr);
			var displayString = "Person " + num + " | " + personArr[0] + " | " + personArr[1] + " | " + personArr[2];
			listFunction(displayString);
			num++;
			personArr = [];
		}else{
			alert("you already entered in that person");
			personArr = [];
		}
	}
}

buttons[0].addEventListener('click', addBtn);

function removeBtn(){
	
	var number = prompt("What person do you want to remove?");
	listArr.splice(number - 1,1);
	listNum[number - 1].style.visibility = "hidden";
}

buttons[2].addEventListener('click', removeBtn);
buttons[2].style.float = "left";


function submitBtn(){
	var myJSON = JSON.stringify(listArr);
	var myArr = document.getElementsByClassName("debug");
	myArr[0].style.display = "inline";
	myArr[0].style.position = "relative";
	myArr[0].style.top = 100 + "px";
	myArr[0].style.left = -200 + "px";
	myArr[0].innerHTML = myJSON;
}

buttons[1].addEventListener('click', submitBtn);
