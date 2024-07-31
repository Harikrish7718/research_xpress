
/* 
Orginal Page: http://thecodeplayer.com/walkthrough/jquery-multi-step-form-with-progress-bar 




function myresfun() {
	if (cat2.checked == true){
		cat2a="";
	}
	return true;
}


 onclick="myresfun()"


 && myresfun()
*/
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches




$(".next1").click(function(){
	//alert("Name must be filled out");
	if(myfun1()){
		if(animating) return false;
		animating = true;
		//alert("Name must be filled out");
		current_fs = $(this).parent();
		next_fs = $(this).parent().next();
		
		//activate next step on progressbar using the index of next_fs
		$(".progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
		
		//show the next fieldset
		next_fs.show(); 
		//hide the current fieldset with style
		current_fs.animate({opacity: 0}, {
			step: function(now, mx) {
				//as the opacity of current_fs reduces to 0 - stored in "now"
				//1. scale current_fs down to 80%
				scale = 1 - (1 - now) * 0.2;
				//2. bring next_fs from the right(50%)
				left = (now * 50)+"%";
				//3. increase opacity of next_fs to 1 as it moves in
				opacity = 1 - now;
				current_fs.css({'transform': 'scale('+scale+')'});
				next_fs.css({'left': left, 'opacity': opacity});
			}, 
			duration: 800, 
			complete: function(){
				current_fs.hide();
				animating = false;
			}, 
			//this comes from the custom easing plugin
			easing: 'easeInOutBack'
		});
	}
});

$(".next2").click(function(){
	if(myfun2()){
		if(animating) return false;
		animating = true;
		//alert("Name must be filled out");
		current_fs = $(this).parent();
		next_fs = $(this).parent().next();
		
		//activate next step on progressbar using the index of next_fs
		$(".progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
		
		//show the next fieldset
		next_fs.show(); 
		//hide the current fieldset with style
		current_fs.animate({opacity: 0}, {
			step: function(now, mx) {
				//as the opacity of current_fs reduces to 0 - stored in "now"
				//1. scale current_fs down to 80%
				scale = 1 - (1 - now) * 0.2;
				//2. bring next_fs from the right(50%)
				left = (now * 50)+"%";
				//3. increase opacity of next_fs to 1 as it moves in
				opacity = 1 - now;
				current_fs.css({'transform': 'scale('+scale+')'});
				next_fs.css({'left': left, 'opacity': opacity});
			}, 
			duration: 800, 
			complete: function(){
				current_fs.hide();
				animating = false;
			}, 
			//this comes from the custom easing plugin
			easing: 'easeInOutBack'
		});
	}
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$(".progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

//categories
var cat1 = document.getElementById("Publication");
var cat2 = document.getElementById("Patent");
var cat3 = document.getElementById("Conf");
var cat4 = document.getElementById("WCFDP");
var cat5 = document.getElementById("Journalr");
var cat6 = document.getElementById("Journalp");
var cat7 = document.getElementById("Confp");
var cat8 = document.getElementById("Project");
var cat9 = document.getElementById("AURecog");
var cat10 = document.getElementById("ResSeed");
var cat11 = document.getElementById("Facilities");


function myfun1() {
  // If the checkbox is checked, display the output text
  if (cat1.checked == true || cat2.checked==true || cat3.checked==true || cat4.checked==true || cat5.checked==true || cat6.checked==true || cat7.checked==true || cat8.checked==true || cat9.checked==true || cat10.checked==true || cat11.checked==true){
      document.getElementById("valid1").style.display='none';
	  return true;
	}
  document.getElementById("valid1").innerHTML = "Category must be must be choosen first!";
  document.getElementById("valid1").style.display='block';
  return false;
}

function myfun2() {
	var flag=true;

	//publication
	var cat1a = document.forms["myForm"]["publication_author"].value;
	var cat1b = document.forms["myForm"]["publication_chapters"].value;
	var cat1c = document.forms["myForm"]["publication_publisher"].value;
	var cat1d = document.forms["myForm"]["publication_isbn"].value;
	var cat1e = document.forms["myForm"]["publication_month"].value;
	var cat1f = document.forms["myForm"]["publication_year"].value;
	
	//patent
	var cat2a = document.forms["myForm"]["patent_faculty"].value;
	var cat2b = document.forms["myForm"]["patent_dept"].value;
	var cat2c = document.forms["myForm"]["patent_title"].value;
	var cat2d = document.forms["myForm"]["patent_desc"].value;
	var cat2e = document.forms["myForm"]["patent_appNo"].value;
	var cat2f = document.forms["myForm"]["patent_status"].value;
	var cat2g = document.forms["myForm"]["patent_year"].value;

	//conf
	var cat3a = document.forms["myForm"]["conf_faculty"].value;
	var cat3b = document.forms["myForm"]["conf_type"].value;
	var cat3c = document.forms["myForm"]["conf_date"].value;
	var cat3d = document.forms["myForm"]["conf_title"].value;
	var cat3e = document.forms["myForm"]["conf_venue"].value;

	//wcfdp
	var cat4a = document.forms["myForm"]["wcfdp_name"].value;
	var cat4b = document.forms["myForm"]["wcfdp_type"].value;
	var cat4c = document.forms["myForm"]["wcfdp_title"].value;
	var cat4d = document.forms["myForm"]["wcfdp_venue"].value;
	var cat4e = document.forms["myForm"]["wcfdp_date"].value;

	//journalr
	var cat5a = document.forms["myForm"]["journalr_faculty"].value;
	var cat5b = document.forms["myForm"]["journalr_name"].value;
	var cat5c = document.forms["myForm"]["journalr_id"].value;
	var cat5d = document.forms["myForm"]["journalr_ifactor"].value;

	//journalp
	var cat6a = document.forms["myForm"]["journalp_author"].value;
	var cat6b = document.forms["myForm"]["journalp_title"].value;
	var cat6c = document.forms["myForm"]["journalp_name"].value;
	var cat6d = document.forms["myForm"]["journalp_vol_no"].value;
	var cat6e = document.forms["myForm"]["journalp_issue_no"].value;
	var cat6f = document.forms["myForm"]["journalp_month"].value;
	var cat6g = document.forms["myForm"]["journalp_year"].value;
	var cat6h = document.forms["myForm"]["journalp_ifactor"].value;
	var cat6i = document.forms["myForm"]["journalp_scopus_ind"].value;
	var cat6j = document.forms["myForm"]["journalp_status"].value;

	//confp
	var cat7a = document.forms["myForm"]["confp_author"].value;
	var cat7b = document.forms["myForm"]["confp_title"].value;
	var cat7c = document.forms["myForm"]["confp_name"].value;
	var cat7d = document.forms["myForm"]["confp_isbn"].value;
	var cat7e = document.forms["myForm"]["confp_scopus_ind"].value;
	var cat7f = document.forms["myForm"]["confp_status"].value;

	//proj
	var cat8a = document.forms["myForm"]["proj_faculty"].value;
	var cat8b = document.forms["myForm"]["proj_dept"].value;
	var cat8c = document.forms["myForm"]["proj_name"].value;
	var cat8d = document.forms["myForm"]["proj_sponsor"].value;
	var cat8e = document.forms["myForm"]["proj_status"].value;
	var cat8f = document.forms["myForm"]["proj_amount"].value;
	var cat8g = document.forms["myForm"]["proj_duration"].value;
	var cat8h = document.forms["myForm"]["proj_date"].value;

	//aurec
	var cat9a = document.forms["myForm"]["aurec_faculty"].value;
	var cat9b = document.forms["myForm"]["aurec_dept"].value;
	var cat9c = document.forms["myForm"]["aurec_recog_num"].value;
	var cat9d = document.forms["myForm"]["aurec_scholars_guided"].value;
	var cat9e = document.forms["myForm"]["aurec_scholars_guidance"].value;

	//resseed
	var cat10a = document.forms["myForm"]["resseed_faculty"].value;
	var cat10b = document.forms["myForm"]["resseed_dept"].value;
	var cat10c = document.forms["myForm"]["resseed_facility"].value;
	var cat10d = document.forms["myForm"]["resseed_amount"].value;
	var cat10e = document.forms["myForm"]["resseed_status"].value;

	//facilities
	var cat11a = document.forms["myForm"]["facilities_dept"].value;
	var cat11b = document.forms["myForm"]["facilities_lab_name"].value;
	var cat11c = document.forms["myForm"]["facilities_usage"].value;

	if (cat1.checked == true){
		  if (cat1a == "") {
			document.getElementById("valid1a").innerHTML = "Name must be filled!";
			document.getElementById("valid1a").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid1a").style.display='none';
		  
		  if (cat1b == "") {
			document.getElementById("valid1b").innerHTML = "Department must be filled!";
			document.getElementById("valid1b").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid1b").style.display='none';
		  
		  if (cat1c == "") {
			document.getElementById("valid1c").innerHTML = "Title must be filled!";
			document.getElementById("valid1c").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid1c").style.display='none';
		  
		  if (cat1d == "") {
			document.getElementById("valid1d").innerHTML = "Description must be filled!";
			document.getElementById("valid1d").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid1d").style.display='none';
		
		  if (cat1e == "") {
			document.getElementById("valid1e").innerHTML = "Application Number must be filled!";
			document.getElementById("valid1e").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid1e").style.display='none';
		
		if (cat1f == "") {
			document.getElementById("valid1f").innerHTML = "Status must be filled!";
			document.getElementById("valid1f").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid1f").style.display='none';
	}
	if (cat2.checked == true){
		  if (cat2a == "") {
			document.getElementById("valid2a").innerHTML = "Name must be filled!";
			document.getElementById("valid2a").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid2a").style.display='none';
		  
		  if (cat2b == "") {
			document.getElementById("valid2b").innerHTML = "Department must be filled!";
			document.getElementById("valid2b").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid2b").style.display='none';
		  
		  if (cat2c == "") {
			document.getElementById("valid2c").innerHTML = "Title must be filled!";
			document.getElementById("valid2c").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid2c").style.display='none';
		  
		  if (cat2d == "") {
			document.getElementById("valid2d").innerHTML = "Description must be filled!";
			document.getElementById("valid2d").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid2d").style.display='none';
		
		  if (cat2e == "") {
			document.getElementById("valid2e").innerHTML = "Application Number must be filled!";
			document.getElementById("valid2e").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid2e").style.display='none';
		
		if (cat2f == "") {
			document.getElementById("valid2f").innerHTML = "Status must be filled!";
			document.getElementById("valid2f").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid2f").style.display='none';
		
		if (cat2g == "") {
			document.getElementById("valid2g").innerHTML = "Application Date must be filled!";
			document.getElementById("valid2g").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid2g").style.display='none';
	}
	if (cat3.checked == true){
		  if (cat3a == "") {
			document.getElementById("valid3a").innerHTML = "Name must be filled!";
			document.getElementById("valid3a").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid3a").style.display='none';
		  
		  if (cat3b == "") {
			document.getElementById("valid3b").innerHTML = "Type must be filled!";
			document.getElementById("valid3b").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid3b").style.display='none';
		  
		  if (cat3c == "") {
			document.getElementById("valid3c").innerHTML = "Date must be filled!";
			document.getElementById("valid3c").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid3c").style.display='none';
		  
		  if (cat3d == "") {
			document.getElementById("valid3d").innerHTML = "Title must be filled!";
			document.getElementById("valid3d").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid3d").style.display='none';
		
		  if (cat3e == "") {
			document.getElementById("valid3e").innerHTML = "Venue must be filled!";
			document.getElementById("valid3e").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid3e").style.display='none';
	}
	if (cat4.checked == true){
		  if (cat4a == "") {
			document.getElementById("valid4a").innerHTML = "Name must be filled!";
			document.getElementById("valid4a").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid4a").style.display='none';
		  
		  if (cat4b == "") {
			document.getElementById("valid4b").innerHTML = "Type must be filled!";
			document.getElementById("valid4b").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid4b").style.display='none';
		  
		  if (cat4c == "") {
			document.getElementById("valid4c").innerHTML = "Title must be filled!";
			document.getElementById("valid4c").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid4c").style.display='none';
		  
		  if (cat4d == "") {
			document.getElementById("valid4d").innerHTML = "Venue must be filled!";
			document.getElementById("valid4d").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid4d").style.display='none';
		
		  if (cat4e == "") {
			document.getElementById("valid4e").innerHTML = "Date must be filled!";
			document.getElementById("valid4e").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid4e").style.display='none';
	}
	if (cat5.checked == true){
		  if (cat5a == "") {
			document.getElementById("valid5a").innerHTML = "Name must be filled!";
			document.getElementById("valid5a").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid5a").style.display='none';
		  
		  if (cat5b == "") {
			document.getElementById("valid5b").innerHTML = "Journal name must be filled!";
			document.getElementById("valid5b").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid5b").style.display='none';
		  
		  if (cat5c == "") {
			document.getElementById("valid5c").innerHTML = "Reviewer ID must be filled!";
			document.getElementById("valid5c").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid5c").style.display='none';
		  
		  if (cat5d == "") {
			document.getElementById("valid5d").innerHTML = "Impact Factor must be filled!";
			document.getElementById("valid5d").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid5d").style.display='none';
	}
	if (cat6.checked == true){
		  if (cat6a == "") {
			document.getElementById("valid6a").innerHTML = "Name must be filled!";
			document.getElementById("valid6a").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid6a").style.display='none';
		  
		  if (cat6b == "") {
			document.getElementById("valid6b").innerHTML = "Title must be filled!";
			document.getElementById("valid6b").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid6b").style.display='none';
		  
		  if (cat6c == "") {
			document.getElementById("valid6c").innerHTML = "Journal Name must be filled!";
			document.getElementById("valid6c").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid6c").style.display='none';
		  
		  if (cat6d == "") {
			document.getElementById("valid6d").innerHTML = "Volume Number must be filled!";
			document.getElementById("valid6d").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid6d").style.display='none';
		
		  if (cat6e == "") {
			document.getElementById("valid6e").innerHTML = "Issue Number must be filled!";
			document.getElementById("valid6e").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid6e").style.display='none';
		
		if (cat6f == "") {
			document.getElementById("valid6f").innerHTML = "Month must be filled!";
			document.getElementById("valid6f").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid6f").style.display='none';

		if (cat6g == "") {
			document.getElementById("valid6f").innerHTML = "Year must be filled!";
			document.getElementById("valid6f").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid6f").style.display='none';

		if (cat6h == "") {
			document.getElementById("valid6f").innerHTML = "Impact Factor must be filled!";
			document.getElementById("valid6f").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid6f").style.display='none';

		if (cat6i == "") {
			document.getElementById("valid6f").innerHTML = "Status must be filled!";
			document.getElementById("valid6f").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid6f").style.display='none';

		if (cat6j == "") {
			document.getElementById("valid6f").innerHTML = "Status must be filled!";
			document.getElementById("valid6f").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid6f").style.display='none';
	}
	if (cat7.checked == true){
		  if (cat7a == "") {
			document.getElementById("valid7a").innerHTML = "Name must be filled!";
			document.getElementById("valid7a").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid7a").style.display='none';
		  
		  if (cat7b == "") {
			document.getElementById("valid7b").innerHTML = "Title must be filled!";
			document.getElementById("valid7b").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid7b").style.display='none';
		  
		  if (cat7c == "") {
			document.getElementById("valid7c").innerHTML = "Conference Name must be filled!";
			document.getElementById("valid7c").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid7c").style.display='none';
		  
		  if (cat7d == "") {
			document.getElementById("valid7d").innerHTML = "ISBN must be filled!";
			document.getElementById("valid7d").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid7d").style.display='none';
		
		  if (cat7e == "") {
			document.getElementById("valid7e").innerHTML = "Status must be filled!";
			document.getElementById("valid7e").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid7e").style.display='none';
		
		if (cat7f == "") {
			document.getElementById("valid7f").innerHTML = "Status must be filled!";
			document.getElementById("valid7f").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid7f").style.display='none';
	}
	if (cat8.checked == true){
		  if (cat8a == "") {
			document.getElementById("valid8a").innerHTML = "Name must be filled!";
			document.getElementById("valid8a").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid8a").style.display='none';
		  
		  if (cat8b == "") {
			document.getElementById("valid8b").innerHTML = "Department must be filled!";
			document.getElementById("valid8b").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid8b").style.display='none';
		  
		  if (cat8c == "") {
			document.getElementById("valid8c").innerHTML = "Project Name must be filled!";
			document.getElementById("valid8c").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid8c").style.display='none';
		  
		  if (cat8d == "") {
			document.getElementById("valid8d").innerHTML = "Sponsoring Agency must be filled!";
			document.getElementById("valid8d").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid8d").style.display='none';
		
		  if (cat8e == "") {
			document.getElementById("valid8e").innerHTML = "Status must be filled!";
			document.getElementById("valid8e").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid8e").style.display='none';
		
		if (cat8f == "") {
			document.getElementById("valid8f").innerHTML = "Amount Sanctioned must be filled!";
			document.getElementById("valid8f").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid8f").style.display='none';

		if (cat8g == "") {
			document.getElementById("valid8f").innerHTML = "Duration must be filled!";
			document.getElementById("valid8f").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid8f").style.display='none';

		if (cat8h == "") {
			document.getElementById("valid8f").innerHTML = "Date Sanctioned must be filled!";
			document.getElementById("valid8f").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid8f").style.display='none';
	}
	if (cat9.checked == true){
		  if (cat9a == "") {
			document.getElementById("valid9a").innerHTML = "Name must be filled!";
			document.getElementById("valid9a").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid9a").style.display='none';
		  
		  if (cat9b == "") {
			document.getElementById("valid9b").innerHTML = "Department must be filled!";
			document.getElementById("valid9b").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid9b").style.display='none';
		  
		  if (cat9c == "") {
			document.getElementById("valid9c").innerHTML = "University Recognition Number must be filled!";
			document.getElementById("valid9c").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid9c").style.display='none';
		  
		  if (cat9d == "") {
			document.getElementById("valid9d").innerHTML = "No. Of Scholars Guided must be filled!";
			document.getElementById("valid9d").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid9d").style.display='none';
		
		  if (cat9e == "") {
			document.getElementById("valid9e").innerHTML = "No. Of Scholars Under Guidance must be filled!";
			document.getElementById("valid9e").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid9e").style.display='none';
	}
	if (cat10.checked == true){
		  if (cat10a == "") {
			document.getElementById("valid10a").innerHTML = "Name must be filled!";
			document.getElementById("valid10a").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid10a").style.display='none';
		  
		  if (cat10b == "") {
			document.getElementById("valid10b").innerHTML = "Department must be filled!";
			document.getElementById("valid10b").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid10b").style.display='none';
		  
		  if (cat10c == "") {
			document.getElementById("valid10c").innerHTML = "Research Facility must be filled!";
			document.getElementById("valid10c").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid10c").style.display='none';
		  
		  if (cat10d == "") {
			document.getElementById("valid10d").innerHTML = "Seed Money must be filled!";
			document.getElementById("valid10d").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid10d").style.display='none';
		
		  if (cat10e == "") {
			document.getElementById("valid10e").innerHTML = "Status must be filled!";
			document.getElementById("valid10e").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid10e").style.display='none';
	}
	if (cat11.checked == true){
		  if (cat11a == "") {
			document.getElementById("valid11a").innerHTML = "Department must be filled!";
			document.getElementById("valid11a").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid11a").style.display='none';
		  
		  if (cat11b == "") {
			document.getElementById("valid11b").innerHTML = "Facility/Laboratory Name must be filled!";
			document.getElementById("valid11b").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid11b").style.display='none';
		  
		  if (cat11c == "") {
			document.getElementById("valid11c").innerHTML = "Usage must be filled!";
			document.getElementById("valid11c").style.display='block';
			flag=false;
		  }
		  else
			document.getElementById("valid11c").style.display='none';
	}
   return flag;
}



function rd_category() {
	
  // Publication 
  var checkBox1 = document.getElementById("Publication");
  // If the checkbox is checked, display the output text
  if (checkBox1.checked == true){
    document.querySelectorAll('.publication')[0].
            style.display='block';
  }
  else{
	  document.querySelectorAll('.publication')[0].
            style.display='none';
  }
  
  // Patent
  var checkBox2 = document.getElementById("Patent");
  // If the checkbox is checked, display the output text
  if (checkBox2.checked == true){
    document.querySelectorAll('.patent')[0].
            style.display='block';
  }
  else{
	  document.querySelectorAll('.patent')[0].
            style.display='none';
  }
  
  // Conference
  var checkBox3 = document.getElementById("Conf");
  // If the checkbox is checked, display the output text
  if (checkBox3.checked == true){
    document.querySelectorAll('.conf')[0].
            style.display='block';
  }
  else{
	  document.querySelectorAll('.conf')[0].
            style.display='none';
  }
  
  // CWFDP
  var checkBox4 = document.getElementById("WCFDP");
  // If the checkbox is checked, display the output text
  if (checkBox4.checked == true){
    document.querySelectorAll('.wcfdp')[0].
            style.display='block';
  }
  else{
	  document.querySelectorAll('.wcfdp')[0].
            style.display='none';
  }
  
   // Journal Reviewer
  var checkBox5 = document.getElementById("Journalr");
  // If the checkbox is checked, display the output text
  if (checkBox5.checked == true){
    document.querySelectorAll('.journalr')[0].
            style.display='block';
  }
  else{
	  document.querySelectorAll('.journalr')[0].
            style.display='none';
  }
  
  
  // Journal Publication
  var checkBox6 = document.getElementById("Journalp");
  // If the checkbox is checked, display the output text
  if (checkBox6.checked == true){
    document.querySelectorAll('.journalp')[0].
            style.display='block';
  }
  else{
	  document.querySelectorAll('.journalp')[0].
            style.display='none';
  }
  
  // Conference Publication
  var checkBox7 = document.getElementById("Confp");
  // If the checkbox is checked, display the output text
  if (checkBox7.checked == true){
    document.querySelectorAll('.confp')[0].
            style.display='block';
  }
  else{
	  document.querySelectorAll('.confp')[0].
            style.display='none';
  }
  
  // R&D Project
  var checkBox8 = document.getElementById("Project");
  // If the checkbox is checked, display the output text
  if (checkBox8.checked == true){
    document.querySelectorAll('.proj')[0].
            style.display='block';
  }
  else{
	  document.querySelectorAll('.proj')[0].
            style.display='none';
  }
  
  //Anna University Recognized Supervisors
  var checkBox9 = document.getElementById("AURecog");
  // If the checkbox is checked, display the output text
  if (checkBox9.checked == true){
    document.querySelectorAll('.aurec')[0].
            style.display='block';
  }
  else{
	  document.querySelectorAll('.aurec')[0].
            style.display='none';
  }
  
  //Research Seed Money
  var checkBox10 = document.getElementById("ResSeed");
  // If the checkbox is checked, display the output text
  if (checkBox10.checked == true){
    document.querySelectorAll('.resseed')[0].
            style.display='block';
  }
  else{
	  document.querySelectorAll('.resseed')[0].
            style.display='none';
  }
  
  //Facilities
  var checkBox11 = document.getElementById("Facilities");
  // If the checkbox is checked, display the output text
  if (checkBox11.checked == true){
    document.querySelectorAll('.facilities')[0].
            style.display='block';
  }
  else{
	  document.querySelectorAll('.facilities')[0].
            style.display='none';
  }
}



$(document).ready(function() {
	var max_fields      = 10; //maximum input boxes allowed
	var wrapper   		= $(".input_fields_wrap"); //Fields wrapper
	var add_button      = $(".add_field_button"); //Add button ID
	
	var x = 1; //initlal text box count
	$(add_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(x < max_fields){ //max input box allowed
			x++; //text box increment
			$(wrapper).append('<div><input type="text" name="patent_faculty" placeholder="Name of Inventor"/><a href="#" class="remove_field"><button class="remove">Remove</button></a></div>'); //add input box
		}
	});
	
	$(wrapper).on("click",".remove_field", function(e){ //user click on remove text
		e.preventDefault(); $(this).parent('div').remove(); x--;
	})
});

$(document).ready(function() {
	var max_fields      = 10; //maximum input boxes allowed
	var wrapper   		= $(".input_fields_wrap1"); //Fields wrapper
	var add_button      = $(".add_field_button1"); //Add button ID
	
	var x = 1; //initlal text box count
	$(add_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(x < max_fields){ //max input box allowed
			x++; //text box increment
			$(wrapper).append('<div><input type="text" name="journalp_author" placeholder="Author Name"/><a href="#" class="remove_field"><button class="remove">Remove</button></a></div>'); //add input box
		}
	});
	
	$(wrapper).on("click",".remove_field", function(e){ //user click on remove text
		e.preventDefault(); $(this).parent('div').remove(); x--;
	})
});

$(document).ready(function() {
	var max_fields      = 10; //maximum input boxes allowed
	var wrapper   		= $(".input_fields_wrap2"); //Fields wrapper
	var add_button      = $(".add_field_button2"); //Add button ID
	
	var x = 1; //initlal text box count
	$(add_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(x < max_fields){ //max input box allowed
			x++; //text box increment
			$(wrapper).append('<div><input type="text" name="confp_author" placeholder="Author Name"/><a href="#" class="remove_field"><button class="remove">Remove</button></a></div>'); //add input box
		}
	});
	
	$(wrapper).on("click",".remove_field", function(e){ //user click on remove text
		e.preventDefault(); $(this).parent('div').remove(); x--;
	})
});

$(document).ready(function() {
	var max_fields      = 10; //maximum input boxes allowed
	var wrapper   		= $(".input_fields_wrap3"); //Fields wrapper
	var add_button      = $(".add_field_button3"); //Add button ID
	
	var x = 1; //initlal text box count
	$(add_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(x < max_fields){ //max input box allowed
			x++; //text box increment
			$(wrapper).append('<div><input type="text" name="proj_faculty" placeholder="Name of Faculty"/><a href="#" class="remove_field"><button class="remove">Remove</button></a></div>'); //add input box
		}
	});
	
	$(wrapper).on("click",".remove_field", function(e){ //user click on remove text
		e.preventDefault(); $(this).parent('div').remove(); x--;
	})
});