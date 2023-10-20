const newFormHandler = async (event) => {
    event.preventDefault();
  
    const post_title = document.querySelector('#postTitle').value.trim();
    const post_description = document.querySelector('#postSubmission').value.trim();
  
    if (post_description && post_title) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ post_description, post_title}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.submit-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);
  