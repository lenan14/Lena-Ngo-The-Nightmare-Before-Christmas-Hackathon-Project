const storyElement = document.getElementById('story');
const stepElement = document.getElementById('step');
const choicesElement = document.getElementById('choices');
const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const optionsDiv = document.getElementById('options');

let step = 1;

const steps = 
{
  1: 
  {
        story: 'Afraid to miss Christmas, you walked down a questionable path that laid next to you and soon reached the end, where an enormous door stood. A question suddenly popped up, "In the song "The Twelve Days of Christmas," what is given on the first day?" What do you choose?',
          choices: [
            {
              text: "A partridge in a pear tree",
              nextStep: 2
            },
            {
              text: "A turtle dove",
              nextStep: "end"
            }
          ]
  },
  2: 
  {
        story: 'Relieved that you did not poof into thin air, you opened the door and realized you just walked into a toy factory! Out of the corner of your eye, you see your gingerbread man running away, giggling. You started to run after it, but an elf stopped you to ask the next question: "In Home Alone 2: Lost in New York, what are the names of the "wet bandits" who try to rob Kevin again?"',
          choices: [
          {
            text: "Frank and Jim",
            nextStep: "end"
          },
          {
            text: "Harry and Marv",
            nextStep: 3
          }
          ]
  },
  3: 
  {
        story: 'You now found yourself at what seemed to be Santa Claus\'s workshop, and there he was, the troublesome gingerbread man was on Santa\'s seat! He told you that you must answer one last question before you could home. "What is the true meaning of Christmas?"',
          choices: [
            {
              text: "Being with loved ones and spreading Christmas cheer!",
              nextStep: "success"
            },
            {
              text: "All the gifts I get, of course!",
              nextStep: "end2"
            }
          ]
  },

        success: 
        {
          story: "Congratulations! The cheeky gingerbread man gave himself in and you were able to turn him back into a statue! You came home just in time to celebrate Christmas. Happy Holidays!",
          choices: []
        }
};

function startAdventure() 
{
  startButton.style.display = 'none';
  storyElement.style.display = 'none';
  optionsDiv.style.display = "block";
  showStep(step);
}

function showStep(stepNum)
{
  stepElement.textContent = '';
  choicesElement.innerHTML = ''; 

  const currentStep = steps[stepNum];
  
  if(currentStep)
  {
    stepElement.textContent = currentStep.story;
    currentStep.choices.forEach(choice => 
    {
    const button = document.createElement('button');
    button.textContent = choice.text;
    button.onclick = () => 
    {
      if(choice.nextStep === "end")
      {
        endGame();
      }
      else if(choice.nextStep === "end2")
      {
        endGame2();
      }
      else if(choice.nextStep === "success")
      {
        showSuccess();
      }
      else
      {
        step = choice.nextStep;
        showStep(step);
      }
    };
    choicesElement.appendChild(button);
    });
  }
}

function endGame()
{
  storyElement.textContent = "Man, and here I thought you knew your Christmas trivia. How can you call yourself a Christmas enthusiast? >:(";
  storyElement.style.display = 'block';
  restartButton.style.display = "block";
  stepElement.textContent = '';
  choicesElement.innerHTML = '';
}

function endGame2()
{
  storyElement.textContent = "You got your priorities all wrong! >:(";
  storyElement.style.display = 'block';
  restartButton.style.display = "block";
  stepElement.textContent = '';
  choicesElement.innerHTML = '';
}

function showSuccess()
{
  storyElement.textContent = "Congratulations! The cheeky gingerbread man gave himself in and you were able to turn him back into a statue! You came home just in time to celebrate Christmas. Happy Holidays!";
  storyElement.style.display = 'block';
  restartButton.style.display = "block";
  stepElement.textContent = '';
  choicesElement.innerHTML = '';
}

restartButton.addEventListener('click', restartGame);

function restartGame()
{
  step = 1;

  restartButton.style.display = 'none';
  optionsDiv.style.display = "none";
  
  storyElement.style.display = 'block';
  storyElement.textContent = 'It was the night before Christmas, and you were ready to fall asleep, but a loud thud jolted you awake. Warily, you go downstairs to see that your gingerbread man statue had disappered! There was an odd trail of what seemed to be crumbs, which you followed, and all of a sudden, you found yourself in a world full of Christmas spirit! You were told to find the missing gingerbread man, or else you\'d miss your favorite holiday!';
  
  stepElement.textContent = '';
  choicesElement.innerHTML = '';
  
  startButton.style.display = 'block';
  startButton.onclick = startAdventure;
}