import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const results = [];

  try {
    const user = await signUpUser(firstName, lastName);
    results.push({ status: 'fulfilled', value: user });
  } catch (error) {
    results.push({ status: 'rejected', value: error });
  }

  try {
    const photo = await uploadPhoto(fileName);
    results.push({ status: 'fulfilled', value: photo });
  } catch (error) {
    results.push({ status: 'rejected', value: error });
  }

  return results;
}
