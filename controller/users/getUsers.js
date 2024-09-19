const users = [
  { id: 1, firstname: "John", lastname: "Doe" },
  { id: 2, firstname: "Berkhee", lastname: "Enkhbold" },
];

exports.getUsers = (request, response) => {
  response.status(200).json({
    users: users,
  });
};
