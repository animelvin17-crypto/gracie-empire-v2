let isOpen = true;
let isAdmin = false;
let clickCount = 0;

function logoClick() {
  clickCount++;

  if (clickCount >= 5) {
    let pass = prompt("Enter admin password:");

    if (pass === "1009") {
      isAdmin = true;

      let toggle = document.getElementById("toggleBtn");
      if (toggle) {
        toggle.style.display = "block";
      }

      alert("Admin unlocked");
    } else {
      alert("Wrong password");
    }

    clickCount = 0;
  }
}

function toggleStatus() {
  if (!isAdmin) return;

  isOpen = !isOpen;

  let status = document.getElementById("statusText");
  let buttons = document.querySelectorAll(".order-btn");

  if (isOpen) {
    status.innerText = "We are OPEN";
    buttons.forEach(btn => {
      btn.innerText = "Order";
      btn.disabled = false;
    });
  } else {
    status.innerText = "We are CLOSED";
    buttons.forEach(btn => {
      btn.innerText = "Closed";
      btn.disabled = true;
    });
  }
}

/* ORDER FUNCTION */
function order(item) {
  if (!isOpen) return;

  let phone = "447831724029"; // put your number

  let message = "Hello, I want to order " + item;

  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
function logoClick() {
  alert("logo clicked"); // TEST

  clickCount++;

  if (clickCount >= 5) {
    let pass = prompt("Enter admin password:");

    if (pass === "1009") {
      isAdmin = true;
      document.getElementById("toggleBtn").style.display = "block";
      alert("Admin unlocked");
    }

    clickCount = 0;
  }
}