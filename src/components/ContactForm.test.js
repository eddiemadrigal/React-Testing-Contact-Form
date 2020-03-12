import React from "react";
import { render, getByText, fireEvent } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import ContactForm from "./ContactForm";

test("Renders ContactForm without crashing", () => {
  render(<ContactForm />);
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