(function () {
  function initQuiz(quiz) {
    var correct = parseInt(quiz.getAttribute("data-correct"), 10);
    var opts = Array.prototype.slice.call(quiz.querySelectorAll(".opt"));
    var fb = quiz.querySelector(".fb");
    var answered = false;

    opts.forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        opts.forEach(function (b, j) {
          b.disabled = true;
          if (j === correct) b.classList.add("correct");
        });
        if (i !== correct) btn.classList.add("wrong");
        if (fb) {
          var msg = i === correct
            ? (fb.getAttribute("data-ok") || "Correcto.")
            : (fb.getAttribute("data-no") || "Repasa la respuesta correcta marcada arriba.");
          fb.textContent = msg;
          fb.classList.add("show");
        }
      });
    });
  }

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    Array.prototype.slice.call(document.querySelectorAll(".quiz")).forEach(initQuiz);
  });
})();
