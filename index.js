var firebase = require ('firebase');

firebase.initializeApp({
    serviceAccount : "./projek psbo-452391abaa3b.json",
    databaseURL :"https://projek-psbo.firebaseio.com/"
});

var ref = firebase.database().ref('projek-psbo');
console.log(ref);

