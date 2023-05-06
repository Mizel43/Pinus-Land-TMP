
// функция для добавления комментариев
function addComment() {
  // получаем текст комментария из поля ввода
  var commentText = document.getElementById("comment-input").value;

  // проверяем, что поле ввода не пустое
  if (commentText.trim() === "") {
    return;
  }

  // создаем новый элемент списка
  var newComment = document.createElement("li");
  newComment.classList.add("move-i", "comment-item", "my-3", "gap-3", "d-flex");

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
  likeButton.onclick = function () {
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

function likeComment(comment) {
  // получаем количество лайков для комментария
  var likes = comment.querySelector(".like-counter span").textContent;
  likes = parseInt(likes) + 1;

  // обновляем количество лайков для комментария
  comment.querySelector(".like-counter span").textContent = likes;

  // проверяем, был ли уже добавлен лайк
  var likeButton = comment.querySelector(".shadow, .like-span, .like-span1, .like-span2, .like-span3, .like-span4, .like-span5, .like-span6, .like-span7, .like-span8, .like-span9, .like-span10, .like-span11, .like-span12, .like-span13, .like-span14, .like-span15");
  if (likeButton.getAttribute("liked") === "true") {
    return;
  }

  // добавляем лайк и изменяем значение атрибута "liked"
  likeButton.classList.add("liked");
  likeButton.setAttribute("liked", "true");
}

// получаем все элементы "like-span" на странице
var likeSpans = document.querySelectorAll(".shadow, .like-span, .like-span1, .like-span2, .like-span3, .like-span4, .like-span5, .like-span6, .like-span7, .like-span8, .like-span9, .like-span10, .like-span11, .like-span12, .like-span13, .like-span14, .like-span15");

// назначаем обработчик событий для каждого элемента "like-span"
likeSpans.forEach(function (likeSpan) {
  likeSpan.onclick = function () {
    var comment = this.closest(".comment-item");
    likeComment(comment);
  };
});

// создаем новый экземпляр MutationObserver
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    // проверяем, появился ли элемент с классом move-i
    var moveElement = mutation.target.querySelector('.move-i');
    if (moveElement) {
      moveElement.scrollIntoView({ behavior: 'smooth' });
      // останавливаем наблюдение, если элемент найден
      observer.disconnect();
    }
  });
});

// настраиваем наблюдение за изменениями в DOM
var config = { childList: true, subtree: true };
observer.observe(document.body, config);


// назначаем обработчик событий для кнопки "Send"
var sendButton = document.querySelector("#comment-form button[type='submit']");
sendButton.onclick = function () {
  var commentInput = document.getElementById("comment-input").value;
  if (commentInput.trim() == "") {
    var modal = document.getElementById("comment-modal");
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
      } else if (event.target == clobtn) {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    }
  } else {
    addComment();
  }
};


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
    nextButton.style.display = 'block';
    prevButton.style.display = 'none';
    otherButton.style.display = 'none';
  } else if (currentSlide === slides.length - 1) {
    nextButton.style.display = 'none';
    prevButton.style.display = 'none';
    otherButton.style.display = 'block';
  } else {
    nextButton.style.display = 'block';
    prevButton.style.display = 'none';
    otherButton.style.display = 'none';
  }
}
// добавляем обработчик события click для всех ответов
var answers = document.querySelectorAll('.slide-item-box li');
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

// изменяем обработчик события click для кнопки "Далее"
nextButton.addEventListener('click', function () {
    // переключаем на следующий слайд
    showSlide(currentSlide + 1);
});

showSlide(currentSlide);

var images = [
  "./img/otz1.png",
  "./img/otz2.png",
  "./img/otz3.png",
  "./img/otz4.png",
  "./img/otz5.png"
];

var notificationShown = false;

function showNotification() {
var notification = document.getElementById("notification");
var image = document.getElementById("notification-image");
var notification1 = document.getElementById("btnposa");
var randomIndex = Math.floor(Math.random() * images.length);
image.src = images[randomIndex];
notification.style.display = "block";
image.addEventListener("click", function () {
notification.style.display = "none";
setTimeout(showNotification, 25000);
});
notification1.addEventListener("click", function () {
notification.style.display = "none";
setTimeout(showNotification, 25000);
});
notificationShown = true;
setTimeout(function () {
notification.style.display = "block";
}, 5000);
}

setTimeout(function() {
showNotification();
setInterval(function() {
if (!notificationShown) {
showNotification();
}
}, 5000);
}, 205000);

const block1 = document.getElementById('block1')
const block2 = document.getElementById('block2')
const block3 = document.getElementById('block3')

const bquiz = document.getElementById('btn-quiz')
const bquiz1 = document.getElementById('btn-quiz1')
const bquiz2 = document.getElementById('btn-quiz2')
const bquiz3 = document.getElementById('btn-quiz3')
const bquiz4 = document.getElementById('btn-quiz4')
const bquiz5 = document.getElementById('btn-quiz5')

bquiz.addEventListener("click", function () {
  block1.style.display = "none";
  block2.style.display = "block";
});
bquiz1.addEventListener("click", function () {
  block1.style.display = "none";
  block2.style.display = "block";
});

otherButton.addEventListener("click", function () {
  block2.style.display = "none";
  block3.style.display = "block";
});
bquiz2.addEventListener("click", function () {
  block2.style.display = "none";
  block3.style.display = "block";
});
bquiz3.addEventListener("click", function () {
  block2.style.display = "none";
  block3.style.display = "block";
});
bquiz4.addEventListener("click", function () {
  block2.style.display = "none";
  block3.style.display = "block";
});
bquiz5.addEventListener("click", function () {
  block2.style.display = "none";
  block3.style.display = "block";
});


var element = document.getElementById("bottombar1");

element.addEventListener("click", function () {
  element.classList.add("hidden-red");
});
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(function () {
  var randomNumber = getRandomNumber(110, 240);
  document.getElementById("rancount").innerHTML = randomNumber;
}, 10000);


