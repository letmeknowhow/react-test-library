/**
 * 异步请求
 */
import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios";
import TestAxios from "../src/components/TestAxios";

jest.mock("axios");

test("should display a loading text", () => {
  const { getByTestId } = render(<TestAxios />);

  expect(getByTestId("loading")).toHaveTextContent("Loading...");
});

test("should load and display the data", async () => {
  const url = "/greeting";
  const { getByTestId } = render(<TestAxios url={url} />);

  axiosMock.get.mockResolvedValueOnce({
    data: { greeting: "hello there" },
  });

  fireEvent.click(getByTestId("fetch-data"));

  const greetingData = await waitFor(() => getByTestId("show-data"));

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
  expect(greetingData).toHaveTextContent("hello there");
});
