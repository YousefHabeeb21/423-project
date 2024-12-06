# PacMan Voice-Controlled Game

Welcome to the PacMan Voice-Controlled Game! Control PacMan using your voice commands. This game is developed with HTML, CSS, and JavaScript, utilizing the Web Speech API for voice recognition.


## Setup
1. Install the Live Server extension in Visual Studio Code.
2. Open the project folder in Visual Studio Code.
3. Click the "Go Live" button in the bottom right corner of Visual Studio Code.
4. Click on the screen once with the mouse to enable the microphone (due to web browser policy).
5. Ensure your microphone is enabled for voice commands.

## Configuration
Before starting the game, make sure that the `config.js` file is present in the project root. This file contains the key for the voice recognition to function correctly. If the `config.js` file is missing, the voice recognition feature will not work.

## Voice Commands
The game recognizes the following voice commands:
- **Movement**: "left", "right", "up", "down", "north", "south", "east", "west"
- **Game Control**: "start", "begin", "stop", "keep going", "pause", "resume", "continue", "restart", "reset"
- **Help**: "help", "instructions", "directions"
- **Difficulty**: "easy", "medium", "hard"

## How to Play
1. **Start the Game**: Say "START" or "BEGIN" to start the game.
2. **Control PacMan**:
   - Move PacMan using directional commands like "Move left", "Go east", "Move up", "Go south".
   - Say "STOP" or "halt" to stop PacMan from moving.
3. **Pause and Resume**:
   - Say "PAUSE" to pause the game.
   - Say "CONTINUE" or "RESUME" to continue the game.
4. **Restart the Game**: Say "RESTART" or "RESET" to restart the game.
5. **Get Help**: Say "HELP" for instructions on how to play.


## Troubleshooting
- **Microphone Not Working**: Ensure that your browser has permission to access your microphone. Check the browser's address bar for a microphone icon and allow access. If problems persist, check your system settings to make sure the microphone is not muted or disabled.

