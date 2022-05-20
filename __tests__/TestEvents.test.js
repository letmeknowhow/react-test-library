import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TestEvents from "../src/components/TestEvents";

afterEach(cleanup);

test("increments counter", () => {
  const { getByTestId } = render(<TestEvents />);

  fireEvent.click(getByTestId("button-up"));

  expect(getByTestId("counter").textContent).toEqual('1');
});

test("decrements counter", () => {
  const { getByTestId } = render(<TestEvents />);

  fireEvent.click(getByTestId("button-down"));

  expect(getByTestId("counter")).toHaveTextContent("-1");
});

describe("<TestEvents />", () => {
  test("properly increments and decrements the counter", () => {
    const { getByText } = render(<TestEvents />);
    const counter = getByText("0");
    const incrementButton = getByText("Up");
    const decrementButton = getByText("Down");

    fireEvent.click(incrementButton);
    expect(counter.textContent).toBe("1");

    fireEvent.click(decrementButton);
    expect(counter.textContent).toEqual("0");
  });
});