$(document).ready(function(){
	/*var paragraph = document.getElementById("edit");
	var edit_button = document.getElementById("edit-button");
	var end_button = document.getElementById("end-editing");

	$("#edit_button").addEventListener("click", function () {
	  paragraph.contentEditable = true;
	  document.getElementById("edit").focus();
	  
	});

	$("#end_button").addEventListener("click", function () {
	  paragraph.contentEditable = false;
	  
	});*/

	var paragraph1 = document.getElementById("edit1");
	var edit_button1 = document.getElementById("edit-button1");
	var end_button1 = document.getElementById("end-editing1");

	edit_button1.addEventListener("click", function () {
	  paragraph1.contentEditable = true;
	  document.getElementById("edit1").focus();
	  
	});

	end_button1.addEventListener("click", function () {
	  paragraph1.contentEditable = false;
	  
	});

	var paragraph = document.getElementById("edit");
	var edit_button = document.getElementById("edit-button");
	var end_button = document.getElementById("end-editing");

	edit_button.addEventListener("click", function () {
	  paragraph.contentEditable = true;
	  document.getElementById("edit").focus();
	  
	});

	end_button.addEventListener("click", function () {
	  paragraph.contentEditable = false;
	  
	});

	var paragraph2 = document.getElementById("edit2");
	var edit_button2 = document.getElementById("edit-button2");
	var end_button2 = document.getElementById("end-editing2");

	edit_button2.addEventListener("click", function () {
	  paragraph2.contentEditable = true;
	  document.getElementById("edit2").focus();
	  
	});

	end_button2.addEventListener("click", function () {
	  paragraph2.contentEditable = false;
	  
	});

	var paragraph3 = document.getElementById("edit3");
	var edit_button3 = document.getElementById("edit-button3");
	var end_button3 = document.getElementById("end-editing3");

	edit_button3.addEventListener("click", function () {
	  paragraph3.contentEditable = true;
	  document.getElementById("edit3").focus();
	  
	});

	end_button3.addEventListener("click", function () {
	  paragraph3.contentEditable = false;
	  
	});

  
});
