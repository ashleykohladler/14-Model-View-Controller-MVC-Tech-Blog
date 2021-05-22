const commentFormHandler = async (event) => {
    event.preventDefault();
    // const comment_title = document.querySelector('#comment_title-comment').value.trim();
    const comment_description = document.querySelector('#comment-body').value.trim();
    const blog_id = document.querySelector('.comment-form').dataset.blog_id;
    if (comment_description && blog_id ) {
      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ comment_description, blog_id }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);