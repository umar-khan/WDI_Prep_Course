// E1
for (var i=1; i<=100; i++) {
    console.log(i);
}

// E2
for (var i=0; i<7; i++) {
    console.log( "#".repeat(i+1));
}

// E3
for (var i=1; i<=100; i++) {
    if ( (i%5==0) && (i%3==0) ) {
        console.log("fizzbuzz");
    } else if ( (i%5==0) ) {
        console.log("fizz");
    } else if ( (i%3==0) ) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}

// E4
var baseHashes = "# # # #";
var outputString = "";
for (var i=0; i<8; i++) {

    if ( i%2 == 0 ) {
        outputString += baseHashes + " \n";
    } else {
        outputString += " " + baseHashes + "\n";
    }


}

    console.log(outputString);

