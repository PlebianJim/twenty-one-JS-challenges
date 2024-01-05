class BallTask {
  constructor() {
    this.ballElement = document.getElementById("ball");
    this.scaleValue = this.generateRandomScale();
    this.addEventListeners();
  }

  generateRandomScale() {
    return Math.random() * 5;
  }

  changeColor() {
    this.ballElement.onmouseover = () => {
      this.ballElement.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
    };
  }

  changeColorAgain() {
    this.ballElement.onmouseout = () => {
      this.ballElement.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
    };
  }

  increaseSize() {
    this.ballElement.onmouseover = () => {
      this.scaleValue = this.generateRandomScale();
      this.ballElement.style.transform = `scale(${this.scaleValue})`;
    };
  }

  decreaseSize() {
    this.ballElement.onmouseleave = () => {
      this.ballElement.style.transform = `scale(1)`;
      this.randomPosition();
    };
  }

  randomPosition() {
    // Generate random x and y values
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    // Clip x to be within viewport
    const xMax = window.innerWidth - ball.offsetWidth;
    const xClipped = Math.min(Math.max(x, 0), xMax);

    // Clip y to be within viewport
    const yMax = window.innerHeight - ball.offsetHeight;
    const yClipped = Math.min(Math.max(y, 0), yMax);

    // Set clipped position
    ball.style.left = `${xClipped}px`;
    ball.style.top = `${yClipped}px`;
  }

  addEventListeners() {
    this.changeColor();
    this.changeColorAgain();
    this.increaseSize();
    this.decreaseSize();
  }
}

const ballTask = new BallTask();
