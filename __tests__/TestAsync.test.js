/**
 * 异步方法测试
 */
import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TestAsync from "../src/components/TestAsync";

afterEach(cleanup);

test("increments counter after 0.5s", async () => {
  const { getByTestId, getByText } = render(<TestAsync />);

  fireEvent.click(getByTestId("button-up"));

  // expect(getByText("1")).toBeInTheDocument();
  await waitFor(() => {
    expect(getByText("1")).toBeInTheDocument();
  });
});
