import { render, screen } from "@testing-library/react";
import App from "./App";

// Smoke test: the app renders and the hero headline is present.
test("renders hero headline", () => {
  render(<App />);
  expect(screen.getByText(/do real work/i)).toBeInTheDocument();
});

// The deploy-blocking check: contact section must exist so clients can reach out.
test("renders contact CTA", () => {
  render(<App />);
  expect(screen.getAllByText(/Start a project/i).length).toBeGreaterThan(0);
});
