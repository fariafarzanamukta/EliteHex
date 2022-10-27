import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-10'>Our Blogs</h1>
            <div className="card w-[70%] mx-auto bg-base-100 shadow-xl my-10">
                <div className="card-body">
                    <h2 className="">1.what is cors?</h2>
                    <p>CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests. The same-origin security policy forbids cross-origin access to resources</p>
                </div>
            </div>
            <div className="card w-[70%] mx-auto bg-base-100 shadow-xl my-10">
                <div className="card-body">
                    <h2 className="">  2.Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Release Apps Confidently. Cross-Platform Solutions. Boost App Engagement.</p>
                </div>
            </div>
            <div className="card w-[70%] mx-auto bg-base-100 shadow-xl my-10">
                <div className="card-body">
                    <h2 className="">3.How does the private route work?</h2>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </div>
            </div>
            <div className="card w-[70%] mx-auto bg-base-100 shadow-xl my-10">
                <div className="card-body">
                    <h2 className="">4.What is Node? How does Node work?</h2>
                    <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend.
                        Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;