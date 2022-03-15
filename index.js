// function Monday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }

//   function Tuesday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//   }

//   function Wednesday() {
//     console.log("Go for a five-mile run");
//     console.log("Go for a five-mile run");
//   }

//   function Thursday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }

//   function Friday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//   };

//   function runFiveMiles(){
//     // console.log("Go for a five-mile run");
//   };

//   function liftWeights(){
//     //   console.log('pump iron') 
//   }
//   function swimFortyLaps(){
//     // console.log('Swim 40 laps') 
// };


// function Monday(){
//     exerciseRoutine(liftWeights)
// }

// function exerciseRoutine(postRunActivity){
//     runFiveMiles();
//     postRunActivity();
// }
// Monday();


// exerciseRoutine(() => console.log('stretch, work that core!'));

// // console.log(exerciseRoutine())

// function morningRoutine(exercise){
//     let breakfast;
//     if (exercise === liftWeights){
//         breakfast = "protein bar";
//     }else if (exercise === swimFortyLaps){
//         breakfast = "kale smoothie";
//     }else {
//         breakfast = "granola";
//     }
//     exerciseRoutine(exercise);
//     return function (){
//         console.log(`NOM NOM, this ${breakfast} is delicious!`);
//     }
// };

// const afterExercise = morningRoutine(liftWeights)

// afterExercise()

function receivesAFunction(playMusic){
    playMusic();
};

function returnsANamedFunction(){
    function spoilMeGood(){
        return "ooo baby do you know what I'm worth?"
    };
    return spoilMeGood;
    };

function returnsAnAnonymousFunction(){
    return function (){
        console.log("hi!")
    }
}