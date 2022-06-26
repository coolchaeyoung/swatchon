import toast from "./toast.js";

const $normalButton = document.querySelector(".normal");
const $successButton = document.querySelector(".success");
const $errorButton = document.querySelector(".error");

$normalButton.addEventListener("click", () => {
  toast.show({ text: "normal", type: "normal", duration: 3000 });
});
$successButton.addEventListener("click", () => {
  toast.show({ text: "success", type: "success", duration: 3000 });
});
$errorButton.addEventListener("click", () => {
  toast.show({ text: "error", type: "error", duration: 3000 });
});
