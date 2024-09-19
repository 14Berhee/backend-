const users = [
  { id: 1, firstname: "John", lastname: "Doe" },
  { id: 2, firstname: "Berkhe", lastname: "Enkhbold" },
];

exports.updateUser = (request, response) => {
  const { id } = request.params;
  const { body } = request;

  const updatedUser = users.map((user) => {
    if (user.id === Number(id)) {
      user.firstname = body.firstname;
      user.lastname = body.lastname;
      return user;
    }

    return user;
  });

  if (updatedUser) {
    response
      .status(200)
      .json({ users: updatedUser, message: "You successfully updated" });
  } else {
    response.status(400).send(`user ${id}failed to updated`);
  }
};
