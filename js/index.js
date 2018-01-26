document.addEventListener('deviceready', onDeviceReady, false);

var api = 'https://jsonplaceholder.typicode.com';

var template = jQuery("#userPillTemplate").clone();

var userClick = function(){
	var $this = jQuery(this);
	$this.find(".card-title").text("username: " + 1);


	jQuery(".card-body:visible").slideUp(300);
	$this.find(".card-body").slideDown(300);


	// var id = $this.find(".userId").text();

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
				userPillList.push( { ...user, element: pill } );
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
