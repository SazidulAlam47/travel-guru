import { useLoaderData, useParams } from "react-router-dom";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

const Booking = () => {
    const allPlaces = useLoaderData();
    const { id } = useParams();
    const place = allPlaces.find((place) => place._id === id);

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const [selectedFrom, setSelectedFrom] = useState(tomorrow);
    const [showFrom, setShowFrom] = useState(false);

    const nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 3);
    const [selectedTo, setSelectedTo] = useState(nextDay);
    const [showTo, setShowTo] = useState(false);

    return (
        <div className="lg:h-[88vh] overflow-hidden">
            <div className="lg:h-[100vh] absolute top-0 left-0 right-0 bg-slate-200 lg:bg-black -z-10 opacity-60"></div>
            <div className="hidden lg:block absolute top-0 right-0 left-0 -z-20 h-[100vh] overflow-hidden">
                <img src={place.thumbnail_img} alt="place" className="w-full" />
            </div>
            <div className="container mx-auto px-3 md:px-6 text-black lg:text-white pt-2 pb-8 lg:pt-0 lg:pb-0">
                <div className="flex flex-col lg:flex-row-reverse lg:pt-[12vh]">
                    <div className="lg:w-[55%]">
                        <form className="card-body bg-white w-9/12 mx-auto rounded-lg">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#818181] font-medium">
                                        Origin
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Origin"
                                    className="input input-lg bg-[#F2F2F2] rounded-lg text-black font-bold px-5 placeholder:font-medium"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#818181] font-medium">
                                        Destination
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Destination"
                                    className="input input-lg bg-[#F2F2F2] rounded-lg text-black font-bold px-5 placeholder:font-medium"
                                    value={place.name}
                                    onChange={() => {}}
                                />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text text-[#818181] font-medium">
                                            From
                                        </span>
                                    </label>
                                    {showFrom && (
                                        <DayPicker
                                            className="bg-white text-black inline-block p-5 rounded-lg absolute bottom-12 left-7 shadow-2xl"
                                            mode="single"
                                            selected={selectedFrom}
                                            onSelect={(date) => {
                                                setSelectedFrom(date);
                                                setShowFrom(false);
                                            }}
                                        />
                                    )}
                                    <input
                                        type="text"
                                        placeholder="Select a date"
                                        className="input input-lg bg-[#F2F2F2] rounded-lg text-black font-bold px-5 placeholder:font-medium"
                                        value={format(selectedFrom, "PP")}
                                        onChange={() => {}}
                                        onClick={() => setShowFrom(!showFrom)}
                                    />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text text-[#818181] font-medium">
                                            To
                                        </span>
                                    </label>
                                    {showTo && (
                                        <DayPicker
                                            className="bg-white text-black inline-block p-5 rounded-lg absolute bottom-12 left-2 shadow-2xl"
                                            mode="single"
                                            selected={selectedTo}
                                            onSelect={(date) => {
                                                setSelectedTo(date);
                                                setShowTo(false);
                                            }}
                                        />
                                    )}
                                    <input
                                        type="text"
                                        placeholder="Select a date"
                                        className="input input-lg bg-[#F2F2F2] rounded-lg text-black font-bold px-5 placeholder:font-medium"
                                        value={format(selectedTo, "PP")}
                                        onChange={() => {}}
                                        onClick={() => setShowTo(!showTo)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-lg bg-primary hover:bg-[#ffb53d]">
                                    Start Booking
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="lg:w-[45%] space-y-6 pr-4 px-3 md:px-0">
                        <h2 className="font-bebasNeue text-7xl md:text-8xl">
                            {place.name}
                        </h2>
                        <p>{place.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
