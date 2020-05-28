function openMenu() {
    var menu = document.getElementsByClassName('header__nav')[0];
    if (menu.offsetWidth > 0 && menu.offsetHeight > 0) {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';;
    }
}

var instagramWrap = document.querySelector(".instagram__wrap");
var instagramItems = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve"
];

instagramItems.map(function (item, index) {
    var newElement = document.createElement("div");
    var newOverlay = document.createElement("div");

    newElement.setAttribute("class", "instagram__item instagram__item--" + item);
    newOverlay.setAttribute("class", "instagram__overlay");
    newOverlay.innerHTML = "<a>Shop the look <i class='fas fa-angle-right'></i></a>"

    newElement.appendChild(newOverlay);
    instagramWrap.appendChild(newElement);
});

function submitNewsletterForm(t, event) {
    event.preventDefault();
    var inputValue = document.querySelector("[data-input='email']").value;

    if(!inputValue.length){
        alert("The email field shouldn't be empty");
        return;
    }

    alert("You have successfuly signed for our Koibird newsletter !")
}
