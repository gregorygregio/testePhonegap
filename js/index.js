document.addEventListener('deviceready', onDeviceReady, false);

var criarObjetoPaginacao = function(){
	var root = 'https://jsonplaceholder.typicode.com';

	var _getPageData = (id) => {
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

	var objetoPaginacao = criarObjetoPaginacao();

	jQuery("#btnProximo").click(function(){
		objetoPaginacao.proximo();
	})

	jQuery("#btnAnterior").click(function(){
		objetoPaginacao.anterior();
	})





	objetoPaginacao.proximo();
}
