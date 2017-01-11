
//magic eightball

var numberofreplys = 3;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'

    if (choice == 1) {
        console.log("Your future looks grim");
    } else if (choice == 2) {
        console.log("Your future is uncertain");
    } else {
        console.log("Your future looks bright!");
    }

}

ask();


