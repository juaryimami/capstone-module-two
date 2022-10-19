import APP_KEY from './constants.js';

const getCommentsFromAPI = async (itemID) => {
  const response = await fetch(`${APP_KEY}comments?item_id=${itemID}`);
  const commentsArr = await response.json();
  return commentsArr;
};

const commentPopUp = (obj, id, callback) => {
  const popUpContainer = document.createElement('div');
  const showImage = document.createElement('img');
  const showTitle = document.createElement('h2');
  const showDescription = document.createElement('p');
  const commentsContainer = document.createElement('ul');
  const commentForm = document.createElement('form');
  const nameInput = document.createElement('input');
  const commentInput = document.createElement('input');
  const commentBtn = document.createElement('button');

  nameInput.type = 'text';
  commentInput.type = 'text';
  commentBtn.type = 'submit';
  nameInput.setAttribute('placeholder', 'Your name');
  commentInput.setAttribute('placeholder', 'Your insight');
  commentBtn.innerText = 'Comment';

  commentForm.appendChild(nameInput);
  commentForm.appendChild(commentInput);
  commentForm.appendChild(commentBtn);

  popUpContainer.appendChild(showImage);
  popUpContainer.appendChild(showTitle);
  popUpContainer.appendChild(showDescription);
  popUpContainer.appendChild(commentsContainer);
  popUpContainer.appendChild(commentForm);

  showImage.src = `${obj.show.image.original}`;
  showTitle.innerText = `${obj.show.name}`;
  showDescription.innerText = `${obj.show.summary}`;

  const CommentObjArr = callback(id).then((data) => data);

  CommentObjArr.forEach((e) => {
    const newComment = document.createElement('li');
    newComment.innerText = `${e.creation_date} ${e.username}: ${e.comment}`;
    commentsContainer.appendChild(newComment);
  });
};

export default commentPopUp;
