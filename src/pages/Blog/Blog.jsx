import React from "react";
import { jsPDF } from "jspdf";

const Blog = () => {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Q: What is the differences between uncontrolled and controlled components? Ans: Uncontrolled components in React are components where the form data is handled by the DOM itself, whereas controlled components are components where the value of the form elements is managed by the React component. Controlled components are more powerful but also more complex to implement, while uncontrolled components are simpler to implement but have fewer features.", 10, 10);
    doc.save("a4.pdf");
  };

  return (
    <div>
      <div className="mt-5 text-center">
        <button onClick={handleDownloadPDF} className="btn btn-outline">
          Download PDF
        </button>
      </div>
      <div className="mx-10 mt-10">
        <div className="mb-4 border p-4 rounded-md">
          <h1 className="text-2xl font-bold mb-2">
            Q: What is the differences between uncontrolled and controlled
            components?
          </h1>
          <p className="text-lg font-medium text-gray-700">
            Ans: Uncontrolled components in React are components where the form
            data is handled by the DOM itself, whereas controlled components are
            components where the value of the form elements is managed by the
            React component. Controlled components are more powerful but also
            more complex to implement, while uncontrolled components are simpler
            to implement but have fewer features.
          </p>
        </div>
        <div className="mb-4 border p-4 rounded-md">
          <h1 className="text-2xl font-bold mb-2">
            Q: How to validate React props using PropTypes?
          </h1>
          <p className="text-lg font-medium text-gray-700">
            Ans: PropTypes is a utility in React that allows us to validate the
            data types and shapes of props passed to a component and to use
            PropTypes, we need to define a propTypes object on the component
            class with the expected prop types and shapes. By using PropTypes,
            you can catch errors early in development and ensure that components
            receive the correct data.
          </p>
        </div>
        <div className="mb-4 border p-4 rounded-md">
          <h1 className="text-2xl font-bold mb-2">
            Q: What is the difference between Node.js and Express.js?
          </h1>
          <p className="text-lg font-medium text-gray-700">
            Ans: Node.js is a runtime environment for running JavaScript code on
            the server and Express.js is a web framework built on top of Node.js
            that provides tools for building web applications and APIs,
            including routing, middleware, and template rendering. Node.js
            provides the platform, while Express.js provides the structure for
            building web applications.
          </p>
        </div>
        <div className="mb-4 border p-4 rounded-md">
          <h1 className="text-2xl font-bold mb-2">
            Q: What is a custom hook, and why will you create a custom hook?
          </h1>
          <p className="text-lg font-medium text-gray-700">
            Ans: A custom hook in React is a function that allows us to reuse
            stateful logic across multiple components. We might create a custom
            hook to encapsulate common behavior, such as fetching data from an
            API or managing form state, and avoid duplicating code across
            multiple components. Custom hooks help keep our code organized and
            modular.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
