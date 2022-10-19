//import the access key to the API
import APP_KEY from './constants.js';

//async function to get the comments from the API
const getCommentsFromAPI = async (itemID) => {
  const response = await fetch(`${APP_KEY}comments?item_id=${itemID}`);
  const commentsArr = await response.json();
  return commentsArr;
};

//async functions to create a new comment in the API
const setCommentsToAPI = async (itemID, name, comment) => {
  const data = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: itemID,
      username: name,
      comment: comment,
    }),
  };
  const response = await fetch(`${APP_KEY}comments`, data);
  console.log(response);
};

// the main pop-up function with 2 call back functions
const commentPopUp = (obj, id, getCommentCallback, setCommentCallback) => {
  //creating the nodes of the popup
  const popUpContainer = document.createElement('div');
  const showImage = document.createElement('img');
  const showTitle = document.createElement('h2');
  const showDescription = document.createElement('p');
  const commentsContainer = document.createElement('ul');
  const commentForm = document.createElement('form');
  const nameInput = document.createElement('input');
  const commentInput = document.createElement('input');
  const commentBtn = document.createElement('button');

  //adding semantics to the nodes created
  nameInput.type = 'text';
  commentInput.type = 'text';
  commentBtn.type = 'submit';
  nameInput.setAttribute('placeholder', 'Your name');
  commentInput.setAttribute('placeholder', 'Your insight');
  commentBtn.innerText = 'Comment';

  //appending the inputs and comment button node to the form
  commentForm.appendChild(nameInput);
  commentForm.appendChild(commentInput);
  commentForm.appendChild(commentBtn);

  //appending the nodes of the popup to the popup container
  popUpContainer.appendChild(showImage);
  popUpContainer.appendChild(showTitle);
  popUpContainer.appendChild(showDescription);
  popUpContainer.appendChild(commentsContainer);
  popUpContainer.appendChild(commentForm);

  //addinng the features of the show that has been clicked
  showImage.src = `${obj.show.image.original}`;
  showTitle.innerText = `${obj.show.name}`;
  showDescription.innerText = `${obj.show.summary}`;

  //this callback will call the getElementsFromAPI function
  const CommentObjArr = getCommentCallback(id).then((data) => data);

  //constructing new comments from the array of objects
  CommentObjArr.forEach((e) => {
    const newComment = document.createElement('li');
    newComment.innerText = `${e.creation_date} ${e.username}: ${e.comment}`;
    commentsContainer.appendChild(newComment);
  });

  //adding the event listener for the submit event of the form
  commentForm.addEventListener('submit', () => {
    //this callback will call the getElementsFromAPI function
    setCommentCallback(id, nameInput.value, commentInput.value);
    commentForm.reset();
  });
};

export default commentPopUp;
