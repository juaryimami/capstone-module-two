const countComments = (node) => {
  const nodes = [...node.children];
  return nodes.length;
};

module.exports = countComments;
