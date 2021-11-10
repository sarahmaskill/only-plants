const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.getElementById('plant-name').value.trim();
    const species = document.getElementById('plant-species').value.trim();
    const waterSchedule = document.getElementById('water-schedule').value.trim();
    const outsidePlant = document.getElementById('outdoor-plant').value.trim()
    const lastWatered = document.getElementById('last-watered').value.trim();
    const plantImg = document.getElementById('plant-img').value.trim();
  
    if (name && waterSchedule && species && outsidePlant && lastWatered) {
      const response = await fetch("/api/plant", {
        method: 'POST',
        body: JSON.stringify({ name, species, waterSchedule, outsidePlant, lastWatered, plantImg }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        location.reload();;
      } else {
        console.log(outsidePlant)
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
  
   const displayPlantProfile = async (event) => {
     if (event.target.hasAttribute(`data-id`)){
       const id = event.target.getAttribute(`data-id`);
       console.log("ID CLICKED"+id)
       const response = await fetch(`/api/plant/${id}`, {
         method: `GET`
       });

      if(response.ok){
        document.location.replace(`/plantProfile`);
      }else{
        alert(`Failed to Load plant`)
      }
     }
   }

   document
     .querySelector('.new-plant-form')
     .addEventListener('submit', newFormHandler);
  
   document
     .querySelector('.plant-list')
     .addEventListener('click', delButtonHandler);

    document
    .querySelector(`.plpr`)
    .addEventListener(`click`, displayPlantProfile);
  