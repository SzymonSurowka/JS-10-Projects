document
  .getElementById('validationForm')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;

    // Sprawdzanie adresu email ^12sdSA-_.@we2-q.wqe.eqwe.$

    const emailRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      alert('nieprawidłowy email');
      return;
    }

    // Sprawdzanie numeru telefonu (9 cyfr, możliwość odstępów co trzy cyfry)

    const phoneRegex = /^(\d{3}\s?){2}\d{3}$/;
    if (!phoneRegex.test(phone)) {
      alert('nieprawidłowy telefon');
      return;
    }

    // Sprawdzanie hasła 8-20 znaków, co najmniej jedna cyfra, co najmniej jedna wielka literę

    const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,20}$/;
    if (!passwordRegex.test(password)) {
      alert('nieprawidłowe hasło');
      return;
    }

    alert('formularz wysłany');
  });
