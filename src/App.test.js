import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("should renders Air", () => {
  render(<App />);
  const textElement = screen.getByText(/Air/i);
  expect(textElement).toBeInTheDocument();
});

it("should renders status ok when input value Paris", async () => {
  render(<App />);
  // Simulate user input and submit
  const input = screen.getByPlaceholderText("Enter city");
  userEvent.type(input, "Paris");
  userEvent.click(screen.getByText("Search"));

  // Wait for the API call to complete
  await screen.findByText("Air quality data loaded");

  // Check if the data variable is not null
  const dataElement = screen.getByTestId("data");
  expect(dataElement.textContent).not.toBeNull();
});
