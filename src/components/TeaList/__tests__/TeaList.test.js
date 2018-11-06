import React from "react";
import { create } from "react-test-renderer";
import TeaList from "..";

test("snapshot", () => {
  const c = create(<TeaList />);
  expect(c.toJSON()).toMatchSnapshot();
});
