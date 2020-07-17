exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "admin", password: "password1" },
        { id: 2, username: "user1", password: "password1" },
        { id: 3, username: "user2", password: "password1" },
        { id: 4, username: "user3", password: "password1" },
        { id: 5, username: "user4", password: "password1" },
      ]);
    });
};
