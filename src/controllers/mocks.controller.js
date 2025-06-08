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


const readAllMocks = async (req, res, next) => {
  try {
    const { filter } = req.query;
    const all = await mocksManager.readAll(filter);
    return res.status(200).json({ response: all });
  } catch (error) {
    next(error);
  }
};

const createMockPet = async (req, res, next) => {
  try {
    const { users, pets } = req.body;
    if (!users || !pets) {
      return res.status(400).json({ error: "se requieren users y pets" });
    }

    const usersInserted = [];
    for (let i = 0; i < users; i++) {
      const createdUser = await mocksManager.create();
      usersInserted.push(createdUser);
    }

    const petsInserted = [];
    for (let i = 0; i < pets; i++) {
      const createdPet = await mocksManager.createPet();
      petsInserted.push(createdPet);
    }

    res.status(201).json({
      message: "Datos generados correctamente",
      users: usersInserted.length,
      pets: petsInserted.length,
    });
  } catch (error) {
    next(error);
  }
};

export { createMockUser, createMockPet, readAllMocks };
