import { faker } from "@faker-js/faker";
import { createHash } from "../../../helpers/hash.helper.js";
import User from "../models/users.model.js";

class MocksManager {
  constructor(model) {
    this.model = User;
  }

  create = async (uid) => {
    try {
      const newUser = {
        _id: faker.database.mongodbObjectId(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: "coder123",
        age: faker.number.int({ min: 18, max: 65 }),
        role: "user", // al azar entre user y admin
        pets: [],
      };
      const hashPass = createHash(newUser.password);
      newUser.password = hashPass;
      const one = await this.model.create(newUser);
      return one;
    } catch (error) {
      throw error;
    }
  };

  createPets = async () => {
    try {
      const newPet = {
        _id: faker.database.mongodbObjectId(),
        name: faker.animal.cat(),
        species: faker.animal.type(),
        age: faker.number.int({ min: 1, max: 15 }),
      };
      const one = await this.model.create(newPet)
      return one
    } catch (error) {
      next(error);
    }
  };

  readAll = async (filter) => {
    try {
      const all = this.model.find(filter);
      return all;
    } catch (error) {
      throw error;
    }
  };
}

const mocksManager = new MocksManager();
export default mocksManager;
