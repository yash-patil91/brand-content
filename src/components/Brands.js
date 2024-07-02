/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const Brands = (props) => {
    const { setFormSubmitted } = props;
    const [formData, setFormData] = useState({
        brandName: "",
        brandTitle: "",
        brandCategory: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="flex flex-col justify-center w-full px-6 py-7 lg:px-8">
            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="brandName"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Brand Name
                        </label>
                        <div className="mt-1">
                            <input
                                id="brandName"
                                name="brandName"
                                type="text"
                                value={formData.brandName}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="brandTitle"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Brand Title
                        </label>
                        <div className="mt-1">
                            <input
                                id="brandTitle"
                                name="brandTitle"
                                type="text"
                                value={formData.brandTitle}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="brandCategory"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Brand Category
                        </label>
                        <div className="mt-1">
                            <input
                                id="brandCategory"
                                name="brandCategory"
                                type="text"
                                value={formData.brandCategory}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-sm text-gray-500">
                    <a onClick={() => setFormSubmitted(false)} className="font-semibold cursor-pointer leading-6 text-indigo-600 hover:text-indigo-500">
                        {"Back"}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Brands;
