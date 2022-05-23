import React from 'react';

const Blog = () => {
    return (
        <div className='mt-20 mx-4 md:mx-8 lg:mx-lg'>
            <h1 className='text-3xl text-primary font-bold uppercase my-8 text-center'>question and answer</h1>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="border p-4 rounded-xl border-x-8 border-blue-300 shadow-md">
                    <h1 className='text-[18px] font-bold text-accent'>How will you improve the performance of a React Application?</h1>
                    <div className="mt-3">
                        <p>Before optimizing a React application, we must understand how React updates its UI and how to measure an app’s performance. This makes it easy to solve any React performance problems.</p>
                    </div>
                </div>
                <div className="border p-4 rounded-xl border-x-8 border-blue-300 shadow-md">
                    <h1 className='text-[18px] font-bold text-accent'>What are the different ways to manage a state in a React application?</h1>
                    <div className="mt-3">
                        <p>Before optimizing a React application, we must understand how React updates its UI and how to measure an app’s performance. This makes it easy to solve any React performance problems.</p>
                    </div>
                </div>
                <div className="border p-4 rounded-xl border-x-8 border-blue-300 shadow-md">
                    <h1 className='text-[18px] font-bold text-accent'> How does prototypical inheritance work?</h1>
                    <div className="mt-3">
                        <p>Before optimizing a React application, we must understand how React updates its UI and how to measure an app’s performance. This makes it easy to solve any React performance problems.</p>
                    </div>
                </div>
                <div className="border p-4 rounded-xl border-x-8 border-blue-300 shadow-md">
                    <h1 className='text-[18px] font-bold text-accent'> Why you do not set the state directly in React?</h1>
                    <div className="mt-3">
                        <p>Before optimizing a React application, we must understand how React updates its UI and how to measure an app’s performance. This makes it easy to solve any React performance problems.</p>
                    </div>
                </div>
                <div className="border p-4 rounded-xl border-x-8 border-blue-300 shadow-md">
                    <h1 className='text-[18px] font-bold text-accent'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <div className="mt-3">
                        <p>Before optimizing a React application, we must understand how React updates its UI and how to measure an app’s performance. This makes it easy to solve any React performance problems.</p>
                    </div>
                </div>
                <div className="border p-4 rounded-xl border-x-8 border-blue-300 shadow-md">
                    <h1 className='text-[18px] font-bold text-accent'>What is a unit test? Why should write unit tests?</h1>
                    <div className="mt-3">
                        <p>Before optimizing a React application, we must understand how React updates its UI and how to measure an app’s performance. This makes it easy to solve any React performance problems.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;