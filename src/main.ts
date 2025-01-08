import "./style.css";

document.addEventListener('DOMContentLoaded', () => {
  let turno: number = 1; 

  const turnoDisplay: HTMLElement | null = document.getElementById('numeroTurno');
  const prevBtn: HTMLElement | null = document.getElementById('prevBtn');
  const nextBtn: HTMLElement | null = document.getElementById('nextBtn');
  const resetBtn: HTMLElement | null = document.getElementById('resetBtn');
  const inputTurno: HTMLInputElement | null = document.getElementById('nuevoTurno') as HTMLInputElement;
  const cambiarTurnoBtn: HTMLElement | null = document.getElementById('cambiarTurnoBtn');

  function actualizarTurno(): void {
      if (turnoDisplay) {
          turnoDisplay.textContent = turno.toString().padStart(2, '0');
      }
  }

  function cambiarTurno(): void {
      if (inputTurno && turnoDisplay) {
          const nuevoTurno = parseInt(inputTurno.value.trim(), 10);
          if (!isNaN(nuevoTurno) && nuevoTurno > 0) {
              turno = nuevoTurno;
              actualizarTurno();
              inputTurno.value = ""; 
          } else {
              alert("Por favor, ingrese un número de turno válido.");
          }
      }
  }

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

 
  if (cambiarTurnoBtn) {
      cambiarTurnoBtn.addEventListener('click', cambiarTurno);
  }

  actualizarTurno();
});