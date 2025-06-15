import bcrypt from 'bcrypt';

export async function validatePassword(
  password: string | undefined,
  currentPassword: string | undefined
): Promise<string | undefined> {
  if (!password || currentPassword !== undefined && (await bcrypt.compare(password, currentPassword))) return;
  let hashedPassword = await bcrypt.hash(password, 6);
  return hashedPassword
}