import "./style.css";

document.addEventListener('DOMContentLoaded', () => {
  let turno: number = 1; 

  // Obtener elementos del DOM
  const turnoDisplay: HTMLElement | null = document.getElementById('numeroTurno');
  const prevBtn: HTMLElement | null = document.getElementById('prevBtn');
  const nextBtn: HTMLElement | null = document.getElementById('nextBtn');
  const resetBtn: HTMLElement | null = document.getElementById('resetBtn');
  const inputTurno: HTMLInputElement | null = document.getElementById('nuevoTurno') as HTMLInputElement;
  const cambiarTurnoBtn: HTMLElement | null = document.getElementById('cambiarTurnoBtn');

  // Función para actualizar el turno mostrado
  function actualizarTurno(): void {
      if (turnoDisplay) {
          turnoDisplay.textContent = turno.toString().padStart(2, '0');
      }
  }

  // Función para cambiar el turno con el valor del input
  function cambiarTurno(): void {
      if (inputTurno && turnoDisplay) {
          const nuevoTurno = parseInt(inputTurno.value.trim(), 10);
          if (!isNaN(nuevoTurno) && nuevoTurno > 0) {
              turno = nuevoTurno;
              actualizarTurno();
              inputTurno.value = ""; // Limpiar el campo de texto después de cambiar el turno
          } else {
              alert("Por favor, ingrese un número de turno válido.");
          }
      }
  }

  // Event listeners para los botones
  if (prevBtn) {
      prevBtn.addEventListener('click', () => {
          if (turno > 1) {
              turno--;
              actualizarTurno();
          }
      });
  }

  if (nextBtn) {
      nextBtn.addEventListener('click', () => {
          turno++;
          actualizarTurno();
      });
  }

  if (resetBtn) {
      resetBtn.addEventListener('click', () => {
          turno = 1;
          actualizarTurno();
      });
  }

  // Añadir el evento para el botón de cambiar turno
  if (cambiarTurnoBtn) {
      cambiarTurnoBtn.addEventListener('click', cambiarTurno);
  }

  // Inicializar el turno al cargar la página
  actualizarTurno();
});