import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
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

test("Make sure submit button is clicked", () => {

    const { getByText, getAllByText } = render(<ContactForm />);

    const submitButton = getByText(/submit/i);

    fireEvent.click(submitButton);

});

test("Contact form adds contact", () => {

    const { getByLabelText, getByText } = render(<ContactForm />);
    
    const firstNameInput = getByLabelText(/First Name/i);
    const lastNameInput  = getByLabelText(/Last Name/i);
    const emailInput     = getByLabelText(/Email/i);
    const messageInput   = getByLabelText(/Message/i);
    const submitButton = getByText(/submit/i);

    fireEvent.blur( firstNameInput, {
        target: { name: "firstName", value: "Eddie" }
    });

    fireEvent.blur( lastNameInput, {
        target: { name: "lastName", value: "Madrigal" }
    });

    fireEvent.blur( emailInput, {
        target: { name: "email", value: "edmadrigal@yahoo.com" }
    });

    fireEvent.blur( messageInput, {
        target: { name: "message", value: "test message" }
    });

    fireEvent.click(submitButton);

});