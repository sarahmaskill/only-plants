const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.getElementById('plant-name').value.trim();
    const species = document.getElementById('plant-species').value.trim();
    const waterSchedule = document.getElementById('water-schedule').value.trim();
    const lastWatered = 0
    const outsidePlant = false
  
    if (name && waterSchedule && species) {
      const response = await fetch("/api/plant", {
        method: 'POST',
        body: JSON.stringify({ name, species, waterSchedule, outsidePlant, lastWatered }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/plant');
      } else {
        alert('Failed to create plant');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/plant/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/plant');
      } else {
        alert('Failed to delete plant');
      }
    }
  };
  
  document
    .querySelector('.new-plant-form')
    .addEventListener('submit', newFormHandler);
  
  // document
  //   .querySelector('.plant-list')
  //   .addEventListener('click', delButtonHandler);
  