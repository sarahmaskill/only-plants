const delButtonHandler = async (event) => {
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
      const response = await fetch(`/api/plant/${id}`, {
        method: 'DELETE',
      });
 
      if (response.ok) {
        document.location.replace('/userGarden');
      } else {
        alert('Failed to delete plant');
      }
    }
  };

  document
  .getElementById('delete-plant')
  .addEventListener('click', delButtonHandler);