document.addEventListener('deviceready', onDeviceReady, false);


function onDeviceReady() {
	console.log("device ready");

	jQuery("#testeApi").click(function(){
		var root = 'https://jsonplaceholder.typicode.com';

		jQuery.ajax({
		  url: root + '/posts/1',
		  type: 'GET',
			dataType: "json",
      crossDomain: true,
			success: function(data){
				console.log(data);
				jQuery("#testeSpan").text(data.body)
			},
			error:function (err) {
				alert("Ocorreu um erro");
			}
		})


	})
}

// var root = 'https://jsonplaceholder.typicode.com';
//
// $.ajax({
//   url: root + '/posts/1',
//   method: 'GET'
// }).then(function(data) {
//   console.log(data);
// });
