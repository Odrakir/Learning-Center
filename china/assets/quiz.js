/* =========================================================================
   Componente de quiz reutilizable — Curso "Entender China"
   Retrieval practice con feedback inmediato y automático.

   Uso en una lección:
   <div class="quiz" data-correct="1">
     <p class="q">¿Pregunta?</p>
     <div class="opts">
       <button class="opt">Opción A</button>
       <button class="opt">Opción B</button>   <!-- índice 1 = correcta -->
       <button class="opt">Opción C</button>
     </div>
     <p class="fb" data-ok="¡Bien! Explicación..." data-no="No exactamente. Explicación..."></p>
   </div>

   Nota de diseño: mantén las opciones de longitud similar (mismo nº de palabras)
   para no dar pistas por el formato.
   ========================================================================= */
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
