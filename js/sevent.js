// Created by weijiatan on 2016/07/26.
define(['jquery',"base"], function($, base){
	
	var Sevent = function(){
		var $goodsId = $("#goods_id");
		var $productId = $("#product_id");
		var obj = $('#group').find('li');
		var myAlert = new base.myAlert();
		var addCart = function(goods_id, products_id){
			$("#inp_good_id").val(goods_id);
		    $("#inp_product_id").val(products_id);
		    // $.ajax({
		    //     type: "post",
		    //     url: $('#buy_form').attr('action'),
		    //     data:$('#buy_form').serialize(),
		    //     success: function (re) {
		    //     	myAlert.tips('添加成功');
		    //     },
		    //     error: function (XMLHttpRequest, textStatus, errorThrown) {
		    //     }
		    // });
		}

		var addSome = function(){
			if ($goodsId.val() =='' || $productId.val() =='') {
		        myAlert.tips('请先选择规格');
		        return false;
		    }
		    $(".selDialog").hide();
		    $("#dialogBg").hide();
		    obj.css("border","1px solid #fff");
		    addCart($goodsId.val(), $productId.val());
		}

		//选择型号
		var chooseSize = function(ind){
		    switch(ind){
		        case 1:
		            $goodsId.val("110");
		            $productId.val("614");
		            break;
		        case 2:
		            $goodsId.val("110");
		            $productId.val("615");
		            break;
		        default :break;
		    }
		}

		var _init = function(){

			// 弹窗选中变色
			obj.on('click',function(){
				$(this).css("border","1px solid #ff4444").siblings().css("border","1px solid #fff");
				var num = parseInt($(this).attr('data'))
				chooseSize(num);
			})

			//恒温淋浴器弹框
		    $("#btn3").click(function(){
		        $(".selDialog").show();
		        $("#dialogBg").show();
		        $goodsId.val("");
		        $productId.val("");
		    });

		    //关闭弹框
		    $(".selDialog .close,#dialogBg").click(function(){
		        $(".selDialog").hide();
		        $("#dialogBg").hide();
		        obj.css("border","1px solid #fff");
		    });

			// 弹窗加入购物车
			$('#selAction').on('click',function(){
				addSome();
			})

			// 无型号，直接加入购物车
			$('.noDia').on('click',function(){
				var goodsId = parseInt($(this).attr('data-goods'));
				var productsId = parseInt($(this).attr('data-products'));
				addCart(goodsId,productsId);
				myAlert.tips('添加成功');
			})
		}
		_init();
	}

	return {
		Sevent : Sevent
	}
});