function findAll(model) {
  return () => model.findAll();
}

export = {
  findAll
}