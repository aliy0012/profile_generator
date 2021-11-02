const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {};

rl.question("What's your name? Nicknames are also acceptable : ", (name) => {
  answers.name = name;
    rl.question("What's an activity you like doing? : ", (hobby) => {
      answers.hobby = hobby;
      rl.question("What do you listen to while doing that? : ", (music) => {
        answers.music = music;
        rl.question("Which meal is your favourite? : ", (food) => {
          answers.food = food;
          rl.question("What's your favourite thing to eat for that meal? : ", (meal) => {
            answers.meal = meal;
            rl.question("Which sport is your absolute favourite? : ", (sport) => {
              answers.sport = sport;
              rl.question("What is your superpower? In a few words, tell us what you are amazing at : ", (superPower) => {
                answers.superPower = superPower;
                rl.close();

                console.log('\nMy name is ' + answers.name + ', my hobby is ' + answers.hobby +
                            ". I love to listen " + answers.music + ", and I like to eat " +
                            answers.food + ". My favorite meal is " + answers.meal + ". I love to play " +
                            answers.sport + " and my superpower is " + answers.superPower);

              });
            });
          });
        });
      });
    });
});    

    
  
  