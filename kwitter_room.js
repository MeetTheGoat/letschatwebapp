var firebaseConfig = {
    apiKey: "AIzaSyBZp_1c2gi2GAK04BgOgi7-DePeghXo51I",
    authDomain: "twitter-96793.firebaseapp.com",
    databaseURL: "https://twitter-96793-default-rtdb.firebaseio.com",
    projectId: "twitter-96793",
    storageBucket: "twitter-96793.appspot.com",
    messagingSenderId: "578437370558",
    appId: "1:578437370558:web:3cf668a08c67a82ada84ef",
    measurementId: "G-14NG0Y9B0G"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name - localStorage.getItem("user_name");
document.getElementById("h3user_name").innerHTML="Welcome" + user_name + "!";

function addRoom() {
room_name=document.getElementById("room_name").value;    
firebase.database().ref("/").child("room_name").update ({
    purpose : "adding room name"
});   
}

    localStorage.setItem("room_name", room_name);
    window.location = "3kwitter_page.html";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log ("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redrectToRoomName(this.id)' >#"+Room_names +"</div>==<hr>";
    document.getElementById("output").innerHTML += row;
});
});

}
getData();

function redrectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout () {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}