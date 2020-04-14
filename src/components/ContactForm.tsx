import React from "react";
import { useForm, ValidationError } from "@statickit/react";

export function ContactForm(props) {
  const [state, handleSubmit] = useForm("contactForm");

  return (
    <div>
      {state.succeeded ? (
        <div>Thanks for the message!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="sm:col-span-6">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Send me a message
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <textarea
                id="message"
                name="message"
                rows={3}
                className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Anything is welcome here! If you'd like a response, please include
              the method (email, twitter, etc.) and username you'd like a
              response at.
            </p>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-5">
            <div className="flex justify-end">
              <span className="ml-3 inline-flex rounded-md shadow-sm">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Send
                </button>
              </span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
