import { v4 } from "uuid";

export const generateRandomId = (): string => {
  return v4();
};
