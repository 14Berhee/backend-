const comments = [
  {
    id: 1,
    postId: 1,
    like: 10,
    message: "dugaaraa uldee",
    createdTime: "Friday sep 20 2024 09:22:03 GMT+0800",
  },
  {
    id: 2,
    postId: 2,
    like: 17,
    message: "motherfucker",
    createdTime: "Friday sep 20 2024 09:22:03 GMT+0800",
  },
];

exports.createComm = (request, response) => {
  const { postId, like, message, createdTime } = request.body;

  const commentId = comments.length + 1;

  comments.push({
    id: commentId,
    postId: postId,
    like: like,
    message: message,
    createdTime: createdTime,
  });

  const newComment = comments[comments.length - 1];

  response
    .status(200)
    .json({ message: "you successfully created comment", comment: newComment });
};
