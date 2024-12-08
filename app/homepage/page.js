"use client";
import React, { useState } from "react";
import Link from "next/link";
import image from "../../app/Image/imagphone.png";
import Image from "next/image";

const Page = () => {
    const [formData, setFormData] = useState({
        hostName: "",
        slotDate: "",
        slotId: "",
        slotTimeLimit: "",
        slotUserLimit: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <div className="bg-[#ffffff] min-h-screen flex justify-center items-center">
            <div className="flex flex-col gap-6 md:flex-row w-full max-w-4xl items-center">
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex   -ml-[50px]">
                    <Image
                        src={image}
                        alt="Logo"
                        width={500}
                        height={500}
                        className="max-w-full"
                    />
                </div>

                {/* Form Section */}
                <div className="w-full md:w-1/2 flex flex-col p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Create a Slot</h1>
                        <p className="text-sm text-gray-400">
                            Fill in the details to create a slot.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Host Name */}
                        <div>
                            <label htmlFor="hostName" className="block mb-2 text-sm">
                                Host Name
                            </label>
                            <input
                                type="text"
                                name="hostName"
                                value={formData.hostName}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter Host Name"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#41a6d4] bg-gray-200 text-gray-900"
                            />
                        </div>

                        {/* Slot Date */}
                        <div>
                            <label htmlFor="slotDate" className="block mb-2 text-sm">
                                Slot Date
                            </label>
                            <input
                                type="date"
                                name="slotDate"
                                value={formData.slotDate}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#41a6d4] bg-gray-200 text-gray-900"
                            />
                        </div>

                        {/* Slot ID */}
                        <div>
                            <label htmlFor="slotId" className="block mb-2 text-sm">
                                Slot ID
                            </label>
                            <input
                                type="text"
                                name="slotId"
                                value={formData.slotId}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter Slot ID"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#41a6d4] bg-gray-200 text-gray-900"
                            />
                        </div>

                        {/* Slot Time Limit */}
                        <div>
                            <label htmlFor="slotTimeLimit" className="block mb-2 text-sm">
                                Slot Time Limit (in minutes)
                            </label>
                            <input
                                type="number"
                                name="slotTimeLimit"
                                value={formData.slotTimeLimit}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter Time Limit"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#41a6d4] bg-gray-200 text-gray-900"
                            />
                        </div>

                        {/* Slot User Limit */}
                        <div>
                            <label htmlFor="slotUserLimit" className="block mb-2 text-sm">
                                Slot User Limit
                            </label>
                            <input
                                type="number"
                                name="slotUserLimit"
                                value={formData.slotUserLimit}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter User Limit"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#41a6d4] bg-gray-200 text-gray-900"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-[#41a6d4] hover:bg-[#4185a4] font-bold w-full rounded-[25px] py-2 text-white"
                        >
                            Submit
                        </button>
                    </form>

                    <Link href="/">
                        <div className="flex justify-center mx-auto mt-[10px]">
                            <button className="flex items-center justify-center w-1/2 px-5 py-1 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 rtl:rotate-180 text-rose-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                                    />
                                </svg>
                                <span>Go back</span>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page;