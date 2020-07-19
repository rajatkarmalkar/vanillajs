var fname=document.getElementById("fname");
var lname=document.getElementById("lname");
var email=document.getElementById("email");
var contact=document.getElementById("contact");
var address=document.getElementById("address");





function validateForm()
  {

    var a = document.forms["myForm"]["fname"].value;
    if (a == null || a == "")
    {
      $("#validFname").css("display", "block");
      return false;
      }
    
    var b= document.forms["myForm"]["lname"].value;
    if (b == null || b == "")
    {
      $("#validLname").css("display", "block");
      return false;
      }
    
   var c= document.forms["myForm"]["contact"].value;
    if (c == null || c == "")
    {
      $("#validContact").css("display", "block");
      return false;
      }


      
      
 var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
       $("#validEmailid").css("display", "block");
        return false;
    }
  
    
  
    var e= document.forms["myForm"]["address"].value;
    if (e == null || e == "")
    {
      $("#validAddress").css("display", "block");
      return false;
      }
   

      	        
      
var all = document.forms["myForm"].value;
  if(all == null || all == ""){
       	$("form p").css("display", "block");
       }

     
}



/*var fname = document.getElementsByTagName("input")[0];
var lname = document.getElementsByTagName("input")[1];
var email = document.getElementsByTagName("input")[2];
var contact = document.getElementsByTagName("input")[3];
*/



var addButton=document.getElementsByTagName("button")[0];//first button
var incompleteTaskHolder=document.getElementById("tasks");//ul of #incomplete-tasks


//New task list item
var createNewTaskElement=function(taskString){

	var listItem=document.createElement("tr");
	var td=document.createElement("td");
	var tdd=document.createElement("td");
	var tddd=document.createElement("td");
	var tdddd=document.createElement("td");
	
	var tddddd=document.createElement("td");
	
	//input (checkbox)
	var checkBox=document.createElement("input");//checkbx


	//input (text)
	var editInput=document.createElement("input");//text
	//button.edit
	var editButton=document.createElement("i");//edit button


var label=document.createElement("label");//label

label.className="contact";


	//button.delete
	var deleteButton=document.createElement("i");//delete button




			 td.innerText= taskString[0];
			 tdd.innerText= taskString[1];
			 tddd.innerText= taskString[2];

			 tdddd,label.innerText= taskString[3];
			
		
	//td.innerHTML=deleteButton;

	//Each elements, needs appending
	
	editInput.type="text";



	editInput.className="contact";
	editInput.setAttribute("maxlength", "10");

	$(document).ready(function () {
  //called when key is pressed in textbox
  $(".contact").keypress(function (e) {
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
    
    
      
               return false;
           
    }
   });
});

	/*editButton.innerText="e";//innerText encodes special characters, HTML does not.
	/*editButton.className="fa fa-trash";*/
	/*deleteButton.innerText="d";
	/*deleteButton.className="fa fa-trash";*/

	tdddd.className="con";
	tddddd.className="action";
	editButton.className="fa fa-pencil";
	deleteButton.className="fa fa-trash";

	editButton.onclick=editTask;
	deleteButton.onclick=deleteTask;


	//and appending.
	/*listItem.appendChild(checkBox);*/
	/*listItem.appendChild(td);
		listItem.appendChild(editInput);*/
	listItem.appendChild(td);
	listItem.appendChild(tdd);
	listItem.appendChild(tdddd);
		listItem.appendChild(tddd);
		listItem.appendChild(tddddd);
	tdddd.appendChild(label);
		tdddd.appendChild(editInput);

	tddddd.appendChild(editButton);
	tddddd.appendChild(deleteButton);
	

	




	/*listItem.appendChild(deleteButton);
			listItem.appendChild(editButton);*/
	return listItem;
}



var addTask=function(){


	

	console.log("Add Task...");
	//Create a new list item with the text from the #new-task:
	
	var listItem=createNewTaskElement([fname.value, lname.value, email.value, contact.value]);
//	listItem=listItem".replace(",",");
	//Append listItem to incompleteTaskHolder
	incompleteTaskHolder.appendChild(listItem);
	//incompleteTaskHolder.replace();
	
/*	taskInput.value="";*/

	fname.value="";
	lname.value=""; 
	email.value=""; 
	contact.value="";
	address.value="";


	$("form p").css("display", "none");


}



//Edit an existing task.

var editTask=function(){
console.log("Edit Task...");
console.log("Change 'edit' to 'save'");


var listItem=this.parentNode;

var parent=listItem.parentNode;

 

var editInput=parent.querySelector('input[type=text]');
var label=parent.querySelector("label.contact");
var containsClass=parent.classList.contains("editMode");
		//If class of the parent is .editmode
		if(containsClass){

		//switch to .editmode
		//label becomes the inputs value.
			label.innerText=editInput.value;
		}else{
			editInput.value=label.innerText;
		}

		//toggle .editmode on the parent.
		parent.classList.toggle("editMode");
}




//Delete task.
var deleteTask=function(){
		console.log("Delete Task...");

		var listItem=this.parentNode;
		var td=listItem.parentNode;
		var tr=td.parentNode;
		//Remove the parent list item from the ul.
		tr.removeChild(td);


}



