import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders your music title", () => {
  render(<App />);
  const linkElement = screen.getByText(/your music/i);
  expect(linkElement).toBeInTheDocument();
});
