export const userQuery = (googleId) => {
  const query = `*[_type == 'user' && _id == '${googleId}'] `;
  return query;
};
