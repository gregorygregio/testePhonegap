document.addEventListener('deviceready', onDeviceReady, false);

var criarObjetoPaginacao = function(){
	var root = 'https://jsonplaceholder.typicode.com';

	var _getPageData = function(id){
		jQuery.ajax({
			url: root + '/posts/'+id,
			type: 'GET',
			dataType   : 'json',
			success: function(data){
				jQuery("#body").text(data.body)
				jQuery("#title").text(data.title)
			},
			error:function (err) {

				alert("Ocorreu um erro");
				jQuery("#body").text(JSON.stringify(err))
			}
		})
	}

	var _proximo = function(){
		_getPageData(this.page)
		this.page++;
	}

	var _anterior = function(){
		if(this.page > 1){
			_getPageData(this.page)
			this.page--;
		}
	}
	return {
		page:1,
		proximo:_proximo,
		anterior:_anterior
	}
}


function onDeviceReady() {
	console.log("device ready");
	alert("antes de criarObjetoPaginacao")
	var objetoPaginacao = criarObjetoPaginacao();
	alert("depois de criarObjetoPaginacao")
	jQuery("#btnProximo").click(function(){
		alert("btnProximo")
		objetoPaginacao.proximo();
	})

	jQuery("#btnAnterior").click(function(){
		alert("btnAnterior")
		objetoPaginacao.anterior();
	})




alert("antes da primeira chamada")
	objetoPaginacao.proximo();
}
