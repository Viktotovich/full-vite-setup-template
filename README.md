# Vitetest project config / template

Guide:
https://vitest.dev/guide/

In case things go wrong:
https://www.robinwieruch.de/vitest-react-testing-library/


##Standard:
So how do you avoid testing implementation details? Using the right tools is a good start. Here's a process for how to know what to test. Following this process helps you have the right mindset when testing and you will naturally avoid implementation details:

    What part of your untested codebase would be really bad if it broke? (The checkout process)
    Try to narrow it down to a unit or a few units of code (When clicking the "checkout" button a request with the cart items is sent to /checkout)
    Look at that code and consider who the "users" are (The developer rendering the checkout form, the end user clicking on the button)
    Write down a list of instructions for that user to manually test that code to make sure it's not broken. (render the form with some fake data in the cart, click the checkout button, ensure the           mocked /checkout API was called with the right data, respond with a fake successful response, make sure the success message is displayed).
    Turn that list of instructions into an automated test.
    
Credit: https://kentcdodds.com/blog/testing-implementation-details
