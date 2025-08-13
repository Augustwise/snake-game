# 🐍 Snake Game

A classic Snake game built with vanilla JavaScript, HTML, and CSS. Play the timeless arcade game right in your browser with smooth controls and responsive design.

![Snake Game](https://img.shields.io/badge/Game-Snake-green) ![JavaScript](https://img.shields.io/badge/JavaScript-ES5-yellow) ![CSS](https://img.shields.io/badge/CSS-Responsive-blue) ![HTML](https://img.shields.io/badge/HTML-5-orange)

## 🎮 Features

- **Classic Gameplay**: Traditional Snake game mechanics with growing snake and food collection
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Touch Controls**: Swipe gestures for mobile/tablet gameplay
- **Keyboard Controls**: Arrow keys and Enter key support for desktop
- **Score System**: Dynamic scoring that increases with each food consumed
- **Progressive Speed**: Game speed increases as you collect more food
- **Clean UI**: Minimalist design with smooth animations

## 🕹️ How to Play

### Objective
Control the snake to eat food and grow as long as possible without hitting the walls or your own tail.

### Controls

**Desktop:**
- **Arrow Keys**: ← ↑ ↓ → to control snake direction
- **Enter**: Start/restart the game
- **Play Button**: Click to start the game

**Mobile/Tablet:**
- **Swipe Gestures**: Swipe in any direction to control the snake
- **Tap Play**: Touch the Play button to start

### Game Rules
1. The snake starts moving automatically to the right
2. Eat the blue food blocks to grow and increase your score
3. Each food consumed increases your score and slightly speeds up the game
4. Avoid hitting the walls or your own tail
5. Game ends when you collide with walls or yourself
6. Your final score is displayed before you can restart

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Augustwise/snake-game.git
   cd snake-game
   ```

2. **Run the game:**
   
   **Option A: Direct file opening**
   - Simply open `index.html` in your web browser
   
   **Option B: Local server (recommended)**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js
   npx http-server
   ```
   Then open `http://localhost:8000` in your browser

3. **Start playing:**
   - Click the "Play" button or press Enter to begin
   - Use arrow keys (desktop) or swipe gestures (mobile) to control the snake

## 📁 Project Structure

```
snake-game/
├── index.html          # Main HTML structure
├── script.js           # Game logic and functionality
├── style.css           # Styling and responsive design
└── README.md           # This file
```

### File Descriptions

- **`index.html`**: Contains the basic HTML structure with game container, play button, and score display
- **`script.js`**: Implements all game logic including:
  - Snake movement and collision detection
  - Food generation and consumption
  - Score tracking and speed progression
  - Keyboard and touch controls
  - Game state management
- **`style.css`**: Provides styling for:
  - Game board and visual elements
  - Responsive design for different screen sizes
  - Snake and food appearance
  - UI components and animations

## 🎯 Game Mechanics

### Snake Movement
- Grid-based movement system (21×21 grid)
- Snake consists of multiple segments that follow the head
- Direction changes are queued to prevent rapid direction switching

### Scoring System
- Base score increases with each food consumed
- Score multiplier based on current snake length
- Progressive difficulty: game speed increases with score

### Collision Detection
- **Wall Collision**: Game ends if snake hits any border
- **Self Collision**: Game ends if snake head touches its own body
- **Food Collision**: Snake grows and score increases

### Touch Support
- Custom swipe detection for mobile devices
- Configurable swipe threshold (30px minimum)
- Supports both touch and mouse events

## 📱 Mobile Support

The game is fully responsive and optimized for mobile devices:

- **Adaptive Layout**: Game board scales appropriately for different screen sizes
- **Touch Controls**: Intuitive swipe gestures for direction control
- **Responsive Grid**: Game elements resize based on screen width
- **Optimized Performance**: Smooth gameplay on mobile browsers

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic structure and modern web standards
- **CSS3**: Flexbox layout, media queries, and modern styling
- **Vanilla JavaScript (ES5)**: Core game logic without external frameworks
- **jQuery**: Used for enhanced touch/swipe detection

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- Lightweight codebase (~10KB total)
- No external dependencies (except jQuery CDN for touch support)
- Efficient collision detection algorithms
- Optimized rendering for smooth gameplay

## 🤝 Contributing

Contributions are welcome! Here are some ways you can contribute:

1. **Report bugs** by opening an issue
2. **Suggest features** for gameplay improvements
3. **Submit pull requests** for bug fixes or enhancements
4. **Improve documentation** for better user experience

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Enjoy Playing!

Have fun playing this classic Snake game! Try to beat your high score and challenge your friends to do the same.

---

*Built with ❤️ using vanilla JavaScript*