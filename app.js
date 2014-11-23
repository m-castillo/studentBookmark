$(document).ready(function(){

	$("#edmodo").mouseenter(function(){
		$("#google, #ttm, #istation, #thinkCentral, #discoveryEd").addClass("hover");
	});
	$("#edmodo").mouseleave(function(){
		$("#google, #ttm, #istation, #thinkCentral, #discoveryEd").removeClass("hover");
	});

	$("#google").mouseenter(function(){
		$("#edmodo, #ttm, #istation, #thinkCentral, #discoveryEd").addClass("hover");
	});
	$("#google").mouseleave(function(){
		$("#edmodo, #ttm, #istation, #thinkCentral, #discoveryEd").removeClass("hover");
	});

	$("#ttm").mouseenter(function(){
		$("#edmodo, #google, #istation, #thinkCentral, #discoveryEd").addClass("hover");
	});
	$("#ttm").mouseleave(function(){
		$("#edmodo, #google, #istation, #thinkCentral, #discoveryEd").removeClass("hover");
	});

	$("#istation").mouseenter(function(){
		$("#edmodo, #ttm, #google, #thinkCentral, #discoveryEd").addClass("hover");
	});
	$("#istation").mouseleave(function(){
		$("#edmodo, #ttm, #google, #thinkCentral, #discoveryEd").removeClass("hover");
	});

	$("#thinkCentral").mouseenter(function(){
		$("#edmodo, #ttm, #istation, #google, #discoveryEd").addClass("hover");
	});
	$("#thinkCentral").mouseleave(function(){
		$("#edmodo, #ttm, #istation, #google, #discoveryEd").removeClass("hover");
	});

	$("#discoveryEd").mouseenter(function(){
		$("#edmodo, #ttm, #istation, #thinkCentral, #google").addClass("hover");
	});
	$("#discoveryEd").mouseleave(function(){
		$("#edmodo, #ttm, #istation, #thinkCentral, #google").removeClass("hover");
	});



});