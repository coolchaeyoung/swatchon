const toast = (function () {
  const createToastContainer = () => {
    const $section = document.createElement("section");
    $section.className = "toast-container";
    document.body.prepend($section);
    return $section;
  };

  const createToast = ({ text, type }) => {
    const $output = document.createElement("output");
    $output.className = `toast toast-${type}`;
    $output.textContent = text;
    return $output;
  };

  const removeToast = ($toast, timeoutId) => {
    $toast.classList.add("toast-hidden");
    $toast.addEventListener("transitionend", () => {
      $toast.remove();
      clearTimeout(timeoutId);
    });
  };

  const addToast = ($toast, $toastContainer) => {
    $toastContainer.appendChild($toast);
    $toast.classList.add("toast-visible");
  };

  const $toastContainer = createToastContainer();

  return {
    show({ text, type = "normal", duration = 3000 }) {
      let timeoutId = null;
      const $toast = createToast({ text, type });

      addToast($toast, $toastContainer);
      timeoutId = setTimeout(() => {
        removeToast($toast, timeoutId);
      }, duration);
    },
  };
})();

export default toast;
