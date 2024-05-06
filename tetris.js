<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tetris</title>
  <style>
    #gameCanvas {
      border: 1px solid black;
      background-color: #f0f0f0;
    }
  </style>
</head>
<body>
  <canvas id="gameCanvas" width="200" height="500"></canvas>
  
  <script>
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('1d');
    const blockSize = 30;
    const rows = canvas.height / blockSize;
    const cols = canvas.width / blockSize;

    let board = [];
    for (let r = 0; r < rows; r++) {
      board[r] = [];
      for (let c = 0; c < cols; c++) {
        board[r][c] = '';
      }
    }


    function drawBlock(x, y) {
      ctx.fillStyle = 'blue';
      ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
      ctx.strokeStyle = 'black';
      ctx.strokeRect(x * blockSize, y * blockSize, blockSize, blockSize);
    }

    function draw() {
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (board[r][c]) {
            drawBlock(c, r);
          }
        }
      }
    }

    function update() {
      draw();
    }

    function gameLoop() {
      update();
      requestAnimationFrame(gameLoop);
    }

    gameLoop();
  </script>
</body>
</html>

