import { Children } from "react";

export const Each = ({ render, of }) => {
  Children.toArray(of.map((item, index) => render(item, index)));
};
