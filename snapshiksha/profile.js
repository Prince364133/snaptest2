// Function to open the modal
function openEditModal() {
    document.getElementById('editModal').style.display = 'flex';
  
    // Prefill the form with current profile details
    document.getElementById('editName').value = document.getElementById('name').textContent;
    document.getElementById('editEmail').value = document.getElementById('email').textContent;
    document.getElementById('editPhone').value = document.getElementById('phone').textContent;
    document.getElementById('editAddress').value = document.getElementById('address').textContent;
    document.getElementById('editAge').value = document.getElementById('age').textContent;
    document.getElementById('editQualification').value = document.getElementById('qualification').textContent;
    document.getElementById('editTeaching').value = document.getElementById('teaching').textContent;
    document.getElementById('editCity').value = document.getElementById('city').textContent;
    document.getElementById('editCountry').value = document.getElementById('country').textContent;
  }
  
  // Function to close the modal
  function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
  }
  
  // Function to save the edited profile
  function saveProfile() {
    // Update the profile details
    document.getElementById('name').textContent = document.getElementById('editName').value;
    document.getElementById('email').textContent = document.getElementById('editEmail').value;
    document.getElementById('phone').textContent = document.getElementById('editPhone').value;
    document.getElementById('address').textContent = document.getElementById('editAddress').value;
    document.getElementById('age').textContent = document.getElementById('editAge').value;
    document.getElementById('qualification').textContent = document.getElementById('editQualification').value;
    document.getElementById('teaching').textContent = document.getElementById('editTeaching').value;
    document.getElementById('city').textContent = document.getElementById('editCity').value;
    document.getElementById('country').textContent = document.getElementById('editCountry').value;
  
    closeEditModal(); // Close the modal
    alert('Profile updated successfully!');
  }
  
  // Function to logout
  function logout() {
    window.location.href = 'login.html';
  }