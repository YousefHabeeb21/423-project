import { subscriptionKey, region } from './config.js'; 


document.addEventListener("DOMContentLoaded", () => {
  const scoreDisplay = document.getElementById("score");
  const width = 28;
  let score = 0;
  const grid = document.querySelector(".grid");
  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
  ];



  const squares = [];

  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement("div");
      grid.appendChild(square);
      squares.push(square);

      if (layout[i] === 0) {
        squares[i].classList.add("pac-dot");
      } else if (layout[i] === 1) {
        squares[i].classList.add("wall");
      } else if (layout[i] === 2) {
        squares[i].classList.add("ghost-lair");
      } else if (layout[i] === 3) {
        squares[i].classList.add("power-pellet");
      }
    }
  }
  createBoard();

  let isPaused = false; 
  let gameStarted = false;
  let pacmanInterval;
  let isMoving = false;
  let pacmanCurrentIndex = 490;
  let pacmanspeed = 100;
  let pacmanVelocity = {x: 0, y: 0,};
  let intendedDirection = {x: 0, y: 0,};
  squares[pacmanCurrentIndex].classList.add("pac-man");





  function canMoveTo(newIndex) {
    return (
      !squares[newIndex].classList.contains("wall") &&
      !squares[newIndex].classList.contains("ghost-lair")
    );
  }

  
  // function handleVoiceCommand(command) {
  //   command = command.toLowerCase();
  //   if (command.includes("left")) {
  //     intendedDirection = { x: -1, y: 0 };
  //   } if (command.includes("right")) {
  //     intendedDirection = { x: 1, y: 0 };
  //   } if (command.includes("up")) {
  //     intendedDirection = { x: 0, y: -1 };
  //   } if (command.includes("down")) {
  //     intendedDirection = { x: 0, y: 1 };
  //   } else if (command.includes("start")) {
  //     startGame();
  //   }
  // }
  function handleVoiceCommand(command) {
    command = command.toLowerCase();
    const commands = command.split(" "); 
    
    commands.forEach((cmd) => {
      if (cmd.includes("left")) {
        isMoving = true;
        intendedDirection = { x: -1, y: 0 };
      } if (cmd.includes("right")) {
        isMoving = true;
        intendedDirection = { x: 1, y: 0 };
      } if (cmd.includes("north") || cmd.includes("up")) {
        isMoving = true;
        intendedDirection = { x: 0, y: -1 };
      } if (cmd.includes("south") || cmd.includes("down")) {
        isMoving = true;
        intendedDirection = { x: 0, y: 1 };
      } if (cmd.includes("stop")) {
        isMoving = false;
       
      } else if (cmd.includes("start")) {
          if (!gameStarted){
            startGame();
          }
      }
      else if (cmd.includes("pause")) {
        togglePause(0);
      } else if (cmd.includes("continue")) {
        togglePause(1);
      }
    });
  }
  


  function togglePause(identifier) {
    if (identifier === 0){ 
      isPaused = true;
    }
    else if (identifier === 1){
    isPaused = false;
  }
    // const pauseScreen = document.getElementById("pause-screen");
  
    if (isPaused) {
      document.getElementById("pause-screen").style.display = "flex";  
      console.log("Game Paused");
    } else if (!isPaused) {
      pauseScreen.style.display = "none";  
      console.log("Game Resumed");
    }
  }
  

  function movePacman() {
    if (pacmanInterval) clearInterval(pacmanInterval);
  
    pacmanInterval = setInterval(() => {
      if (!isPaused && isMoving) {  
        const nextIndex = pacmanCurrentIndex + pacmanVelocity.y * width + pacmanVelocity.x;
        const intendedNextIndex = pacmanCurrentIndex + intendedDirection.y * width + intendedDirection.x;
    
        if (canMoveTo(intendedNextIndex)) {
          pacmanVelocity = { ...intendedDirection }; 
          squares[pacmanCurrentIndex].classList.remove("pac-man");
          pacmanCurrentIndex = intendedNextIndex;
        } else if (canMoveTo(nextIndex)) {
          squares[pacmanCurrentIndex].classList.remove("pac-man");
          pacmanCurrentIndex = nextIndex; 
        }
    
        squares[pacmanCurrentIndex].classList.add("pac-man");
    
        pacDotEaten();
        powerPelletEaten();
        checkForGameOver();
      }
    }, pacmanspeed);
  }
  
  


    function pacDotEaten() {
      if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
        score++;
        if (score < 50) {
          document.getElementById("score").classList.add("low-score");
        } else if (score <= 100) {
          document.getElementById("score").classList.add("mid-score");
        } else if (score > 200) {
          document.getElementById("score").classList.add("high-score");
        }
        scoreDisplay.innerHTML = score;
        squares[pacmanCurrentIndex].classList.remove("pac-dot");
        checkForWin();
      }
    }

   
    function powerPelletEaten() {
      if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
        score += 10;
        ghosts.forEach((ghost) => (ghost.isScared = true));
        setTimeout(unScareGhosts, 10000);
        squares[pacmanCurrentIndex].classList.remove("power-pellet");
        checkForWin();
      }
    }

    function unScareGhosts() {
      ghosts.forEach((ghost) => (ghost.isScared = false));
    }

    class Ghost {
      constructor(className, startIndex, speed) {
        this.className = className;
        this.startIndex = startIndex;
        this.speed = speed;
        this.currentIndex = startIndex;
        this.isScared = false;
        this.timerId = NaN;
      }
    }

    var ghosts = [
      new Ghost("blinky", 348, 400),
      new Ghost("stinky", 376, 400),
      new Ghost("inky", 351, 300),
      new Ghost("clyde", 379, 300),
    ];

    ghosts.forEach((ghost) => {
      squares[ghost.currentIndex].classList.add(ghost.className);
      squares[ghost.currentIndex].classList.add("ghost");
    });

    function moveGhost(ghost) {
      const directions = [-1, +1, width, -width];
      let direction = directions[Math.floor(Math.random() * directions.length)];
  
      if (ghost.timerId) clearInterval(ghost.timerId); 
      ghost.timerId = setInterval(function () {
        if(!isPaused){
        //if the next square your ghost is going to go to does not have a ghost and does not have a wall
          if (
            !squares[ghost.currentIndex + direction].classList.contains("ghost") &&
            !squares[ghost.currentIndex + direction].classList.contains("wall")
          ) {
            //remove the ghosts classes
            squares[ghost.currentIndex].classList.remove(ghost.className);
            squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
            //move into that space
            ghost.currentIndex += direction;
            squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
            //else find a new random direction to go in
          } else direction = directions[Math.floor(Math.random() * directions.length)];
    
          //if the ghost is currently scared
          if (ghost.isScared) {
            squares[ghost.currentIndex].classList.add("scared-ghost");
          }
    
          if (
            ghost.isScared &&
            squares[ghost.currentIndex].classList.contains("pac-man")
          ) {
            squares[ghost.currentIndex].classList.remove(
              ghost.className,
              "ghost",
              "scared-ghost"
            );
            ghost.currentIndex = ghost.startIndex;
            squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
          }
        
          checkForGameOver();
        }
      }, ghost.speed);
    }

   
    function checkForGameOver() {
      if (
        squares[pacmanCurrentIndex].classList.contains("ghost") &&
        !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
      ) {

        squares[pacmanCurrentIndex].classList.remove("pac-man");

        ghosts.forEach((ghost) => clearInterval(ghost.timerId));
        document.removeEventListener("keyup", movePacman);
        pacmanVelocity.x = 0;
        pacmanVelocity.y = 0;

        document.getElementById("game-over-screen").style.display = "flex";
        setTimeout(function () {
          window.location.reload();
        }, 3000);
      }
    }


    function checkForWin() {
      if (score >= 274) {
        ghosts.forEach((ghost) => clearInterval(ghost.timerId));
        document.removeEventListener("keyup", movePacman);
        pacmanVelocity.x = 0;
        pacmanVelocity.y = 0;
    
        document.getElementById("you-won-screen").style.display = "flex";
        setTimeout(function () {
          window.location.reload();
        }, 3000);
      }
    }

    function startGame(event) {
      gameStarted = true;
      document.getElementById("start-screen").style.display = "none";
      isMoving = true;
      movePacman();
      ghosts.forEach((ghost) => moveGhost(ghost));
    }
  


    document.addEventListener("click", () => {
      initializeMicrophone();
    });

  

  function initializeMicrophone() {

    const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey, region);

    speechConfig.speechRecognitionLanguage = "en-US"; 
    speechConfig.setProperty(SpeechSDK.PropertyId.SpeechServiceConnection_RecoLanguage, "en-US");


    const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();

    const recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

    recognizer.recognizing = (s, e) => {
      if (e.result.reason === SpeechSDK.ResultReason.RecognizingSpeech) {
        handleVoiceCommand(e.result.text); 
        console.log(e.result.text);
      } else if (e.result.reason === SpeechSDK.ResultReason.NoMatch) {
        console.log("No speech recognized.");
      }
    };
      
    recognizer.startContinuousRecognitionAsync();
  }
});



