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

export function UnderConstructionBanner(props) {
  const [state, handleSubmit] = useForm("courseConstruction");

  return (
    <div className="rounded-md bg-yellow-50 p-4 m-4 max-w-5xl mx-auto">
      <div className="flex">
        <div className="flex-shrink-0 pt-2">
          <svg
            className="h-5 w-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3 flex">
          <div className="flex-1 p-2">
            <h3 className="text-md leading-5 font-medium text-yellow-800">
              Under Construction
            </h3>
            <div className="mt-2 text-sm leading-5 text-yellow-700">
              <p>
                The development of this course is currently in progress. Some
                lessons and modules are incomplete.
              </p>
            </div>
          </div>
          {state.succeeded ? (
            <div className="flex-1 p-2 flex items-center h-full">
              <h3 className="text-md leading-5 font-medium text-yellow-800">
                Thank you! You'll receive an email when the course is ready.
              </h3>
            </div>
          ) : (
            <div className="flex-1 p-2">
              <h3 className="text-md leading-5 font-medium text-yellow-800">
                Subscribe to be notified when the content is complete
              </h3>
              <form className="sm:flex mt-2" onSubmit={handleSubmit}>
                <input
                  aria-label="Email address"
                  type="email"
                  name="email"
                  required
                  className="appearance-none w-full px-4 py-1 border border-gray-400 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button className="w-full flex items-center justify-center px-4 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-500 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition duration-150 ease-in-out">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
