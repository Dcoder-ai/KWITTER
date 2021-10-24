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

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}