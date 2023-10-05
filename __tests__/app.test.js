import App from "../src/App";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import {expect, jest, it, describe} from '@jest/globals';
// import axios from "axios";



describe("stuff", () => {
  it("header component is visible", () => {
    render(<App />);
    const header = screen.getByTestId("header");
    expect(header).toBeVisible();
  });

  it("something else is visible", () => {
    render(<App />);
    const input = screen.getByTestId("urlInput");
    expect(input).toBeInTheDocument();
  });

  // it("submit calls callApi", () => {
  //   render(<App />);
  //   const submitButton = screen.getByTestId("goButton");
  //   let mockAxiosCall = jest.mock("axios");
  //   fireEvent.submit(submitButton);
  //   expect(mockAxiosCall).toBeCalled();
  // });
});
