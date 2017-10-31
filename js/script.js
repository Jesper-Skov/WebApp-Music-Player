// JavaScript Document
//Found this code here on w3school https://www.w3schools.com/jquery/html_clone.asp
$(document).ready(function () {
	$("#addone").click(function () {
		$("#mone").clone().appendTo("#waitlist");
	});
	$("#addtwo").click(function () {
		$("#mtwo").clone().appendTo("#waitlist");
	});
	$("#addthree").click(function () {
		$("#mthree").clone().appendTo("#waitlist");
	});
	$("#addfour").click(function () {
		$("#mfour").clone().appendTo("#waitlist");
	});
	$("#addfive").click(function () {
		$("#mfive").clone().appendTo("#waitlist");
	});
	$("#listaddone").click(function () {
		$("#mone").clone().appendTo("#waitlist");
	});
	$("#listaddtwo").click(function () {
		$("#mtwo").clone().appendTo("#waitlist");
	});
	$("#listaddthree").click(function () {
		$("#mthree").clone().appendTo("#waitlist");
	});
	$("#listaddfour").click(function () {
		$("#mfour").clone().appendTo("#waitlist");
	});
	$("#listaddfive").click(function () {
		$("#mfive").clone().appendTo("#waitlist");
	});
});
//This is the javascript that makes the list work https://www.w3schools.com/howto/howto_js_filter_lists.asp
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}