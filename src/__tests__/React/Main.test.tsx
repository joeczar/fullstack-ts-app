import React from "react";
import { render,  RenderResult } from "@testing-library/react";

import App from "../../frontend/App";

let documentBody: RenderResult;

describe("<App />", () => {
  beforeEach(() => {
    documentBody = render(<App />);
  });
  test("should display a counter with a button that says press me", async () => {
    expect(documentBody.getByText('Press me')).toBeInTheDocument();
  });
});