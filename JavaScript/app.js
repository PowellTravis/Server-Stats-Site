console.log("Hello World!");

function onSuccess(res){
  console.log('AJAX: ' + res.message + ',' + res.status);
}
function onError(res){
  console.log('AJAX Error:' + res);
}

var token = '5867414966.1677ed0.5bdc97a97b48463d81498d94fc229e89';
var clientID = 'c411debdbee84d5fa853b391af6ca043';
var UserID = '5867414966';

fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token, {
method: 'GET',
headers: {
  'Content-Type': 'text/plain'
  }

}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('What the HELL GraphQL!?:', response.data["0"].images.standard_resolution));

//
// console.log(response);
//
// var response = res.json();
//
// $(document).ready(function(){
//
//
//
//   $('.instafeed').attr('src', response.data["0"].images.standard_resolution.url );
//
// }) //Close document.ready
