import React from "react";
import { create } from "react-test-renderer";
import TeaEditor from "..";

test("snapshot", () => {
  const c = create(<TeaEditor />);
  expect(c.toJSON()).toMatchSnapshot();
});

test("set sample state", () => {
  const c = create(<TeaEditor />);
  const instance = c.getInstance();

  expect(instance.state.sample).toBe(false);
  instance.handleClickTrue();
  expect(instance.state.sample).toBe(true);
  instance.handleClickFalse();
  expect(instance.state.sample).toBe(false);
});
