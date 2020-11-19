var firebaseConfig = {
  apiKey: "AIzaSyBfa23ikoLuFQzMH8-2tccfHw8q2Yinlqk",
  authDomain: "groovehero-62b58.firebaseapp.com",
  databaseURL: "https://groovehero-62b58.firebaseio.com",
  projectId: "groovehero-62b58",
  storageBucket: "groovehero-62b58.appspot.com",
  messagingSenderId: "1032642603322",
  appId: "1:1032642603322:web:8369c6cdc3cec0e4db0803",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth.Auth.Persistence.LOCAL;

$("#btn-login").click(function () {
  var email = $("#email").val();
  var password = $("#password").val();

  if (email != "" && password != "") {
    var result = firebase.auth().signInWithEmailAndPassword(email, password);

    result.catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);
      window.alert("Message :" + errorMessage);
    });
  } else {
    window.alert("Form is incomplete. Please fill out all fields!");
  }
});

$("#btn-signup").click(function () {
  var email = $("#email").val();
  var password = $("#password").val();
  var cPassword = $("#confirmpassword").val();

  if (email != "" && password != "" && confirmpassword != "") {
    if (password == cPassword) {
      var result = firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      result.catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
        window.alert("Message :" + errorMessage);
      });
    } else {
      window.alert("Password does not match!");
    }
  } else {
    window.alert("Form is incomplete. Please fill out all fields!");
  }
});

$("#btn-logout").click(function () {
  firebase.auth().signOut();
});
