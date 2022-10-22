const countComments = (node) => {
  const nodes = [...node.children];
  return nodes.length;
};

export default countComments;
