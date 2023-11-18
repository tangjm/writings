
export function removeAllChildren(node) {
  while (node.firstChild !== null) {
    node.removeChild(node.lastChild);
  }
}
