const users = [
  { id: 1, firstname: "John", lastname: "Doe" },
  { id: 2, firstname: "Berkhe", lastname: "Enkhbold" },
];

exports.createUser = (request, response) => {
  users.push({ ...request.body });
  response.status(200).json({ message: "successfully updated", users });

  if (id) {
    response.send("you successfully updated");
  } else {
    response.send(`user ${id} failed updated`);
  }
};
