window.onload=function(){
 document.getElementById('goHome').onclick = function () {
    scrollTo();
 }
    function scrollTo() {
		console.log("in");
		if (pageYOffset == 0) return;
		
      setTimeout(function() {
		if (pageYOffset ==0) return;
		window.scrollBy(0,-50);
		console.log(pageYOffset);
		scrollTo();
      }, 10);
    }
	function scrollFunction() {
		if((pageYOffset>100))
		{
			button=document.getElementById('goHome').style.display="inline-block";
		}
		else
		{
			button=document.getElementById('goHome').style.display="none";
		}		
	}
	window.onscroll = scrollFunction;

	};
function expandNews(){
	var button = document.getElementById('news1'); // returns HTMLCollection
	console.log(button.getAttribute("visited"))
	if(button.getAttribute("visited")=="false")
	{
		document.getElementById("news1").childNodes[0].nodeValue="затвори";
		document.getElementById("news1").parentNode.className="currentNews";
		document.getElementById("news1").parentNode.setAttribute("id","currentNews");
		document.getElementById("currentNews").children[1].style.float='left';
		document.getElementById("currentNews").children[1].style.margin='10px';
		document.getElementById("currentNews").children[2].style.display='inline';
		document.getElementById("news1").className= "minimize";
		document.getElementById("news1").setAttribute("visited","true");		
	}
	else{
		document.getElementById("news1").childNodes[0].nodeValue="виж още";
		document.getElementById("news1").parentNode.className="";
		document.getElementById("currentNews").children[1].style.clear='both';
		document.getElementById("currentNews").children[1].style.float='none';
		document.getElementById("currentNews").children[1].style.margin='0';
		document.getElementById("currentNews").children[2].style.display='none';
		document.getElementById("news1").className= "more";
		document.getElementById("news1").setAttribute("visited","false");
		document.getElementById("news1").parentNode.setAttribute("id","");
	}
		// 
	}

function filterRepetitions(){
	var repetitions=document.getElementsByTagName("repetition");
	for (i in repetitions) {
		var rep=repetitions[i];
		var level=rep.getAttribute("lvl");
		if((level=="beginner")&&(document.getElementById("beginner").checked==false)){
			rep.style.display="none";
		}
		else if((level=="medium")&&(document.getElementById("medium").checked==false)){
			rep.style.display="none";
		}
		else if((level=="expert")&&(document.getElementById("expert").checked==false)){
			rep.style.display="none";
		}
		else if((level=="ansamble")&&(document.getElementById("ansamble").checked==false)){
			rep.style.display="none";
		}
		else{
			rep.style.display="inline-block";
		}
	}
}

	
window.addEventListener('load', function() {
	var button = document.getElementById('news1'); // returns HTMLCollection
	console.log(button.getAttribute("visited"))
	button.addEventListener('click', expandNews); 
	var check1=document.getElementById("beginner");
	check1.addEventListener('change',filterRepetitions);
	var check2=document.getElementById("medium");
	check2.addEventListener('change',filterRepetitions);
	var check3=document.getElementById("expert");
	check3.addEventListener('change',filterRepetitions);
	var check4=document.getElementById("ansamble");
	check4.addEventListener('change',filterRepetitions);
});

