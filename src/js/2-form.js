const STORAGE_KEY = "feedback-form-state";

const feedbackForm = document.querySelector(".feedback-form");

function saveFormState() {
  const formState = {
    email: feedbackForm.elements.email.value,
    message: feedbackForm.elements.message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}

function restoreFormState() {
  const savedState = localStorage.getItem(STORAGE_KEY);

  if (savedState) {
    const formState = JSON.parse(savedState);
    feedbackForm.elements.email.value = formState.email || "";
    feedbackForm.elements.message.value = formState.message || "";
  }
}

restoreFormState();

feedbackForm.addEventListener("input", () => {
  saveFormState();
});

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();

  localStorage.removeItem(STORAGE_KEY);

  const formState = {
    email: feedbackForm.elements.email.value,
    message: feedbackForm.elements.message.value,
  };
  console.log(formState);

  feedbackForm.reset();
});