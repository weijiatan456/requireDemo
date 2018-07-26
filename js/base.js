// Created by weijiatan on 2016/07/26.
//提示，公告
define(['jquery'], function($){
	// if (typeof myAlert !=='object'){
	// 	var myAlert = {};
	// };
	// myAlert.tips = function(msg){
 //        msg = msg || "错误！";
 //        var msgBox = '<div class="pop_msg"><p class="msg-warn">'+ msg +'</p></div>';
 //        if($(".pop_msg").length == 0){
 //        	$('body').append(msgBox);
 //        	var tempW = $(".pop_msg").innerWidth();
	//         $(".pop_msg").css({
	//             'margin-left':function(){
	//                 return -parseFloat(tempW)/2;
	//             }
	//         })
	//         setTimeout(function(){
	//             $(".pop_msg").remove();
	//         },1500);
	//     }
	// };

	var myAlert = function(){};

	myAlert.prototype = {
		tips:function(msg){
			msg = msg || "错误！";
	        var msgBox = '<div class="pop_msg"><p class="msg-warn">'+ msg +'</p></div>';
	        if($(".pop_msg").length == 0){
	        	$('body').append(msgBox);
	        	var tempW = $(".pop_msg").innerWidth();
		        $(".pop_msg").css({
		            'margin-left':function(){
		                return -parseFloat(tempW)/2;
		            }
		        })
		        setTimeout(function(){
		            $(".pop_msg").remove();
		        },1500);
		    }
		},
		test:function(msg){
			alert(msg);
		}
	}

	return {
		myAlert : myAlert
	};
});