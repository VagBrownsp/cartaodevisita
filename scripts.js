function abrirModal(id) {
  document.getElementById(id).style.display = "block";
}

function fecharModal() {
  document.querySelectorAll('.modal').forEach(m => {
    m.style.display = "none";
  });
}
