// JavaScript Document
	function html5_storage_support() {
  		//check to see if this browser support local storage: return true if so, false if not
		try {
			return 'localStorage' in window && window['localStorage'] !== null;
		} catch (e) {
			return false;
		}
	}
function apply(){
   var name = document.forms["formID"]["nameEvent"].value;
   var location = document.forms["formID"]["nameEvent2"].value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
	 else if (location == "") {
        alert("location must be filled out");
        return false;
    }

   select = document.getElementById('select1'); // or in jQuery use: select = this;
   if (select.value=="") {
    alert("should be select Month");
  return false;
   }
   
   select2 = document.getElementById('select2'); // or in jQuery use: select = this;
   if (select2.value=="") {
    alert("should be select Date");
  return false;
	
}
   select3 = document.getElementById('select3'); // or in jQuery use: select = this;
   if (select3.value=="") {
    alert("should be select Day");
  return false;
	
}
 select4 = document.getElementById('select4'); // or in jQuery use: select = this;
   if (select4.value=="") {
    alert("should be select Hour");
  return false;
	
}
if (html5_storage_support()) {
  	    localStorage.setItem("name",name);
		localStorage.setItem("location",location);
		localStorage.setItem("Month",select.value);
        localStorage.setItem("Date",select2.value);
        localStorage.setItem("Day",select3.value);
		localStorage.setItem("Hour",select4.value);
	   checkbox = document.getElementById('morning'); // or in jQuery use: select = this;
       if (checkbox.checked=="false") {
       localStorage.setItem("am","pm");
	    window.open("event.html");
       }
       else {
      localStorage.setItem("am","am");
	   window.open("event.html");
       }
	    Min = document.getElementById('Min');
	    if (Min.checked=="true") {
       localStorage.setItem("Min","Min");
       }
       else {
       localStorage.setItem("Min","Max");
       }
	   
	   
	   
	}
	else {
	 alert("browser not support local storage and javascript  ");	
		}
	
	
	
	
	
}
function SomeFunction(){
 hh = document.getElementById("myTable");
hh.innerHTML +="<tr><td><b>"+localStorage.getItem("name")+"</b></td><td><b> "+ localStorage.getItem("location") +"</b></td><td><b> "+ localStorage.getItem("Month") +"</b></td><td><b>"+ localStorage.getItem("Date")+"</b></td><td><b>"+ localStorage.getItem("Day")+"</b></td><td><b>"+localStorage.getItem("Hour")+" "+ localStorage.getItem("am")+"</b></td><td><b>"+localStorage.getItem("Min")+"</b></td></tr>";	
}


function ch1(){
 Min = document.getElementById('Min'); 
Min.checked=false;	
	
	}

function ch2(){
 Max = document.getElementById('Max');
Max.checked=false;	
}