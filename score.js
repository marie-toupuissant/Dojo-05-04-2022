// Write a function that takes such collection and counts the points of our team in the championship. 
// Rules for counting points for each match:

//     if x>y - 3 points
//     if x<y - 0 point
//     if x=y - 1 point


function totalScore(games){
    let score = 0;
    
    games.map(item => {
       const array = item.split(':');
         console.log(array);

        if (array[0]>array[1]){
            score +=3; 
            
        }else{
            if(array[0] === array[1]){
                score ++;
            }
        }
     })
     return console.log(score);
    }

$games1 = ['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']; // 30
$games2 = ['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4']; // 10
$games3 = ['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4']; // 0
$games4 = ['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4']; // 15
$games5 = ['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4']; // 12

totalScore($games1);
totalScore($games2);
totalScore($games3);
totalScore($games4);
totalScore($games5);


// test the method
// var_dump();