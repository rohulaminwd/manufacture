import React from 'react';
import logo from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <div className='bg-base-100 text-base-content'>
            <div className='flex justify-center'>
                <img src={logo} className='mt-4' alt="" />
            </div>
            <footer className="footer p-10 px-4 lg:px-16">
                <div className='rounded-md shadow-md w-full p-4'>
                    <span className="footer-title">Services</span> 
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div> 
                <div className='rounded-md shadow-md w-full p-4'>
                    <span className="footer-title">Company</span> 
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div> 
                <div className='rounded-md shadow-md w-full p-4 h-full'>
                    <span className="footer-title">Legal</span> 
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            
            <div>
                <p className='text-center pb-4'>Copyright 2022 All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;