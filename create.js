const button = document.querySelector(".create");
const inputs = document.querySelectorAll(".input");
const inputName = document.querySelectorAll(".inputName");
const inputTagLine = document.querySelectorAll(".inputTagLine");
const errorMessage = document.querySelector(".error");
const allMilk = [];

button.addEventListener("click", () => {
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");
  const h4 = document.createElement("h4");
  const span = document.createElement("span");

  if (inputName.value && inputTagLine.value) {
    const name = inputName.value;
    const tagLine = inputTagLine.value;

    const newMilkBar = new Object();
    newMilkBar.milkZoneName = name;
    newMilkBar.milkZoneTag = tagLine;

    allMilk.push(newMilkBar);
    h2.innerHTML = name;
    p.innerHTML = tagLine;

    const newMilkBarDiv = document.createElement("div");

    h2.classList.add;
  }
  //   inputs.forEach((e, i) => {
  //     inputs.
  //     const name = inputs.value;
  //     const review = message.value;

  //     const newReview = new Object();
  //     newReview.userName = name;
  //     newReview.userReview = review;

  //     allReviews.push(newReview);
  //     h2.innerHTML = name;
  //     p.innerHTML = review;

  //     const newReviewDiv = document.createElement("div");

  //     h5.classList.add("reviewer");
  //     p.classList.add("leftReview");

  //     newReviewDiv.appendChild(h5);
  //     newReviewDiv.appendChild(ratesDiv);
  //     newReviewDiv.appendChild(p);
  //     newReviewDiv.appendChild(hr);

  //     reviewContainer.appendChild(newReviewDiv);
  //   });
  //   reset();
  //   return;
});
// function reset(index) {
//   nameInputs[index].value = "";
//   messageInputs[index].value = "";
// }
