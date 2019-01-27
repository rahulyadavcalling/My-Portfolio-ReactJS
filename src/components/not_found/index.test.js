import React from "react";
import renderer from "react-test-renderer";

import NotFound from "./index.js";

it("renders correctly when there are no items", () => {
  const tree = renderer.create(<NotFound />).toJSON();
  expect(tree).toMatchSnapshot();
});
