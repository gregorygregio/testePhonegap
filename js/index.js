document.addEventListener('deviceready', onDeviceReady, false);


function onDeviceReady() {
	console.log("device ready")
  document.getElementById("titulo").value = "javascript funcionando";
  alert("device ready")
}
