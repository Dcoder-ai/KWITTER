var firebaseConfig = {
      apiKey: "AIzaSyAZ0jyldkn8C-udMlbSc9rRH_x46tPI7v0",
      authDomain: "kwitter-5a333.firebaseapp.com",
      databaseURL: "https://kwitter-5a333-default-rtdb.firebaseio.com",
      projectId: "kwitter-5a333",
      storageBucket: "kwitter-5a333.appspot.com",
      messagingSenderId: "513158859578",
      appId: "1:513158859578:web:c74981f5fca3b037259e03",
      measurementId: "G-533XZJFRLB"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name1  = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name1 + "!";


  function addRoom() {
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"
});
localStorage.setItem("room_name" ,  room_name);

window.location = "kwitter_page.html";

  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - " + Room_names);
       row = "<div class = 'room_name' id = "+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+ Room_names+ "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      
       //End code
      });});}
getData();


function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
   window.location = "index.html";
}