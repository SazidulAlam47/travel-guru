import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            className="flex justify-center items-center bg-[#f3f3f3] text-[#444] hover:bg-primary transition-all h-14 w-14 rounded-full hover:text-white z-20 absolute -bottom-20 left-16"
            onClick={onClick}
        >
            <MdArrowForwardIos size={20} className="ml-1" />
        </button>
    );
};

const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            className="flex justify-center items-center bg-[#f3f3f3] text-[#444] hover:bg-primary transition-all h-14 w-14 rounded-full hover:text-white z-20 absolute -bottom-20 -left-4"
            onClick={onClick}
        >
            <MdArrowBackIosNew size={20} className="mr-1" />
        </button>
    );
};

const Home = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const { data, isPending } = useQuery({
        queryKey: ["travel"],
        queryFn: async () => {
            const res = await axios.get("/data/travel.json");
            return res.data;
        },
    });

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: (current) => setActiveSlide(current),
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    if (isPending) {
        return <div>Loading</div>;
    }

    return (
        <div className="h-[88vh] overflow-hidden">
            <div className="h-[100vh] absolute top-0 left-0 right-0 bg-black -z-10 opacity-60"></div>
            <div className="absolute top-0 right-0 left-0 -z-20 h-[100vh] overflow-hidden">
                <img
                    src={data[activeSlide].thumbnail_img}
                    alt="place"
                    className="w-full"
                />
            </div>
            <div className="container mx-auto px-3 md:px-6 text-white">
                <div className="flex pt-[12vh]">
                    <div className="w-[45%] space-y-6 pr-4">
                        <h2 className="font-bebasNeue text-8xl">
                            {data[activeSlide].name}
                        </h2>
                        <p>{data[activeSlide].description}</p>
                        <Link
                            to="/login"
                            className="btn bg-primary px-7 border-0 hover:bg-[#ffb53d]"
                        >
                            Booking <IoIosArrowRoundForward size={25} />
                        </Link>
                    </div>
                    <div className="w-[55%]">
                        <div className="w-[145%]">
                            <div className="slider-container">
                                <Slider {...settings}>
                                    {data?.map((place) => (
                                        <div
                                            key={place._id}
                                            className="h-[55vh] px-3"
                                        >
                                            <div className="relative">
                                                <div className="bg-gradient-to-t from-[#000000c5] to-transparent rounded-2xl overflow-hidden absolute right-0 left-0 top-0 bottom-0"></div>
                                                <div className="h-full rounded-2xl overflow-hidden">
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