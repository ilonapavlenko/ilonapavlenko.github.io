function popup(par) {
    console.log(par);
    let formDiv = document.getElementById("forma");
    let bg = document.getElementById("popup");
    if (par === true) {
      formDiv.style.display = ("block");
      bg.style.opacity = ("1");
      bg.style.pointerEvents = ("all");
      history.pushState(true, null, "#form");
    }
    else {
      formDiv.style.display = ("none");
      bg.style.opacity = ("0");
      bg.style.pointerEvents = ("none");
      history.pushState(false, null, "#");
  
    }
  }
  if (location.hash === "#form") {
    popup(true);
  }
  
  window.addEventListener("popstate", (e) => {
    popup(e);
  })
  
  let b = document.getElementById("button1");
  b.addEventListener("click", () => {
    popup(true);
  });
  
  
  let popupBg = document.getElementById("popup");
  document.addEventListener('click', (e) => {
    console.log(e.target);
    if ((e.target === popupBg)) {
      popup(false);
  
  
    }
  });
  
  let names = document.getElementById('Name');
  let email = document.getElementById('Email1');
  let msg = document.getElementById('message');
  let cb = document.getElementById('Check');
  function save() {
    localStorage.setItem('Имя', names.value);
    localStorage.setItem('Почта', email.value);
    localStorage.setItem('Сообщение', msg.value);
    if (cb.checked) {
      localStorage.setItem('Чекбокс', 1);
    } else {
      localStorage.setItem('Чекбокс', 0);
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    names.value = localStorage.getItem('Имя');
    email.value = localStorage.getItem('Почта');
    msg.value = localStorage.getItem('Сообщение');
    let checkBox = localStorage.getItem('Чекбокс');
    if (checkBox == 1) {
      cb.checked = true;
    } else if (checkBox == 0) {
      cb.checked = false;
    }
  
    names.oninput = save;
    email.oninput = save;
    msg.oninput = save;
    cb.oninput = save;
    $(function () {
      $(".ajaxForm").submit(function (e) {
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
          type: "POST",
          dataType: "json",
          url: href,
          data: $(this).serialize(),
          success: function (response) {
            if ((response.status == "success") && (cb.checked == true)) {
              alert('Форма отправлена');
              localStorage.removeItem('Имя');
              localStorage.removeItem('Почта');
              localStorage.removeItem('Сообщение');
              localStorage.removeItem('Чекбокс');
              names.value = localStorage.getItem('Имя');
              email.value = localStorage.getItem('Почта');
              msg.value = localStorage.getItem('Сообщение');
              cb.checked = false;
            } else {
              alert("Подтвердите согласие");
            }
          }
        });
      });
    });
  });