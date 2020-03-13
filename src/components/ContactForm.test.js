import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import ContactForm from "./ContactForm";

test("Renders ContactForm without crashing", () => {
  render(<ContactForm />);
});


test("Add value to firstName input field", () => {

    const { getByLabelText } = render(<ContactForm />);

    const firstNameInput = getByLabelText(/First Name/i);

    fireEvent.blur( firstNameInput, {
        target: { value: "Eddie" }
    });

    expect(firstNameInput.value).toBe("Eddie")

});

test("Check to make sure firstName is not less than 2 characters in length", async () => {

    const { getByLabelText, getByText } = render(<ContactForm />);

    const firstNameInput = getByLabelText(/First Name/i);

    fireEvent.blur( firstNameInput, {
        target: { value: "e" }
    });

    await wait(() => expect(getByText(/Looks like there was an error: minLength/)).toBeInTheDocument())
});