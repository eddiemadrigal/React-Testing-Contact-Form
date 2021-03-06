import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {

  const [data, setData] = useState();

  const { register, errors, handleSubmit } = useForm({
    mode: "onChange"
  });

  const onSubmit = data => {
    setData(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="First Name"
            ref={register({ required: true, minLength: 2, maxLength: 10 })}
          />
          {errors.firstName && (
            <p className="error">Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p className="error">Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="Email">
            Email*
          </label>
          <input 
            id="email"
            name="email" 
            ref={register({ required: true })} 
          />
          {errors.email && (
            <p className="error">Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea 
            id="message"
            name="message" 
            ref={register({ required: false })} 
          />
        </div>

        <div>
          <div id="tosSection">
            <input 
              type="checkbox" 
              id="tos" 
              name="tos" 
              value="acceptTOS" 
              ref={register({ required: true })}
            />
            <label htmlFor="tos"> I accept the <a href="https://tos.gov">Terms of Service</a></label>
          </div>
          {errors.tos && (
            <p className="error">Looks like there was an error: {errors.tos.type}</p>
          )}
        </div>

        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input type="submit" value="submit"/>
      </form>
    </div>
  );
};

export default ContactForm;
