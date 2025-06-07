import mocksManager from "../dao/mongo/manager/mocks.manager.js";

const createMockUser = async (req, res, next) => {
  try {
    const { uid } = req.params;
    const one = await mocksManager.create(uid);
    if (!one) {
      return res.status(404).json({ response: "user not created" });
    }
    return res.status(201).json({ message: "User created", response: one });
  } catch (error) {
    next(error);
  }
};

const createMockPet = async (req, res, next) => {
  try {
    const { users, pets } = req.body;
    if (!users || !pets) {
      return res
        .status(400)
        .json({ error: "Se requieren los campos users y pets" });
    }

    const createdUsers = [];
    const createdPets = [];

    for (let i = 0; i < users; i++) {
      const user = await userManager.create();
      createdUsers.push(user);
    }

    for (let i = 0; i < pets; i++) {
      const pet = await petManager.create();
      createdPets.push(pet);
    }

    res.status(200).json({
      message: `Se generaron ${createdUsers.length} usuarios y ${createdPets.length} mascotas.`,
    });
  } catch (error) {
    next(error);
  }
};

const readAllMocks = async (req, res, next) => {
  try {
    const { filter } = req.query;
    const all = await mocksManager.readAll(filter);
    return res.status(200).json({ response: all });
  } catch (error) {
    next(error);
  }
};

const generateData = async (req, res, next) => {
  try {
    const { users, pets } = req.body;
    if (!users || !pets) {
      return res.status(400).json({ error: "se requieren users y pets" });
    }
  } catch (error) {
    next(error);
  }
};

export { createMockUser, createMockPet,readAllMocks };
