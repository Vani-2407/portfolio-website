
function showSection(id) {
  // Hide all sections
  document.querySelectorAll('.tab-section').forEach(sec => sec.style.display = 'none');
  
  // Show the clicked one
  document.getElementById(id).style.display = 'block';
}
