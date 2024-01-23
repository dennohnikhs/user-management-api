const test = require("ava");
const userService = require("../user.service");
let sampleUser;
test.beforeEach(() => {
  sampleUser = {
    name: "test",
    email: "test@gmail.com",
    city: "Nairobi",
    country: "Kenya",
  };
});
test("must add a user", (t) => {
  const expectedId = 1;
  const user = userService.addUser(sampleUser);
  t.is(expectedId, 1);
  t.deepEqual(user, { id: 1, ...sampleUser });
});
test("must update a user", (t) => {
  const userId = 1;

  updatedDetails = {
    name: "kilios",
    email: "kilios@gmail.com",
    city: "Nairobi",
    country: "Kenya",
  };

  const updatedUser = userService.updateUser(userId, updatedDetails);

  // Check if the user ID matches the expected ID
  t.is(updatedUser.id, userId);

  // Check if the user details are updated correctly
  const expectedUser = { id: userId, ...updatedDetails };
  t.deepEqual(updatedUser, expectedUser);
});
