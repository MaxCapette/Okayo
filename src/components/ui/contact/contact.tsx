"use client";
import React from 'react';
import FormContact from './contactform';
import "./contact.css";

const ContactPage: React.FC = () => {
    return (
        <section className=" py-12 md:py-20 lg:py-24 contact w-full">
        <div className="container space-y-4" id="contact">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-black">Contactez-nous</h2>
            <p className="text-black md:text-lg lg:text-xl p-10">
                Vous avez un projet en tête ou avez besoin de conseils d&apos;experts ? Remplissez le formulaire ci-dessous
                et notre équipe vous contactera.
            </p>
            <FormContact />
        </div>
        </section>
    );
};

export default ContactPage;