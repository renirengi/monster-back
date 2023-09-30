import { genSalt, hash } from 'bcrypt';

export async function hashedPass(password: string): Promise<string> {
  const salt = await genSalt();
  return hash(password, salt);
}
