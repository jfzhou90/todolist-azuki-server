export default (request, response, next) => {
  if (!request.user) {
    return response.status(401).send({ ERROR: 'You must log in!' });
  }

  return next();
};
