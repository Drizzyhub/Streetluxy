
function showDescription(text) {
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modalContent');
  modalContent.textContent = text;
  modal.style.display = 'flex';
}
function hideModal() {
  document.getElementById('modal').style.display = 'none';
}
document.getElementById('toggleMode').onclick = function () {
  document.body.classList.toggle('dark-mode');
};
