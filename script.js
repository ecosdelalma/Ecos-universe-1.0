function showForm() {
  document.getElementById('overlay').classList.add('hidden');
  setTimeout(() => {
    document.getElementById('formContainer').classList.remove('hidden');
  }, 1000);
}