import { users } from "@/lib/appwrite.config";
import { ID } from "node-appwrite";

type AddUserParams = {
  username: string;
  email: string;
  phone: string;
};

const addUser = async (user: AddUserParams): Promise<{ $id: string }> => {
  const res = await users.create(
    ID.unique(),
    user.email,
    user.phone,
    undefined,
    user.username
  );

  return { $id: res.$id };
};

const PatientService = {
  addUser,
};

export default PatientService;
