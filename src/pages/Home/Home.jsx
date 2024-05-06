import { Link, useLoaderData } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useWindowSize } from "@uidotdev/usehooks";

const SampleNextArrow = ({ onClick }) => {
    return (
        <button
            className="flex justify-center items-center bg-[#f3f3f3] text-[#444] hover:bg-primary transition-all h-14 w-14 rounded-full hover:text-white z-20 absolute bottom-4 left-2/3 lg:-bottom-20 lg:left-16"
            onClick={onClick}
        >
            <MdArrowForwardIos size={20} className="ml-1" />
        </button>
    );
};

const SamplePrevArrow = ({ onClick }) => {
    return (
        <button
            className="flex justify-center items-center bg-[#f3f3f3] text-[#444] hover:bg-primary transition-all h-14 w-14 rounded-full hover:text-white z-20 absolute bottom-4 right-2/3 lg:-bottom-20 lg:-left-4"
            onClick={onClick}
        >
            <MdArrowBackIosNew size={20} className="mr-1" />
        </button>
    );
};

const Home = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const places = useLoaderData();
    const size = useWindowSize();

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        afterChange: (current) => setActiveSlide(current),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="lg:h-[88vh] overflow-hidden">
            <div className="lg:h-[100vh] absolute top-0 left-0 right-0 bg-slate-200 lg:bg-black -z-10 opacity-60"></div>
            <div className="hidden lg:block absolute top-0 right-0 left-0 -z-20 h-[100vh] overflow-hidden">
                <img
                    src={places[activeSlide].thumbnail_img}
                    alt="place"
                    className="w-full"
                />
            </div>
            <div className="container mx-auto px-3 md:px-6 text-black lg:text-white pt-2 pb-8 lg:pt-0 lg:pb-0">
                <div className="flex flex-col lg:flex-row-reverse lg:pt-[12vh]">
                    <div className="lg:w-[55%]">
                        <div className="lg:w-[145%]">
                            <div className="slider-container">
                                <Slider {...settings}>
                                    {places?.map((place, idx) => (
                                        <div
                                            key={place._id}
                                            className=" lg:h-[55vh] px-3 pb-24 lg:pb-0"
                                        >
                                            <div
                                                className="relative rounded-2xl overflow-hidden"
                                                style={
                                                    idx === activeSlide &&
                                                    size.width > 640
                                                        ? {
                                                              border: "5px solid #F9A51A",
                                                          }
                                                        : {
                                                              border: "none",
                                                          }
                                                }
                                            >
                                                <div className="bg-gradient-to-t from-[#000000c5] to-transparent absolute right-0 left-0 top-0 bottom-0"></div>
                                                <div className=" h-[50vh] sm:h-[40vh] lg:h-full">
                                                    <img
                                                        src={place.portrait_img}
                                                        alt="place"
                                                        className="h-full w-full"
                                                    />
                                                </div>
                                                <h3 className="text-white font-bebasNeue text-3xl z-20 absolute bottom-8 left-8">
                                                    {place.name}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[45%] space-y-6 pr-4 px-3 md:px-0">
                        <h2 className="font-bebasNeue text-7xl md:text-8xl">
                            {places[activeSlide].name}
                        </h2>
                        <p>{places[activeSlide].description}</p>
                        <Link
                            to={`/booking/${places[activeSlide].tag}`}
                            className="btn bg-primary px-7 border-0 hover:bg-[#ffb53d]"
                        >
                            Booking <IoIosArrowRoundForward size={25} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

SampleNextArrow.propTypes = {
    onClick: PropTypes.func,
};

SamplePrevArrow.propTypes = {
    onClick: PropTypes.func,
};

export default Home;
