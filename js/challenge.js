// Get DOM elements
let counter = document.getElementById("counter");
let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
let heartBtn = document.getElementById("heart");
let pauseBtn = document.getElementById("pause");
let submitBtn = document.getElementById("submit");
let likesList = document.querySelector(".likes");
let commentForm = document.getElementById("comment-form");
let commentInput = document.getElementById("comment-input");
let commentList = document.getElementById("list");

// Counter variables
let count = 0;
let isPaused = false;
let timer = setInterval(incrementCounter, 1000);

// Function to increment counter
function incrementCounter() {
  count++;
  counter.textContent = count;
}

// Plus button
plusBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

// Minus button
minusBtn.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

// Heart / Like button
heartBtn.addEventListener("click", () => {
  let existingLike = document.querySelector(`[data-num="${count}"]`);

  if (existingLike) {
    let likeCount = parseInt(existingLike.getAttribute("data-likes")) + 1;
    existingLike.setAttribute("data-likes", likeCount);
    existingLike.textContent = `${count} has been liked ${likeCount} times`;
  } else {
    const li = document.createElement("li");
    li.dataset.num = count;
    li.dataset.likes = 1;
    li.textContent = `${count} has been liked 1 time`;
    likesList.appendChild(li);
  }
});

// Pause / Resume button
pauseBtn.addEventListener("click", () => {
  if (!isPaused) {
    clearInterval(timer);
    pauseBtn.textContent = "resume";
    toggleButtons(true);
  } else {
    timer = setInterval(incrementCounter, 1000);
    pauseBtn.textContent = "pause";
    toggleButtons(false);
  }
  isPaused = !isPaused;
});

// Toggle button disable/enable
function toggleButtons(disable) {
  plusBtn.disabled = disable;
  minusBtn.disabled = disable;
  heartBtn.disabled = disable;
  submitBtn.disabled = disable;
}

// Comment submission
commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const commentText = commentInput.value.trim();

  if (commentText !== "") {
    const p = document.createElement("p");
    p.textContent = commentText;
    commentList.appendChild(p);
    commentInput.value = "";
  }
});
