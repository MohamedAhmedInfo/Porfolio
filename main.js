const randomBalls = document.querySelector(".button");
const containerBaseball = document.getElementById("containerBaseball");

const randomBaseball = () => {
  const parentBall = document.createElement("div");
  containerBaseball.append(parentBall);

  const createRandomBall = setInterval(() => {
    const Ball = document.createElement("div");
    Ball.classList.add("addBall");
    Ball.innerHTML = ` <img src="./img2.png" class="ball"> `;
    Ball.style.left = `${Math.random() * 100}%`;
    Ball.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s   `;

    parentBall.append(Ball);
  }, 50);

  setTimeout(() => {
    clearInterval(createRandomBall);
  }, 2000);

  setTimeout(() => {
    parentBall.remove();
  }, 5000);
};

randomBalls.addEventListener("click", () => {
  randomBaseball();
});
