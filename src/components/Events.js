import React from 'react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import { Container } from '@mui/material';
import horse2 from "../assets/images/horse2.jpg"
import horse3 from "../assets/images/horse3.jpg"
import horse4 from "../assets/images/horse4.jpg"
import las_vagas from "../assets/images/las_vagas.jpg"

const Events = () => {
    return (
        <div className="relative">
            <Navbar transparent />
            <main>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                    style={{
                        minHeight: "40vh"
                    }}>
                    <div className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: `url('${horse4}')`
                        }}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">
                                        Events
                                    </h1>
                                    <p className="mt-4 text-lg text-gray-300">
                                        Discover upcoming events and join the Equellence community.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <Container>
                    <section className="relative py-20">
                        <div className="container mx-auto px-4 ">
                            <div className="w-full mx-auto px-4">
                                <div className="md:pr-12">
                                    <h3 className="text-3xl font-semibold text-center">
                                        EQUFEST
                                    </h3>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                        Equellence runs, Equfest. Equfest are annual conventions for horse lovers hosted all over the world, perfectly aligned with the schedule of bigger horse shows.
                                    </p>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                        These expos bring horsey and Equestrian people alike and allow them to connect with other Equestrians, network, buy, trade and sell all equine related items.
                                    </p>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                        Equfest also allows Equestrian content creators to come network in real life, learn valuable skills from our panelists and VIP attendees, and of course, meet their favorite creators.
                                    </p>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                        Equfest partners with charities at every event.
                                    </p>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                        Equfest 2024 will be at:
                                    </p>
                                    <h4 className="text-2xl font-semibold mt-4 text-center">
                                        LAS VEGAS
                                    </h4>
                                    <img
                                        alt="Las Vegas"
                                        className="w-50 h-96 rounded-lg shadow-md mx-auto my-4"
                                        src='https://content.paulreiffer.com/wp-content/uploads/2023/02/Featured-Image-Las-Vegas-Strip-Bellagio-Fountains-Paris-Hotel-Ballys-PH-High-Roller-Night-Cityscape-Viewpoint-Location-Paul-Reiffer-Nevada@2x.jpg'
                                    />
                                    <p className="mt-4 text-lg leading-relaxed text-gray-600 text-center">
                                        To learn more about Equfest and to find out how to attend, please visit the Equfest website (Coming soon).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
            </main>
            <Footer />
        </div>
    );
}

export default Events;
