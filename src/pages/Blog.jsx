import React from 'react';
const Blog = () => {
    return (
        <div className='container max-w-[1280px] mx-auto px-5 lg:px-0 pb-16'>
            <h1 className='mt-20 text-4xl font-bold text-center'>Important React Concepts</h1>
            {/* Question no 1: */}
            <div>
                <h2 className='mt-10 font-semibold text-2xl'> 1. Tell us the differences between uncontrolled and controlled components?</h2>

                <div className='mt-5 p-2'>
                    <p>
                        <span className='font-semibold'>Controlled Component: </span>
                        {`A controlled component is a component which states and behavior are managed by it's parent component. These states are passed down to the child controlled component via props. 
                        For example in case of a input field, the value of the input field is tied to a state of the parent component.
                        `}
                        <br />
                        {
                            `
                        When the user interacts with the that controlled component, we use an event handler to update the state variable which interns updates the controlled component's user interface. 
                        `
                        }

                    </p>
                    <br />
                    <p>
                        <span className='font-semibold'>Uncontrolled Component: </span>
                        {
                            `Uncontrolled component's states are managed by the component itself. In case of a input field the value of the input field is determined by the user's input directly.`
                        }
                        <br />
                        {
                            `
                             Controlled and uncontrolled component both have their pros and cons. Controlled component are more easy to manage and debug. But they required more code, also sometimes causes many level of nested components. 
                            `
                        }
                        {
                            `
                             On the other hand uncontrolled component are easy to implement but they can be more difficult to tract and manage in larger project. 
                            `
                        }
                    </p>

                </div>
            </div>
            {/* Question no 2: */}
            <div>
                <h2 className='mt-10 font-semibold text-2xl'> 2.How to validate React props using PropTypes?</h2>
                <div className='mt-5 p-2'>
                    <p>
                        {
                            `In react we use props to send data from parent component to the child component. If a component receives wrong type of component even don't receive a particular prop at all it can cause unnecessary bugs and error. 
                          `
                        }
                    </p>
                    <p>
                        React has an internal mechanism for prop validation called propTypes. To use it we can use the following steps:
                    </p>
                    <p>
                        {`Let's Look at an example to understand how it works.`}:
                    </p>
                    <pre className='mt-2 bg-slate-500 text-white p-3 rounded-md'>
                        <code>
                            {`import PropTypes from 'prop-types';

function TestChildComponent(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

TestChildComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

TestChildComponent.defaultProps = {
  description: 'No description provided'
};

export default TestChildComponent;';`}
                        </code>
                    </pre>
                    <br />
                    <p>
                        In the above example we have used propTypes property to specify the type of prop we are wanting. If we give wrong prop, react will through a warning.
                        <br />
                        {`isRequired property means it's need to be present. Otherwise react will through a warning`}
                        <br />
                        {
                            `Finally defaultProps property has been used to give description prop a default value. If we won't provide this prop, this value will be shown. `
                        }
                    </p>
                </div>
            </div>

            {/* Question no 3: */}
            <div>
                <h2 className='mt-10 font-semibold text-2xl'> 3.Tell us the difference between nodejs and express js.</h2>
                <div className='mt-5 p-2'>
                    <p>
                        {
                            `Nodejs is a runtime environment build on top of google's v8 engine. It's allows developers to build  server side application with Java Script. Nodejs also provide a set of built in libraries for handling network requests, file I/O, and other low level system tasks.`
                        }
                    </p>
                    <br />
                    <p>
                        {
                            `Express js is on other hand web application framework built on top of Nodejs. It gives us higher-level abstraction for building web application and APIs by simplifying common tasks such as routing, handing HTTP request and responses, and middleware management. Express JS also provides a flexible plugin architecture that allows developers to add more functionality to their application. `
                        }
                    </p>
                </div>
            </div>
            {/*Question no 4:  */}
            <div>
                <h2 className='mt-10 font-semibold text-2xl'> 4. What is a custom hook, and why will you create a custom hook?</h2>
                <div className='mt-5 p-2'>
                    <p>
                        {
                            `In React a custom hook is a reusable function that allows us to encapsulate logic that can be used multiple places and components`
                        }
                    </p>
                    <p>
                        {
                            ``
                        }
                    </p>
                    <p>
                        They are like the useState and useEffect hook but incase of custom hooks we write them on our own.
                        The purpose of react custom hook is the same as normal JS function, to reuse same code and encapsulate complex coding from other components to make it easier to create and maintain projects.
                    </p>
                    <br />
                    <p>
                       {
                        `
                        The main difference between a normal Js function and react custom hook is in custom hook we can use react features like useState, useEffect, useContext where in normal Js function we can't use them. Also unlike react functional component react custom hooks returns normal, non jsx data.`
                       }
                    </p>
                    <p>
                        {
                         `To create a custom hook in React, we simply write a function that uses one or more of the built in react hooks and then export that function for use in other components. Also it's a convention to start naming with 'use' word for custom hook. Then follow normal naming convention for the other part of the name.`
                            
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;