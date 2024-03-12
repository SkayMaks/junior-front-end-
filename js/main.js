/* Обработка сообщения ошибки email */
const emailInput = document.getElementById('email');
const errorMsg = document.querySelector('.error-msg');

var button = document.getElementById('myButton');
var modal = document.getElementById('myModal');
var close = document.getElementById('myClose');
var content = document.getElementById('myContent');
var acc = document.getElementById('acc');
function opacity1() {
    content.style.opacity = "1";
}

button.onclick = function() {
    modal.style.display = "block";
    setTimeout(opacity1, 100);
}

function none() {
    modal.style.display = "none";
}

close.onclick = function() {
    content.style.opacity = "0";
    setTimeout(none, 1000);
}


emailInput.addEventListener('input', function() {
    if (emailInput.validity.typeMismatch != "") {
        errorMsg.style.display = 'block';
    } else {
        errorMsg.style.display = 'none';
    }
});

document.addEventListener("click", function(e) {
  const customSelect = document.querySelector(".custom-select");
  
  if (e.target.closest(".select-input")) {
    customSelect.classList.toggle("active");
  } else if (!e.target.closest(".custom-select")) {
    customSelect.classList.remove("active");
  }
});

document.querySelectorAll(".select-options li").forEach(function(option) {
  option.addEventListener("click", function() {
    const value = this.getAttribute("data-value");
    document.querySelector(".select-input").value = value;
    
    document.querySelectorAll(".select-options li").forEach(function(item) {
      item.classList.remove("selected");
    });
    
    this.classList.add("selected");
    
    document.querySelector(".custom-select").classList.remove("active");

  });
});


acc.onclick = function () {
    this.classList.toggle("active-acc");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
};
