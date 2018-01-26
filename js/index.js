document.addEventListener('deviceready', onDeviceReady, false);

var api = 'https://jsonplaceholder.typicode.com';

var template = jQuery("#userPillTemplate").clone();

var userClick = function(){
	var $this = jQuery(this);

	var id = $this.find(".userId").text();

	var cardText = $this.find(".card-text");



	var cardBody =  $this.find(".card-body");

	if( cardBody.is(":visible") ){
		cardBody.slideUp(300);
	} else {
		getListOf("users/"+id, function(data) {
			cardText.find(".user-email").text(data.email);
			cardText.find(".user-username").text(data.username);
			cardText.find(".user-phone").text(data.phone);
		});
		jQuery(".card-body:visible").slideUp(300);
		cardBody.slideDown(300);
	}




// alert(id)

}

var userPillList = [];

function getListOf(thing, _success){
	jQuery.ajax({
	  url: api + '/'+thing,
	  method: 'GET',
		success: _success
	});
}


String.prototype.has = function(anotherString){
		return ( this.toLowerCase().indexOf(anotherString.toLowerCase()) > -1 );
}

Number.prototype.has = function(anotherString){
		return ( this.toString().indexOf(anotherString) > -1 );
}

function onDeviceReady() {
	getListOf("users", function(data) {
	  	data.forEach(function(user){
				var pill = jQuery(template.html().replace("{{:userId}}", user.id).replace("{{:userName}}", user.name));
				pill.click(userClick);
				userPillList.push( { id: user.id, name: user.name, element: pill } );
				jQuery("#listOfUsers").append(pill);
			})
	});


	jQuery("#searchBar").keyup( function(){
			var $this = jQuery(this);
			var valueToSearchFor = $this.val();

			userPillList.forEach( function(userPill){
					if( userPill.name.has(valueToSearchFor) || userPill.id.has(valueToSearchFor))
						userPill.element.show();
					else
						userPill.element.hide();
			})
	})

}
