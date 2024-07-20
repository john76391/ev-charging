import bcrypt from "bcrypt";
const saltRounds = 10;

export const passwordHash = async (myPlaintextPassword) => {
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(myPlaintextPassword, salt);
};
