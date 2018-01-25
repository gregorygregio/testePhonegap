document.addEventListener('deviceready', onDeviceReady, false);

var api = 'https://jsonplaceholder.typicode.com';

var template = jQuery("#userPillTemplate").clone();

function getListOf(thing){
	jQuery.ajax({
	  url: api + '/'+thing,
	  method: 'GET'
	}).then(function(data) {
	  data.forEach(function(user){
			var pill = template.html().replace("{{:userId}}", user.id).replace("{{:userName}}", user.name);
			jQuery("#listOfUsers").append(pill);
		})
	});
}


function onDeviceReady() {
	getListOf("users")
}
