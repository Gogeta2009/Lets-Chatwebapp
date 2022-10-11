user_name = localStorage.getItem("user_name") ;
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDzI6oMlI2BwwcUZuTD27MaNfZpwZIsgy0",
      authDomain: "kwitterapp-bf75c.firebaseapp.com",
      databaseURL: "https://kwitterapp-bf75c-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-bf75c",
      storageBucket: "kwitterapp-bf75c.appspot.com",
      messagingSenderId: "970668754608",
      appId: "1:970668754608:web:30e4da3aeb579026641d75",
      measurementId: "G-PS9R57D4RF"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room name="+Room_names) ;
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>" ;
       document.getElementById("output").innerHTML+=row ;
      //End code
      });});}
getData();
function addroom() {
      room_name = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name) ;
     window.location = "kwitter_page.html" ;
}

function logout() {
      localStorage.removeItem("user_name") ;
      localStorage.removeItem("room_name") ;
      window.location="index.html"
}