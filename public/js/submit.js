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
        document.location.replace('/posts');
      } else {
        alert('Failed to create project');
      }
    }
  };
  

  document
    .querySelector('.submit-form')
    .addEventListener('submit', newFormHandler);
