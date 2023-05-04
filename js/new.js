
// функция для добавления комментариев
function addComment() {
  // получаем текст комментария из поля ввода
  var commentText = document.getElementById("comment-input").value;

  // создаем новый элемент списка
  var newComment = document.createElement("li");
  newComment.classList.add("comment-item", "my-3", "gap-3", "d-flex");

  // добавляем аватар пользователя
  var avatar = document.createElement("img");
  avatar.src = "./img/users/user_main.png";
  avatar.width = "36";
  avatar.height = "36";
  avatar.alt = "User Avatar";
  avatar.classList.add("rounded-circle");
  newComment.appendChild(avatar);

  // добавляем блок с комментарием
  var commentBlock = document.createElement("div");
  commentBlock.classList.add("coment-like");

  // добавляем имя автора комментария
  var authorName = document.createElement("strong");
  authorName.classList.add("author-span");
  authorName.textContent = "You";
  commentBlock.appendChild(authorName);

  // добавляем текст комментария
  var commentTextElement = document.createElement("div");
  commentTextElement.classList.add("comment-text", "rounded-4");
  commentTextElement.textContent = commentText;
  commentBlock.appendChild(commentTextElement);

  // добавляем блок с лайками
  var likeBlock = document.createElement("div");
  likeBlock.classList.add("like-line");

  // добавляем кнопку "Like"
  var likeButton = document.createElement("span");
  likeButton.classList.add("like-span");
  likeButton.textContent = "Нравится";
  likeButton.onclick = function() {
    likeComment(this.closest(".comment-item"));
  };
  likeBlock.appendChild(likeButton);

  // добавляем счетчик лайков
  var likeCounter = document.createElement("div");
  likeCounter.classList.add("like-counter", "shadow");

  var likeIcon = document.createElement("img");
  likeIcon.src = "./img/like_max.png";
  likeIcon.width = "30";
  likeIcon.height = "30";
  likeIcon.alt = "pic";
  likeIcon.classList.add("rounded-circle");
  likeCounter.appendChild(likeIcon);

  var likeCount = document.createElement("span");
  likeCount.textContent = "0";
  likeCounter.appendChild(likeCount);

  likeBlock.appendChild(likeCounter);

  commentBlock.appendChild(likeBlock);

  newComment.appendChild(commentBlock);

  // добавляем новый комментарий в список
  var commentsList = document.getElementById("comments-list");
  commentsList.appendChild(newComment);

  // очищаем поле ввода
  document.getElementById("comment-input").value = "";
}

// назначаем обработчик событий для кнопки "Send"
var sendButton = document.querySelector("#comment-form button[type='submit']");
sendButton.onclick = function() {
  addComment();
};

// функция для лайков комментариев
function likeComment(comment) {
  // получаем количество лайков для комментария
  var likes = comment.querySelector(".like-counter span").textContent;
  likes = parseInt(likes) + 1;

  // обновляем количество лайков для комментария
  comment.querySelector(".like-counter span").textContent = likes;
}

// получаем все элементы "like-span" на странице
var likeSpans = document.querySelectorAll(".shadow, .like-span, .like-span1, .like-span2, .like-span3, .like-span4, .like-span5, .like-span6, .like-span7, .like-span8, .like-span9, .like-span10, .like-span11, .like-span12, .like-span13, .like-span14, .like-span15");

// назначаем обработчик событий для каждого элемента "like-span"
likeSpans.forEach(function(likeSpan) {
  likeSpan.onclick = function() {
    var comment = this.closest(".comment-item");
    likeComment(comment);
  };
});

// Смещение вьюпорта к последнему добавленному комментарию
var commentSubmit = document.getElementById('comment-submit');
var commentsList = document.getElementById('comments-list');

commentSubmit.addEventListener('click', function() {
var lastComment = commentsList.lastElementChild;
lastComment.scrollIntoView({ behavior: 'smooth' });
});

// квиз js
var currentSlide = 0;
var slides = document.querySelectorAll('.slide');
var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');
var otherButton = document.getElementById('page-btn')

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  slides[n].style.display = 'block';
  currentSlide = n;

  if (currentSlide === 0) {
    nextButton.style.display = 'none';
    prevButton.style.display = 'none';
    otherButton.style.display = 'none';
  } else if (currentSlide === slides.length - 1) {
    nextButton.style.display = 'none';
    prevButton.style.display = 'none';
    otherButton.style.display = 'none';
  } else {
    nextButton.style.display = 'none';
    prevButton.style.display = 'none';
    otherButton.style.display = 'none';
  }
}



// добавляем обработчик события click для всех ответов
var answers = document.querySelectorAll('.li-a');
answers.forEach(function(answer) {
  answer.addEventListener('click', function() {
    // добавляем класс selected к выбранному ответу
    answers.forEach(function(a) {
      a.classList.remove('selected');
    });
    answer.classList.add('selected');

    // переключаем на следующий слайд
    showSlide(currentSlide + 1);
  });
});

showSlide(currentSlide);

var images = [
  "./img/otz1.png",
  "./img/otz2.png",
  "./img/otz3.png",
  "./img/otz4.png",
  "./img/otz5.png"
];

function showNotification() {
  var notification = document.getElementById("notification");
  var image = document.getElementById("notification-image");
  var randomIndex = Math.floor(Math.random() * images.length);
  image.src = images[randomIndex];
  notification.style.display = "block";
  image.addEventListener("click", function() {
    notification.style.display = "none";
  });
  setTimeout(function() {
    notification.style.display = "block";
  }, 20000);
}

setInterval(showNotification, 20000);