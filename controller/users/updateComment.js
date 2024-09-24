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

exports.updateComms = (request, response) => {
  const { id } = request.params;
  const { body } = request;

  const updateComms = comments.map((comment) => {
    if (comment.id === Number(id)) {
      comment.postId = body.postId;
      comment.like = body.like;
      comment.message = body.message;
      comment.createdTime = body.createdTime;
      return comment;
    }
    return comment;
    o;
  });

  if (updateComms) {
    response
      .status(200)
      .json({ comments: updateComms, message: "you successfully updated com" });
  } else {
    response.status(400).send(`you ${id} failed to updated`);
  }
};
