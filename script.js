let isOpen = true;

function toggleStatus() {
  isOpen = !isOpen;

  let status = document.getElementById("statusText");
  let buttons = document.querySelectorAll(".order-btn");

  if (isOpen) {
    status.innerText = "We are OPEN";
    status.style.color = "lightgreen";

    buttons.forEach(btn => {
      btn.innerText = "Order";
      btn.disabled = false;
    });

  } else {
    status.innerText = "We are CLOSED";
    status.style.color = "red";

    buttons.forEach(btn => {
      btn.innerText = "Closed";
      btn.disabled = true;
    });
  }
}

function order(item) {
  if (!isOpen) return;

  let phone = "447831724029"; // PUT YOUR NUMBER

  let message = "Hello, I want to order " + item;

  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
let isAdmin = false;

/* SECRET KEY COMBO: press "g" */
document.addEventListener("keydown", function(e) {
  if (e.key === "g") {
    let pass = prompt("Enter admin password:");

    if (pass === "1234") { // 🔥 change this
      isAdmin = true;

      document.getElementById("toggleBtn").style.display = "inline-block";

      alert("Admin unlocked 😎");
    } else {
      alert("Wrong password");
    }
  }
});
function toggleStatus() {
  if (!isAdmin) return; // 🔐 BLOCK NON-ADMIN

  // your existing toggle code below
}