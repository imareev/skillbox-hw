import { assoc } from "./assoc";

export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

export const assingId = assoc('id', generateRandomString());

export const generateId = <O extends object>(obj: O) => {
    const id = generateRandomString();
    return assoc('id', id)(obj);
};
