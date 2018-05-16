/*
- Guessing Game
- 5 y/n questions
- answers are y/n or yes/no with .toUpperCase() or .toLowerCase()
- console.log messages
- style with css
- add, commit, push
Questions about me:
3. During introductions on the first day of class, I mentioned that I play a musical instrument.  Was that instrument the electric guitar? -- NO!  Close, but it's the electric bass.
2. Is my all time favorite movie The Godfather? -- NO!  I like some levity with my movie watching.  My all-time favorite is The Big Lebowski.
3. Have I ever been to New York City? -- YES!  I spent a week and a half in New York City as a part of Fleet Week while in the military.
4. Do I have any pets?  -- NO!  I love animals but do not have a pet at the moment.  My roommates have a dog, 2 cats, and 5 chickens though, so I'm covered on animal companionship right now.
5. Is is true that my mom I have driven across the country in 2 and a half days? -- YES!  My last duty station was in North Carolina and I needed to get home somehow!
*/

'use strict';

var points = 0;

var user = prompt('Hello, welcome the the Chris Kozlowski Guessing Game!  Please enter your name');

alert('Hello, ' + user + '!  The questions will begin after this alert.  All questions have yes or no answers, so please answer with yes/no or y/n.  Correct answers are worth 1 point each.  Press OK to begin!');

var answer1 = prompt('During introductions on the first day of class, I mentioned that I play a musical instrument.  Was that instrument the electric guitar?').toLowerCase();

if (answer1 === 'no' || answer1 === 'n') {
  alert('Correct!  +1 point');
  points++;
}
else {
  alert('Incorrect :(');
}

alert('Electric guitar is close, but the I play the electric bass.');

console.log('Question 1: During introductions on the first day of class, I mentioned that I play a musical instrument.  Was that instrument the electric guitar?');
console.log('Answered: ' + answer1);
console.log('Cumulative Points: ' + points);

var answer2 = prompt('Is my all time favorite movie The Godfather?').toLowerCase();

if (answer2 === 'no' || answer2 === 'n') {
  alert('Correct!  +1 point');
  points++;
}
else {
  alert('Incorrect :(');
}

alert('That\'s a good one, but I usually prefer some levity with my movie watching.  My all-time favorite is The Big Lebowski.');

console.log('Question 2: Is my all time favorite movie The Godfather?');
console.log('Answered: ' + answer2);
console.log('Cumulative Points: ' + points);

var answer3 = prompt('Have I ever been to New York City?').toLowerCase();

if (answer3 === 'yes' || answer3 === 'y') {
  alert('Correct!  +1 point');
  points++;
}
else {
  alert('Incorrect :(');
}

alert('I spent a week and a half in New York City as a part of Fleet Week while in the military.');

console.log('Question 3: Have I ever been to New York City?');
console.log('Answered: ' + answer3);
console.log('Cumulative Points: ' + points);

var answer4 = prompt('Do I have any pets?').toLowerCase();

if (answer4 === 'no' || answer4 === 'n') {
  alert('Correct!  +1 point');
  points++;
}
else {
  alert('Incorrect :(');
}

alert('I love animals but do not have a pet at the moment.  My roommates have a dog, 2 cats, and 5 chickens though, so I\'m covered on animal companionship right now.');

console.log('Question 4: Do I have any pets?');
console.log('Answered: ' + answer4);
console.log('Cumulative Points: ' + points);

var answer5 = prompt('Is is true that my mom and I have driven across the country?').toLowerCase();

if (answer5 === 'yes' || answer5 === 'y') {
  alert('Correct!  +1 point');
  points++;
}
else {
  alert('Incorrect :(');
}

alert('My last duty station was in North Carolina and I needed to get home somehow!  We did the trip in only 2 and a half days.');

console.log('Question 5: Is is true that my mom and I have driven across the country?');
console.log('Answered: ' + answer5);
console.log('Cumulative Points: ' + points);

alert('Great job so far, ' + user + '!  Your score so far is ' + points + ' points.  Next up is number guessing!  On the following prompt I will give you a question with a numeric answer.  If you get it correct you will recieve a point, but you will only have 4 tries.  Guess carefully!');

var answer6 = 33;
var attempts = 4;
var guess = parseInt(prompt('How old am I?', 'Guess a number'));

while (attempts >= 1) {
  if (guess > answer6) {
    attempts--;
    guess = parseInt(prompt('Too old, please guess again!  You have ' + attempts + ' attempts remaining.', 'type a number'));
    console.log ('Guess: ' + guess + '; Attempts Remaining: ' + attempts + '; Cumulative Points: ' + points);
  }
  else if (guess < answer6) {
    attempts--;
    guess = parseInt(prompt('Too young, please guess again!  You have ' + attempts + ' attempts remaining.', 'type a number'));
    console.log ('Guess: ' + guess + '; Attempts Remaining: ' + attempts + '; Cumulative Points: ' + points);
  }
  else if (guess === answer6) {
    alert('Correct!  +1 point');
    points++;
    console.log ('Guess: ' + guess + '; Attempts Remaining: ' + attempts + '; Cumulative Points: ' + points);
    break;
  }
}

if (attempts === 1 && guess !== answer6) {
  alert('All out of attampts, dang! The answer was ' + answer6 + '.');
}

var statesLived = ['oregon', 'california', 'north carolina'];

var answer7 = prompt('Next, please guess a state I\'ve lived in other than Washington.  You have 6 tries to get one of them.', 'Please type the full state name.').toLowerCase();

console.log('Answered: ' + answer7);

var tries = 5;

for (var index = 0; index <= 5; index++) {
  if (answer7 === statesLived[index]) {
    alert('That\'s correct!  Other than Washington, I\'ve lived in California, Oregon, and North Carolina.');
    break;
  }
  else {
    tries--;
    answer7 = prompt('No, that\' not one of them.  ' + user + ', you have ' + (tries + 1) + ' guesses remaining.');
  }
}

if (tries === 0) {
  alert('Sorry, out of guesses!');
}

alert('This concludes the Chris Kozlowski Guessing Game!  Your final score is: ' + points);
console.log('Total Points: ' + points);