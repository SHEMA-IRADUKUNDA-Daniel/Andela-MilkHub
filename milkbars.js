// Review
const reviewName = document.querySelector(".reviewName");
const newName = document.querySelector(".newName");
const newPar = document.querySelector(".newPar");
const postButtons = document.querySelectorAll(".post");
const nameInputs = document.querySelectorAll(".rateName");
const messageInputs = document.querySelectorAll("#textarea");
const reviewContainer = document.querySelectorAll(".reviewInnerContainer");
const stars = document.querySelectorAll(".fi");
const allReviews = [];

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((e, i) => {
      if (i <= index) {
        e.classList.add("checked");
      }
      if (i > index) {
        e.classList.remove("checked");
      }
    });
  });
});

postButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const h5 = document.createElement("h5");
    const p = document.createElement("p");
    const hr = document.createElement("hr");
    const ratesDiv = document.createElement("div");

    console.log(nameInputs, messageInputs);

    if (nameInputs[index].value && messageInputs[index].value) {
      const name = nameInputs[index].value;
      const review = messageInputs[index].value;

      const newReview = new Object();
      newReview.userName = name;
      newReview.userReview = review;

      allReviews.push(newReview);
      h5.innerHTML = name;
      p.innerHTML = review;

      const newReviewDiv = document.createElement("div");

      h5.classList.add("reviewer");
      p.classList.add("leftReview");

      newReviewDiv.appendChild(h5);
      newReviewDiv.appendChild(ratesDiv);
      newReviewDiv.appendChild(p);
      newReviewDiv.appendChild(hr);

      reviewContainer[index].appendChild(newReviewDiv);
    }
    reset(index);
    return;
  });
});
// postButtons.addEventListener("click", () => {
//   const h5 = document.createElement("h5");
//   const p = document.createElement("p");
//   const hr = document.createElement("hr");
//   const ratesDiv = document.createElement("div");

//   if (nameInput.value && messageInput.value) {
//     const name = nameInput.value;
//     const review = message.value;

//     const newReview = new Object();
//     newReview.userName = name;
//     newReview.userReview = review;

//     allReviews.push(newReview);
//     h5.innerHTML = name;
//     p.innerHTML = review;

//     const newReviewDiv = document.createElement("div");

//     h5.classList.add("reviewer");
//     p.classList.add("leftReview");

//     newReviewDiv.appendChild(h5);
//     newReviewDiv.appendChild(ratesDiv);
//     newReviewDiv.appendChild(p);
//     newReviewDiv.appendChild(hr);

//     reviewContainer.appendChild(newReviewDiv);
//   }
//   reset();
//   return;
// });

function reset(index) {
  nameInputs[index].value = "";
  messageInputs[index].value = "";
}
