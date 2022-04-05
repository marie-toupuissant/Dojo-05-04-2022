// Écrire un programme qui renvoie :
// 1 - "fizz" dans le cas ou le nombre saisi en paramètre de la fonction est un multiple de 3
// 2 - "buzz" dans le cas ou le nombre saisi en paramètre de la fonction est un multiple de 5
// 3 - "fizzbuzz" dans le cas ou le nombre saisi est à la fois un multiple de 3 et de 5
// 4 - Le nombre dans le cas ou ce dernier est ni un multiple de 3, ni un multiple de 5

function fizzbuzz(number) {
    if (number % 3 === 0 && number % 5 === 0)
    {
        console.log("fizzbuzz");
    } else {
        if (number % 3 === 0) {
            console.log("fizz");
        } else {
            if (number % 5 === 0) {
            console.log("buzz");
            } else {
                console.log(number);
            }
        } 
    }

}
fizzbuzz(3);
fizzbuzz(5);
fizzbuzz(15);
fizzbuzz(8);

// tester la méthode à l'aide de var_dump()
// var_dump(fizzbuz(1));
// var_dump(fizzbuz(5));
// var_dump(fizzbuz(15));
// var_dump(fizzbuz(25));
// var_dump(fizzbuz(9));
