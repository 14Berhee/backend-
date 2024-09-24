const users = [
  { id: 1, firstname: "John", lastname: "Doe" },
  { id: 2, firstname: "Berkhe", lastname: "Enkhbold" },
];

exports.deleteUser = (request, response) => {
  const { id } = request.params;
  const { body } = request;

  const deletedUser = users.filter((ustsan) => {
    if (ustsan.id === Number(id)) {
      ustsan.firstname = body.firstname;
      ustsan.lastname = body.lastname;
      return ustsan;
    }

    return ustsan;
  });

  if (deletedUser) {
    response
      .status(200)
      .json({ users: deletedUser, message: "you successfully deleted" });
  } else {
    response.status(400).send(`ustsan ${id} failed to delete`);
  }
};
