const comments = [
  {
    id: 1,
    postId: 1,
    Like: 10,
    message: "dugaaraa uldee",
    createdTime: "Friday sep 20 2024 09:22:03 GMT+0800",
  },
  {
    id: 2,
    postId: 2,
    Like: 17,
    message: "dugaaraa uldee",
    createdTime: "Friday sep 20 2024 09:22:03 GMT+0800",
  },
];

exports.getComments = (request, response) => {
  response.status(200).json({
    message: "All comments",
    comments: comments,
  });
};
