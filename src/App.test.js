import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("renders the h1", () => {
  const { getByText } = render(<App />);
  getByText(/Contact Form/i);
});

test("renders copyright footer", () => {
  const { getByText } = render(<App />);
  getByText(/Copyright 2020. All Rights Reserved./i)
})