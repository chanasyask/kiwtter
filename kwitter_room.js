
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyB_j0j-Ydd2j_Auu2cC3d7lXxYtp6jSpuA",
  authDomain: "kwitter-2a172.firebaseapp.com",
  databaseURL: "https://kwitter-2a172-default-rtdb.firebaseio.com",
  projectId: "kwitter-2a172",
  storageBucket: "kwitter-2a172.appspot.com",
  messagingSenderId: "188000308414",
  appId: "1:188000308414:web:b73152df2081a30a67a2ef"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
