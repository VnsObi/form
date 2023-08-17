document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector(".button");
  submitButton.addEventListener("click", handleSubmit);
});

function handleSubmit() {
  const formInputs = document.querySelectorAll(".frame-15, .frame-16, .frame-162");

  let isValid = true;

  formInputs.forEach(input => {
    if (input.value.trim() === "") {
      input.classList.add("invalid");
      isValid = false;
    } else {
      input.classList.remove("invalid");
    }
  });

  if (!isValid) {
    alert("Please complete all fields before submitting.");
    return;
  }

  // If all fields are filled out, you can proceed with form submission or other actions
  console.log("Form submitted successfully!");
}
