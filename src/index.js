import "./style.scss";
import { hideableParagraphs, previews } from "./arrays";
const onShowClick = () => {
  show = !show;
  showButton.innerText = show ? "SHOW LESS" : "SHOW MORE";
  hideableParagraphs.forEach((p) => {
    const current = document.getElementById(p);
    current.classList = show ? "shown" : "hidden";
  });
};

const handleLike = (type) => {
  if (type === "like") {
    like = !like;

    if (like) {
      upSolid.classList = "fas fa-thumbs-up";
      upLine.classList = "far fa-thumbs-up hidden";
      likes++;
    } else {
      upSolid.classList = "fas fa-thumbs-up hidden";
      upLine.classList = "far fa-thumbs-up";
      likes--;
    }

    likesSpan.innerText = likes;
  } else {
    dislike = !dislike;

    if (dislike) {
      downSolid.classList = "fas fa-thumbs-down";
      downLine.classList = "far fa-thumbs-down hidden";
      dislikes++;
    } else {
      downSolid.classList = "fas fa-thumbs-down hidden";
      downLine.classList = "far fa-thumbs-down";
      dislikes--;
    }
    dislikesSpan.innerText = dislikes;
  }
};

let show = true,
  like = false,
  likes = 720,
  dislike = false,
  dislikes = 20;

const showButton = document.getElementById("show-button");
showButton.addEventListener("click", () => onShowClick());
showButton.click();

const likeButton = document.getElementById("like-button");
likeButton.addEventListener("click", () => handleLike("like"));
const dislikeButton = document.getElementById("dislike-button");
dislikeButton.addEventListener("click", () => handleLike("dislike"));

const upSolid = document.getElementById("up-solid");
const upLine = document.getElementById("up-line");
const likesSpan = document.getElementById("likes");
const downSolid = document.getElementById("down-solid");
const downLine = document.getElementById("down-line");
const dislikesSpan = document.getElementById("dislikes");

likesSpan.innerText = likes;
dislikesSpan.innerText = dislikes;

const previewSection = document.getElementById("previews");
const template = document.getElementById("template");

previews.forEach((preview, i) => {
  const name = `prev${i + 1}`;
  const clone = template.content.cloneNode(true);
  const img = clone.querySelector("img");
  const title = clone.querySelector("h1");
  const studio = clone.querySelector("p");
  const [views, date] = clone.querySelectorAll("span");
  i === 2 ? (date.classList = "live") : null;

  clone.id = name;
  img.src = preview.src;
  title.innerText = preview.title;
  studio.innerText = preview.studio;
  views.innerText = preview.views;
  date.innerText = preview.date;
  previewSection.appendChild(clone);
});

// <template class="preview-container">
//   <img class="preview-image" alt="preview" />
//   <div class="preview-text">
//     <h1 class="preview-title"></h1>
//     <p class="preview-studio"></p>
//     <span class="preview-views"></span>
//     <span class="preview-date"></span>
//   </div>
// </template>;
