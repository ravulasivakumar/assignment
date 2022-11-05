// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJfC48o9IcPaU2fgYSgDxfSOeteFI9Rus",
    authDomain: "assignment-dde1d.firebaseapp.com",
    projectId: "assignment-dde1d",
    storageBucket: "assignment-dde1d.appspot.com",
    messagingSenderId: "224681910220",
    appId: "1:224681910220:web:85ba8d2b1d029a71400769"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore();

  console.log(db)

const submit = document.getElementById("submit")
submit.addEventListener("click", registerUser)

function registerUser(e){
    e.preventDefault()
    console.log("register")
    let email = document.getElementById("email").value
    let idnum=document.getElementById("idnum").value
    let name=document.getElementById("name").value
    let password=document.getElementById("password").value
    db.collection('users').doc().set({
        "email":email,
        "idnum":idnum,
        "name": name,
        "password":password
    }).then(()=> {
        alert("Registration Successful")
        window.location.reload(true)
    })
}

