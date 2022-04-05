// Eve & Villanelle think they are in love, but around where they live, 
// they will only know once they pick a flower each. 

// If one of the flowers has an even number of petals and the other has an 
// odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and 
// return true if they are in love and false if they aren't.

function areTheyInLove(flowerOne, flowerTwo)   {
     if (((flowerOne % 2 === 0) && (flowerTwo % 2 !== 0)) || ((flowerOne %2 !==0) && (flowerTwo %2 === 0))) 
     {
         console.log("In love");
         console.log(true);
     } else {
         console.log("Notinlove");
         console.log(false);
     }
}

areTheyInLove(2, 4);
areTheyInLove(2, 3);
areTheyInLove(7, 2);

// test result