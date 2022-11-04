var readlineSync = require("readline-sync");
var emoji = require("node-emoji");

const chalk = require("chalk");

var userName = readlineSync.question("What's your name?\n");

var ch = readlineSync.question("Hi " + chalk.blue(userName) + "\nShall we play a game?("+chalk.green("Y")+"/"+chalk.red("N")+")");

var score = 0;

/*var flipQ =
  {
    question: " Which of the following phrases have been commonly applied to Batman?",
      a: "All of These",
      b: "Caped Crusader",
      c: "World's Greatest Detective",
      d: "Dark Knight",
      correctanswer: "A",
      prize: 0,
      explanation: "Dark Knight. Caped Crusader. World's Greatest Detective. Batman has been called all of these."
  }*/

var wallOfFame =
  [
    {
      name: "Ameya",
      score: 70000000
    },

    {
      name: "Mohak",
      score: 10000000
    },

    {
      name: "Adish",
      score: 250000
    },

    {
      name: "Aniket",
      score: 3000
    },

    {
      name: "Siddharth",
      score: 640000
    }

  ];

var questions =
  [
    {
      question: "What super villain once broke Batman's back, leaving him crippled and wheelchair-bound?",
      a: "Joker",
      b: "Bane",
      c: "Killer Croc",
      d: "Ra's Al Ghul",
      correctanswer: "B",
      prize: 1000,
      explanation: "After deducing Batman's secret identity and invading the sanctity of Wayne Manor and the Batcave, Bane not only defeated Batman, but broke his back, leaving him crippled and wheelchair-bound. Helpless, Bruce Wayne left his costume and crime-fighting duties to Jean Paul Valley and set out on an arduous quest to regain his strength and will to fight. Eventually, after much rehabilitation and training with the beautiful but deadly Lady Shiva, Wayne returned to Gotham to reclaim the mantle of the Dark Knight."
    },

    {
      question: "What were the names of Bruce Wayne's parents?",
      a: "Geroge and Elaine",
      b: "Thomas and Martha",
      c: "James and Elizabeth",
      d: "Wayne and Alice",
      correctanswer: "B",
      prize: 2000,
      explanation: "As a child, Bruce Wayne witnessed the gruesome murder of his parents, Thomas and Martha Wayne."
    },

    {
      question: "Who is credited with creating Batman?",
      a: "Jerry Siegel",
      b: "Jack Kirby",
      c: "Bob Kane",
      d: "Joe Shuster",
      correctanswer: "C",
      prize: 3000,
      explanation: "Although he worked with Bill Finger on the original comics, Bob Kane is generally credited with creating the character of Batman. He was a twenty-two year old comic book artist when he was charged with the task of creating another superhero in the mold of the DC phenomenon, Superman. According to Kane, the original concept for Batman came from three sources: a Leonardo da Vinci sketch of a man trying to fly with bat-like wings, a 1930s movie titled The Bat whisperer, and the masked heroes Zorro and The Shadow. Batman made his first appearance in Detective Comics #27 (May, 1939)."
    },

    {
      question: "What Batman villain formerly worked as a zoologist?",
      a: "Manbat",
      b: "Poison Ivy",
      c: "Killer Croc",
      d: "The Penguin",
      correctanswer: "A",
      prize: 5000,
      explanation: "Scientist Kirk Langstrom was employed as a Zoologist at the Gotham City Zoo where he experimented with bat mutigene to create a serum to replicate the creatures' long life. After testing the serum on himself, Langstrom was transformed into the vicious ManBat."
    },

    {
      question: "What year was the character of Robin first introduced?",
      a: "1960",
      b: "1950",
      c: "1970",
      d: "1940",
      correctanswer: "D",
      prize: 10000,
      explanation: "Bob Kane introduced Batman's young sidekick, Robin the Boy Wonder, in 1940 to give Batman someone to talk to. Robin made his first appearance in Detective Comics #38 (April, 1940)."
    },

    {
      question: "The original Batgirl was related to what familiar Batman character?",
      a: "Commissioner Gordon",
      b: "Batwoman",
      c: "The Joker",
      d: "Alfred",
      correctanswer: "B",
      prize: 20000,
      explanation: "The original Batgirl (first introduced in Batman #139) was Betty Kane, the niece of Batwoman (Kathy Kane). A later version of Batgirl (Barbara Gordon) was the daughter of police Commissioner James Gordon."
    },

    {
      question: "Which of these Bat-villains was introduced first?",
      a: "The Riddler",
      b: "Mr. Freeze",
      c: "Catwoman",
      d: "The Penguin",
      correctanswer: "C",
      prize: 40000,
      explanation: "Catwoman made her first appearance in Batman #1 (Spring, 1940). The Penguin (1941), The Riddler (1948), and Mr. Freeze (1959) were all introduced later."
    },

    {
      question: "Which of the following characters did Bruce Wayne have a son with?",
      a: "Diana Prince(Wonder Woman)",
      b: "Poison Ivy",
      c: "Talia Al Ghul",
      d: "Catwoman",
      correctanswer: "C",
      prize: 80000,
      explanation: "Talia told Batman she'd had a miscarriage, but actually left the child to be raised by the League of Assassins."
    },

    {
      question: "What former District Attorney became the villain known as Two-Face?",
      a: "Edward Nygma",
      b: "Floyd Lawton",
      c: "Harvey Dent",
      d: "Jason Blood",
      correctanswer: "C",
      prize: 160000,
      explanation: "Once an upstanding Gotham City district attorney, Harvey Dent was driven insane after a mob boss threw acidic chemicals at him during a trial, hideously scarring the left side of his face. He subsequently adopted the 'Two-Face' persona, becoming a criminal obsessed with duality."
    },

    {
      question: "Who is the Joker's accomplice and lover?",
      a: "Scarecrow",
      b: "Poison Ivy",
      c: "Harley Quinn",
      d: "Enchantress",
      correctanswer: "C",
      prize: 320000,
      explanation: "Harley Quinn met the Joker while working as a psychiatrist at Arkham Asylum. During therapy sessions, she fell in love with him and eventually helped him escape."
    },

    {
      question: "What Batman villain is known for committing crimes that correspond with holidays?",
      a: "Calendar Man",
      b: "Azazel",
      c: "Doomsday",
      d: "Parallax",
      correctanswer: "A",
      prize: 640000,
      explanation: "Calendar Man is known for committing crimes that correspond with holidays and often wears costumes to correlate with the date of the designated crime. Calendar Man first appeared in Detective Comics #259."
    },

    {
      question: "What Batman villain lost his beloved wife Nora to a terminal illness?",
      a: "Ra's Al Ghul",
      b: "Scarecrow",
      c: "Mr. Freeze",
      d: "Two-Face",
      correctanswer: "C",
      prize: 1250000,
      explanation: "When his beloved wife fell terminally ill, Victor Fries (Mr. Freeze) obsessively searched for a way to cure her, until an industrial accident caused by a greedy business executive turned him into a mutant who can only survive in subzero temperatures."
    },

    {
      question: "What member of the Batman family became Oracle?",
      a: "Batwoman",
      b: "Batgirl",
      c: "Huntress",
      d: "Catwoman",
      correctanswer: "B",
      prize: 2500000,
      explanation: "After being shot by the Joker and left paraplegic, Batgirl (Barbara Gordon) reinvents herself as the computer expert and information broker Oracle."
    },

    {
      question: "Who killed Jason Todd (the second Robin)?",
      a: "Joker",
      b: "Two-Face",
      c: "League of Shadows",
      d: "Bane",
      correctanswer: "A",
      prize: 5000000,
      explanation: "For 1988's 'Batman: A Death in the Family' storyline, DC Comics held a telephone poll to determine whether or not Robin would die at the hands of the Joker. He was killed off by a margin of 72 votes (5,343 for, 5,271 against). After Jason is killed by the Joker and resurrected in the Lazarus Pit, he goes on to become the Red Hood."
    },

    {
      question: "What is the original Robin's secret identity?",
      a: "Damian Wayne",
      b: "Jason Todd",
      c: "Dick Grayson",
      d: "Tim Drake",
      correctanswer: "C",
      prize: 10000000,
      explanation: "Dick Grayson first appeared in Detective Comics #38 in April 1940 as Robin the Boy Wonder. He would later take other superhero names including Nightwing and Agent 37."
    },

    {
      question: "When the Scarecrow used his fear gas on the Joker, what was the Clown Prince of Crime's greatest fear?",
      a: "Someone else killing batman",
      b: "Nothing",
      c: "Falling into a chemical vat",
      d: "Being Committed to Arkham Asylum",
      correctanswer: "B",
      prize: 70000000,
      explanation: "In Detective Comics #664, Scarecrow betrays Joker by spraying him with fear gas, but it has absolutely no effect; Joker then beats Scarecrow senseless with a chair."
    },


  ];


function game(ch) {
  if (ch.toUpperCase() === "Y") {
    console.log("\n\nWelcome to KBC-Kaun Banega Crorepati-Batman Edition!\nYou stand to win a staggering ₹7 Crore!!\n\nBefore we begin, let me explain the rules:\n There are a total of 16 questions. To Win 7 crores, you must answer all of them correctly. Each correct answer will yield you a certain amount as follows:\n\n"+chalk.yellow("16. 7 Crores\n 15. 1 Crore\n 14. 50,00,000\n 13. 25,00,000\n 12. 12,50,000\n 11. 6,40,000\n 10. 3,20,000\n  9. 1,60,000\n  8. 80,000\n  7. 40,000\n  6. 20,000\n  5. 10,000\n  4. 5,000\n  3. 3,000\n  2. 2000\n  1. 1000\n\n")+"The above shows the prize ladder. On answering question 1 correctly, you get ₹1000, on 2-2000 and so on and so forth.If you answer any question incorrectly, then you take home the amount that you've earned until now.\n For example, if you answer question 5 incorrectly, then you take home the amount next to question 4, i.e., ₹5,000.\nAt any point if you are unsure about an answer and would like to quit, you can do so by typing: quit in the terminal. Please note however, that only those that do not quit will end up on the leaderboard.\nIf you answer all 16 questions correctly, you get ₹7 Crore! So now that I've explained the game, let's play KBC-Batman Edition!\n\n(Note:Prize amounts are not cumulative)\n\n--------------------------------\n");
    for (var i = 0; i < questions.length; i++) 
    {
      var returncode= play(questions[i], i);
      if(returncode===0)
      {
        break;
      }

      else if(returncode===-1)
      {
        if(score==0)
        {
          console.log("You should've at least given it a try. Come back again later and try again!");
        }
        else{
          console.log("Thanks for playing. This was a tough question. You may not have been able to answer it, but you're still going home with ₹"+score);
        }
        
        process.exit(0);
      }
    }
 if (score===70000000)
 {
   console.log("Congratulations, you have won KBC-Batman Edition!!!"+emoji.get("partying_face")+emoji.get("partying_face")+emoji.get("partying_face")+emoji.get("partying_face")+emoji.get("partying_face")+emoji.get("partying_face")+emoji.get("partying_face"));
 }

   else if(score===0)
    {
      console.log("So Sorry, it seems like you're going home empty handed. Do come back and play anytime you wish though to win lots of money!"+emoji.get("moneybag")+emoji.get("moneybag")+emoji.get("moneybag"));
    }

    else
    {
    console.log("But don't be sad"+emoji.get("cry")+emoji.get("cry")+", as you're still taking home ₹" + score + "\n Better luck next time. Bye!");
    }
    
  }

  else if (ch.toUpperCase() === "N") {
    console.log("Maybe next time. Have a good day " + userName + "!\n");
    process.exit(0);
  }

  else {
    var annoy = emoji.get("unamused");
    console.log("Stop messing with me! " + annoy + annoy + annoy);
  }

}

function play(q, i) {
  var rc;
  console.log(chalk.blueBright("Question " + (i + 1) + " for ₹" + q.prize + ":\n"));
  var ans = readlineSync.question(chalk.magentaBright(q.question) + chalk.cyanBright("\nA." + q.a + "  B." + q.b + "  C." + q.c + "  D." + q.d + "\n"));

  if (ans.toUpperCase() === q.correctanswer) {
    score = q.prize;
    console.log(chalk.greenBright("Correct answer!\nYou have now reached ₹" + (score))+emoji.get("money_mouth_face")+emoji.get("money_mouth_face")+emoji.get("money_mouth_face"));
    rc=1;
  }
    else if(ans.toUpperCase()==="QUIT")
    {
      return -1;
    }

  else {
    console.log(chalk.red("Wrong answer!\nThe correct answer was " + q.correctanswer + "\nSorry, you lost."));

    rc=0;
  }

  console.log(chalk.yellow("\nExplanation:\n" + q.explanation + "\n\n----------------------------------------------------------------------------------------------"));
  return rc;
}


game(ch);


 function printWallOfFame(score)
   {
     if(score!=0)
     {
       console.log("Congratulations! Since you earned ₹"+score+" you've now been added to our hall of fame:"+emoji.get("partying_face")+emoji.get("partying_face")+emoji.get("partying_face")+"\n\n");

       userObj =
      {

        name: userName,
        score: score
        
      }

       wallOfFame.push(userObj);

       wallOfFame.sort((a,b) => {return b.score-a.score});

       console.table(wallOfFame);

       // console.log("Name\t\tPrize Amount\n\n");
       // for(var z=0;z<wallOfFame.length;z++)
       //   {
       //     console.log(wallOfFame[z].name+"\t\t"+wallOfFame[z].score);
       //   }
     }
   }

printWallOfFame(score);

/*
var lifeLines =
  [
    {
      name: "50-50",
      quantity: 1,
      lifeLineAction: function(){
        
      }
    },

    {
      name: "Double Dip",
      quantity: 1,
      lifeLineAction: function(){
        
      }
    },

    {
      name: "Flip",
      quantity: 1,
      lifeLineAction: function(){

        console.log("Flipped question is:\n");
        play(flipQ,i);

        
      }
    }
    
  ];

function saveMe()
  {
    console.log("You have the following lifelines left:");

    console.table(lifeLines);

   var ch=readlineSync.question("Choose a lifeline to use");
    
    for(var i=0;i<lifeLines.length;i++)
      {
        if(ch.toUpperCase()==lifeLines[i].toUpperCase())
        {
          if(lifeLines[i].quantity==0)
          {
            console.log("You are out of that lifeline");
          }

          else
          {
            lifeLines[i].quantity--;
            
          }
        }
      }
    
  }
*/