import { render, screen, fireEvent } from "@testing-library/react";
import { CitySearch } from "./CitySearch";

it("should renders Search", () => {
  render(<CitySearch />);
  const textElement = screen.getByText("Search");
  expect(textElement).toBeInTheDocument();
});

it("should change when input value updates", () => {
  render(<CitySearch />);
  const inputElement = screen.getByPlaceholderText("Enter city");
  fireEvent.change(inputElement, { target: { value: "New York" } });
  expect(inputElement.value).toBe("New York");
});

it("should renders new-york when input value New York", () => {
  const getAirQualityMock = jest.fn();
  render(<CitySearch getAirQuality={getAirQualityMock} />);

  const inputElement = screen.getByPlaceholderText("Enter city");
  const searchButton = screen.getByText("Search");

  fireEvent.change(inputElement, { target: { value: "New York" } });
  fireEvent.click(searchButton);

  expect(getAirQualityMock).toHaveBeenCalledWith("New-York");
});
