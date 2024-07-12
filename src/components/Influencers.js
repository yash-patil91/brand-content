/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import { Container } from "@mui/material";
import MenuComponent from "./common/MenuComponent";
import DrawerComponent from "./common/DrawerComponent";
import Header from "./common/Header";

const Influencers = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);
    const [openDraw, setOpenDrawer] = useState(false);
    const [selectedData, setSelectedData] = useState({})
    const [buttonColor, setButtonColor] = useState('bg-indigo-600');
    const [clickedButtons, setClickedButtons] = useState({});

    const handleButtonClick = (index) => {
        setClickedButtons((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const openDrawer = () => setOpenDrawer(true);
    const closeDrawer = () => setOpenDrawer(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const truncateString = (str, num) => {
        if (str?.length <= num) {
            return str;
        }
        return str.slice(0, num) + '...';
    };
    const campaigns = [
        {
            title: "Summer Sale 2023, New Product launch - Summer 2023, back to School Sale 2023",
            description: "Nike is thrilled to announce the launch of our new product line for Summer 2023! This season, we’re introducing innovative designs and cutting-edge technology to enhance your performance and style. Our new collection features advanced materials for ultimate comfort and durability, along with fresh, vibrant colors that capture the spirit of summer. From high-performance running shoes to versatile training gear and stylish athleisure wear, our Summer 2023 launch has something for everyone. Be among the first to experience the latest in sportswear innovation and take your game to the next level with Nike",
            platform: "Instagram",
            type: "Paid",
            timeAgo: "1 hr ago",
            proposals: "02",
            creators: "02",
            hired: "02",
            status: "Active",
            images: [
                "https://hips.hearstapps.com/hmg-prod/images/index-bomber-65a839208f31a.jpg?resize=2048:*",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf3Ehqyb83E1sTv48tNl86cfKMRyy0YsTRRA&s"
            ]
        },
        {
            title: "Summer Sale 2023, New Product launch - Summer 2023, back to School Sale 2023",
            description: "Nike is thrilled to announce the launch of our new product line for Summer 2023! This season, we’re introducing innovative designs and cutting-edge technology to enhance your performance and style. Our new collection features advanced materials for ultimate comfort and durability, along with fresh, vibrant colors that capture the spirit of summer. From high-performance running shoes to versatile training gear and stylish athleisure wear, our Summer 2023 launch has something for everyone. Be among the first to experience the latest in sportswear innovation and take your game to the next level with Nike",
            platform: "Instagram",
            type: "Paid",
            timeAgo: "1 hr ago",
            proposals: "02",
            creators: "02",
            status: "Active",
            hired: "02",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSed7XOOAyH0ZNkdaMt13e8mgyo_GiVRMnug&s",
                "https://pictures-ethiopia.jijistatic.com/2274267_NjIwLTYyMC04N2QzOTNkYTMw.webp"
            ]
        },
        {
            title: "Summer Sale 2023, New Product launch - Summer 2023, back to School Sale 2023",
            description: "Nike is thrilled to announce the launch of our new product line for Summer 2023! This season, we’re introducing innovative designs and cutting-edge technology to enhance your performance and style. Our new collection features advanced materials for ultimate comfort and durability, along with fresh, vibrant colors that capture the spirit of summer. From high-performance running shoes to versatile training gear and stylish athleisure wear, our Summer 2023 launch has something for everyone. Be among the first to experience the latest in sportswear innovation and take your game to the next level with Nike",
            platform: "Instagram",
            type: "Paid",
            timeAgo: "1 hr ago",
            proposals: "02",
            creators: "02",
            status: "Active",
            hired: "02",
            images: [
                "https://www.obeetee.in/cdn/shop/files/s_a52912e1-fe20-4995-966e-833fbfe9ba46_900x.jpg?v=1685786990",
                "https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/tasmania_sofa/sofa_WSFATSNN2FVAM/sofa_WSFATSNN2FVAM_1.jpg"
            ]
        }
    ];
    const handleDrawer = (data) => {
        openDrawer()
        setSelectedData(data)
    }
    return (
        <>
            <div>
                <DrawerComponent openDraw={openDraw} closeDrawer={closeDrawer} selectedData={selectedData} />
                <MenuComponent open={open} anchorEl={anchorEl} handleClose={handleClose} />
                <Header handleClick={handleClick} />
            </div>
            <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: `url(https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}>
                <div className="absolute  flex-col inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold text-center">
                        Content Creator
                    </h1>
                    <div className="py-4 px-6 text-slate-300">
                        <p className="text-lg">
                            Insert your description of the content creator here. This could include details about their work, achievements, or any other relevant information.
                        </p>
                    </div>
                </div>

            </div>

            <Container>
                {/* <div class="bg-white py-24 sm:py-32 mx-5 md:mx-8 lg:mx-8">
                    <div class="mx-auto">
                        <div class="mx-auto max-w-2xl sm:text-center">
                            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Join Equellence as Content Creator</h2>
                            <p class="mt-6 text-lg leading-8 text-gray-600">Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</p>
                        </div>
                        <div class="mx-auto mt-16 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                            <div class="p-8 sm:p-10 lg:flex-auto">
                                <p class="mt-6 text-base leading-7 text-gray-600">Here are some ways you can work on your content and grow so that when applications open, you are ready for the club: </p>
                                <div class="mt-10 flex items-center gap-x-4">
                                    <h4 class="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                                    <div class="h-px flex-auto bg-gray-100"></div>
                                </div>
                                <ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-3 sm:gap-6">
                                    <li class="flex gap-x-3">
                                        <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                        </svg>
                                        Post frequently
                                    </li>
                                    <li class="flex gap-x-3">
                                        <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                        </svg>
                                        Have a common goal or inspire social media.
                                    </li>
                                    <li class="flex gap-x-3">
                                        <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                        </svg>
                                        Good video content
                                    </li>
                                    <li class="flex gap-x-3">
                                        <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                        </svg>
                                        High quality content
                                    </li>
                                    <li class="flex gap-x-3">
                                        <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                        </svg>
                                        Engaging social media presence
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div> */}
                <div className="my-8 mx-4 md:mx-8 lg:mx-8">
                    <div className="flex justify-between flex-wrap gap-3 md:gap:0 lg:gap-0">
                        <h6 className="font-bold text-lg">Trending Campaign</h6>
                        {/* <div className="flex gap-3">
                            <select className="block rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none">
                                <option>Paid</option>
                                <option>Unpaid</option>
                            </select>
                            <select className="block rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none">
                                <option>Instagram</option>
                                <option>Facebook</option>
                            </select>
                        </div> */}
                    </div>
                    <div className="border border-slate-200 my-5 rounded-md bg-slate-100">
                        <div className="m-2 p-2 font-medium bg-white rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            <div className="flex flex-col">
                                <span>
                                    Summer Sale 2023, New Product launch - Summer 2023, back to
                                    School Sale 2023
                                </span>
                                <span className="text-sm mt-2 flex items-center gap-1">
                                    <InstagramIcon style={{ fontSize: "13px", color: "maroon" }} />
                                    Instagram .{" "}
                                    <span className="text-slate-500 flex items-center gap-1">
                                        <PaidOutlinedIcon
                                            style={{ fontSize: "13px", color: "slate" }}
                                        />
                                        Paid
                                    </span>{" "}
                                    . <span className="text-slate-500">1 hr ago</span>
                                </span>
                            </div>
                            <div className="flex gap-2  mt-3 md:mt-0 lg:mt-0">
                                <div className="flex flex-col items-center border border-slate-300 p-2 w-full rounded-md h-16 bg-slate-100">
                                    <span>02</span>
                                    <span className="text-sm  text-slate-500">Proposals</span>
                                </div>
                                <div className="flex flex-col items-center border border-slate-300 p-2 rounded-md w-full h-16 bg-slate-100">
                                    <span>02</span>
                                    <span className="text-sm  text-slate-500">Creators</span>
                                </div>
                                <div className="flex flex-col items-center border border-slate-300 p-2 rounded-md w-full h-16 bg-slate-100">
                                    <span>02</span>
                                    <span className="text-sm  text-slate-500">Hired</span>
                                </div>
                            </div>
                        </div>
                        {/* <div className="m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                                <img src="https://hips.hearstapps.com/hmg-prod/images/index-bomber-65a839208f31a.jpg?resize=2048:*" className="rounded-md h-32 w-full object-cover" />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf3Ehqyb83E1sTv48tNl86cfKMRyy0YsTRRA&s" className="rounded-md h-32 w-full object-cover" />
                            </div>
                            <div className="w-full flex flex-col justify-between">
                                <h6 className="text-sm">
                                    {truncateString("Nike is thrilled to announce the launch of our new product line for Summer 2023! This season, we’re introducing innovative designs and cutting-edge technology to enhance your performance and style. Our new collection features advanced materials for ultimate comfort and durability, along with fresh, vibrant colors that capture the spirit of summer. From high-performance running shoes to versatile training gear and stylish athleisure wear, our Summer 2023 launch has something for everyone. Be among the first to experience the latest in sportswear innovation and take your game to the next level with Nike", 180)}
                                </h6>
                                <div className="flex justify-end ">
                                    <button className="rounded-md bg-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Apply
                                    </button>
                                </div>

                            </div>
                        </div> */}
                    </div>





                    {/* Second */}
                    <div className="border border-slate-200 my-5 rounded-md bg-slate-100">
                        <div className="m-2 p-2 font-medium bg-white rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            <div className="flex flex-col">
                                <span>
                                    Summer Sale 2023, New Product launch - Summer 2023, back to
                                    School Sale 2023
                                </span>
                                <span className="text-sm mt-2 flex items-center gap-1">
                                    <InstagramIcon style={{ fontSize: "13px", color: "maroon" }} />
                                    Instagram .{" "}
                                    <span className="text-slate-500 flex items-center gap-1">
                                        <PaidOutlinedIcon
                                            style={{ fontSize: "13px", color: "slate" }}
                                        />
                                        Paid
                                    </span>{" "}
                                    . <span className="text-slate-500">1 hr ago</span>
                                </span>

                            </div>
                            <div className="flex gap-2  mt-3 md:mt-0 lg:mt-0">
                                <div className="flex flex-col items-center border border-slate-300 p-2 w-full rounded-md h-16 bg-slate-100">
                                    <span>02</span>
                                    <span className="text-sm  text-slate-500">Proposals</span>
                                </div>
                                <div className="flex flex-col items-center border border-slate-300 p-2 rounded-md w-full h-16 bg-slate-100">
                                    <span>02</span>
                                    <span className="text-sm  text-slate-500">Creators</span>
                                </div>
                                <div className="flex flex-col items-center border border-slate-300 p-2 rounded-md w-full h-16 bg-slate-100">
                                    <span>02</span>
                                    <span className="text-sm  text-slate-500">Hired</span>
                                </div>
                            </div>
                        </div>
                        {/* <div className="m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSed7XOOAyH0ZNkdaMt13e8mgyo_GiVRMnug&s" className="rounded-md h-32 w-full object-cover" />
                                <img src="https://pictures-ethiopia.jijistatic.com/2274267_NjIwLTYyMC04N2QzOTNkYTMw.webp" className="rounded-md h-32 w-full object-cover" />
                            </div>
                            <div className="w-full flex flex-col justify-between">
                                <h6 className="text-sm">
                                    {truncateString("Nike is thrilled to announce the launch of our new product line for Summer 2023! This season, we’re introducing innovative designs and cutting-edge technology to enhance your performance and style. Our new collection features advanced materials for ultimate comfort and durability, along with fresh, vibrant colors that capture the spirit of summer. From high-performance running shoes to versatile training gear and stylish athleisure wear, our Summer 2023 launch has something for everyone. Be among the first to experience the latest in sportswear innovation and take your game to the next level with Nike", 180)}
                                </h6>
                                <div className="flex justify-end ">
                                    <button className="rounded-md bg-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </Container>
            <Container>
                <div className="my-12 mx-4 md:mx-8 lg:mx-8">
                    <div className="flex justify-between flex-wrap gap-3 md:gap:0 lg:gap-0">
                        <h6 className="font-bold text-lg">All Campaign</h6>
                        <div className="flex gap-3">
                            <select className="block rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none">
                                <option>Paid</option>
                                <option>Unpaid</option>
                            </select>
                            <select className="block rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none">
                                <option>Instagram</option>
                                <option>Facebook</option>
                            </select>
                        </div>
                    </div>
                    {campaigns.map((campaign, index) => (
                        <div key={index} className="border cursor-pointer border-slate-200 my-5 rounded-md bg-slate-100">
                            <div className="m-2 p-2 font-medium bg-white rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                <div className="flex flex-col">
                                    <span>{campaign.title}</span>
                                    <span className="text-sm mt-2 flex items-center gap-1">
                                        <InstagramIcon style={{ fontSize: "13px", color: "maroon" }} />
                                        {campaign.platform} .{" "}
                                        <span className="text-slate-500 flex items-center gap-1">
                                            <PaidOutlinedIcon style={{ fontSize: "13px", color: "slate" }} />
                                            {campaign.type}
                                        </span>{" "}
                                        . <span className="text-slate-500">{campaign.timeAgo}</span> &nbsp;
                                        <div className="rounded-full border border-green-700 px-2">
                                            <span className={`text-xs ${campaign.status === "Active" ? "text-green-600" : ""}`}>{campaign.status}</span>
                                        </div>
                                    </span>

                                </div>
                                <div className="flex gap-2 mt-3 md:mt-0 lg:mt-0">
                                    <div className="flex flex-col items-center border border-slate-300 p-2 w-full rounded-md h-16 bg-slate-100">
                                        <span>{campaign.proposals}</span>
                                        <span className="text-sm text-slate-500">Proposals</span>
                                    </div>
                                    <div className="flex flex-col items-center border border-slate-300 p-2 rounded-md w-full h-16 bg-slate-100">
                                        <span>{campaign.creators}</span>
                                        <span className="text-sm text-slate-500">Creators</span>
                                    </div>
                                    <div className="flex flex-col items-center border border-slate-300 p-2 rounded-md w-full h-16 bg-slate-100">
                                        <span>{campaign.hired}</span>
                                        <span className="text-sm text-slate-500">Hired</span>
                                    </div>
                                </div>
                            </div>
                            <div className="m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 bg-white p-2 rounded-md">
                                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                                    {campaign.images.map((image, idx) => (
                                        <img key={idx} src={image} className="rounded-md h-32 w-full object-cover" />
                                    ))}
                                </div>
                                <div className="w-full flex flex-col justify-between">
                                    <h6 className="text-sm">
                                        {truncateString(campaign.description, 180)}
                                    </h6>
                                    <div className="flex justify-end gap-4">
                                        <div onClick={() => handleDrawer(campaign)} className="flex justify-end">
                                            <button className="rounded-md  px-6 py-1.5 text-sm font-semibold leading-6 text-slate-600 focus-visible:outline">
                                                View details
                                            </button>
                                        </div>
                                        <button
                                            className={`${!clickedButtons[index] ? 'bg-indigo-600 text-white' : 'bg-teal-100 text-slate-700'} rounded-md px-6 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:${buttonColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                                            onClick={() => handleButtonClick(index)}
                                        >
                                            {!clickedButtons[index] ? 'Apply Now' : 'Applied'}
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default Influencers;
