import React from "react";
import { create } from "react-test-renderer";
import TeaList from "..";

test("snapshot", () => {
  const c = create(<TeaList />);
  expect(c.toJSON()).toMatchSnapshot();
});

test("set sample state", () => {
  const c = create(<TeaList />);
  const instance = c.getInstance();

  expect(instance.state.sample).toBe(false);
  instance.handleClickTrue();
  expect(instance.state.sample).toBe(true);
  instance.handleClickFalse();
  expect(instance.state.sample).toBe(false);
});
