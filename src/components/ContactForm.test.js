import React from "react";
import { render, getByText, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("Renders ContactForm without crashing", () => {
  render(<ContactForm />);
});

test("Contact form adds contact", () => {

    const { getByLabelText, getByText } = render(<ContactForm />);
    
    const firstNameInput = getByLabelText(/firstName/i);
    const lastNameInput  = getByLabelText(/lastName/i);
    const emailInput     = getByLabelText(/email/i);
    const messageInput   = getByLabelText(/message/i);

    fireEvent.change( firstNameInput, {
        target: { name: "firstName", value: "Eddie" }
    });

    fireEvent.change( lastNameInput, {
        target: { name: "lastName", value: "Madrigal" }
    });

    fireEvent.change( emailInput, {
        target: { name: "email", value: "edmadrigal@yahoo.com" }
    });

    fireEvent.change( messageInput, {
        target: { name: "message", value: "test message" }
    });

    console.log(firstNameInput.value);
    const submitButton = getByText(/submit/i);
    fireEvent.click(submitButton);

});