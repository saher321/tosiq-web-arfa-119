printResult()
// declaration variable
// initialization of variable i=1
// condition // control flow
// increament / decreament
function printResult() {
    var i
    // for(i=1; i<=10; i++){
    //     if(i % 2 == 0){
    //         console.log(i)
    //     }
    // }
    // for(i=10; i>=1; i--){
    //     console.log(i)
    // }
    for (i=1; i<=10; i++){
        var res = "2 x " + i + " = " + (2*i)
        console.log(res)
    }
}

// i=1, 1<=10 :: true   => 1 , i+1
// i=2, 2<=10 :: true   => 2, i+1
// i=10, 10<=10 :: true => 10, i+1
// i=11, 11<=10 :: false => final result