export const userQuery = (googleId) => {
  const query = `*[_type == 'user' && _id == '${googleId}'] `;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == 'pin' && title match '${searchTerm}*' || cartegory match '${searchTerm}*' || about match  '${searchTerm}*']{
    image {
      asset -> {
        url
      },
    },
    _id,
    destination,
    postedBy -> {
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy -> {
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  } `;
