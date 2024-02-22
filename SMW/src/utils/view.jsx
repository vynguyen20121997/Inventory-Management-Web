export const view = (props) => {
  return props.if ? props.children : null;
};
