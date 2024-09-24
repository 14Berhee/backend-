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
    message: "dugaaraa uldee",
    createdTime: "Friday sep 20 2024 09:22:03 GMT+0800",
  },
];

exports.deleteComments = (request, response) => {
  const { id } = request.param;
  const { body } = request;

  const deleteComments = comments.filter((comment) => {
    if (comments.id !== -Number(id)) {
      comment.postId = body.postId;
      comment.like = body.like;
      comment.message = body.message;
      comment.createdTime = body.createdTime;
      return comment;
    }
    return comment;
  });

  if (deleteComments) {
    response.send(200).json({
      comments: deleteComments,
      message: "you successfully deleted comment",
    });
  } else {
    response.status(400).send(`your ${id} failed to delete`);
  }
};
