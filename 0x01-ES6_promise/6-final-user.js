import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const results = [];

  const userPromise = signUpUser(firstName, lastName)
    .then((user) => {
      results.push({ status: 'fulfilled', value: user });
    })
    .catch((error) => {
      results.push({ status: 'rejected', value: error });
    });

  const photoPromise = uploadPhoto(fileName)
    .then((photo) => {
      results.push({ status: 'fulfilled', value: photo });
    })
    .catch((error) => {
      results.push({ status: 'rejected', value: error });
    });

  await Promise.allSettled([userPromise, photoPromise]);

  return results;
}
