import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import "react-day-picker/dist/style.css";
import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import formatDate from "../../utils/formatDate";
import capitalize from "../../utils/capitalize";

const Booking = () => {
    const [origin, setOrigin] = useState("");
    const [error, setError] = useState("");
    const allPlaces = useLoaderData();
    const { tag } = useParams();
    const navigate = useNavigate();
    const place = allPlaces.find((place) => place.tag === tag);

    const today = new Date();
    const [selectedFrom, setSelectedFrom] = useState(today);
    const [showFrom, setShowFrom] = useState(false);

    const [selectedTo, setSelectedTo] = useState(null);
    const [showTo, setShowTo] = useState(false);

    const showFromRef = useRef();
    const showToRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                showFromRef.current &&
                !showFromRef.current.contains(event.target)
            ) {
                setShowFrom(false);
            }
        };
        if (showFrom) {
            document.addEventListener("click", handleClickOutside);
        }
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [showFrom]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                showToRef.current &&
                !showToRef.current.contains(event.target)
            ) {
                setShowTo(false);
            }
        };
        if (showTo) {
            document.addEventListener("click", handleClickOutside);
        }
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [showTo]);

    useEffect(() => {
        setOrigin(capitalize(origin));
    }, [origin]);

    const handleBooking = (e) => {
        e.preventDefault();
        const destination = place.name;
        const data = { origin, destination, selectedFrom, selectedTo };
        console.log(data);
        if (!origin) {
            setError("Please select a departure point");
            return;
        } else if (!selectedFrom) {
            setError("Please select your starting date");
            return;
        } else if (!selectedTo) {
            setError("Please select your return date");
            return;
        }
        setError("");
        localStorage.setItem("booking", JSON.stringify(data));
        navigate(`/hotels/${tag}`);
    };

    return (
        <div className="lg:h-[88vh] overflow-hidden">
            <div className="lg:h-[100vh] absolute top-0 left-0 right-0 bg-slate-200 lg:bg-black -z-10 opacity-60"></div>
            <div className="hidden lg:block absolute top-0 right-0 left-0 -z-20 h-[100vh] overflow-hidden">
                <img src={place.thumbnail_img} alt="place" className="w-full" />
            </div>
            <div className="container mx-auto px-3 md:px-6 text-black lg:text-white pt-2 pb-8 lg:pt-0 lg:pb-0">
                <div className="flex flex-col lg:flex-row-reverse lg:pt-[12vh]">
                    <div className="lg:w-[55%]">
                        <form
                            onSubmit={handleBooking}
                            className="card-body bg-white w-9/12 mx-auto rounded-lg"
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#818181] font-medium">
                                        Origin
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Departure Point"
                                    className="input input-lg bg-[#F2F2F2] rounded-lg text-black font-bold px-5 placeholder:font-medium"
                                    value={origin}
                                    onChange={(e) => setOrigin(e.target.value)}
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
                                <div
                                    className="form-control relative"
                                    ref={showFromRef}
                                >
                                    <label className="label">
                                        <span className="label-text text-[#818181] font-medium">
                                            From
                                        </span>
                                    </label>
                                    {showFrom && (
                                        <DayPicker
                                            className="bg-white text-black inline-block p-5 rounded-lg absolute bottom-12 left-7 shadow-2xl z-20"
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
                                        className={`input input-lg bg-[#F2F2F2] rounded-lg px-5 placeholder:font-medium ${
                                            selectedFrom
                                                ? "text-black font-bold"
                                                : "text-[#818181] font-medium"
                                        }`}
                                        value={
                                            selectedFrom
                                                ? formatDate(selectedFrom)
                                                : "Select a date"
                                        }
                                        onChange={() => {}}
                                        onClick={() => {
                                            setShowFrom(!showFrom);
                                            setShowTo(false);
                                        }}
                                    />
                                </div>
                                <div
                                    className="form-control relative"
                                    ref={showToRef}
                                >
                                    <label className="label">
                                        <span className="label-text text-[#818181] font-medium">
                                            To
                                        </span>
                                    </label>
                                    {showTo && (
                                        <DayPicker
                                            className="bg-white text-black inline-block p-5 rounded-lg absolute bottom-12 left-2 shadow-2xl z-20s"
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
                                        className={`input input-lg bg-[#F2F2F2] rounded-lg px-5 placeholder:font-medium ${
                                            selectedTo
                                                ? "text-black font-bold"
                                                : "text-[#818181] font-medium"
                                        }`}
                                        value={
                                            selectedTo
                                                ? formatDate(selectedTo)
                                                : "Select a date"
                                        }
                                        onChange={() => {}}
                                        onClick={() => {
                                            setShowTo(!showTo);
                                            setShowFrom(false);
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-lg bg-primary hover:bg-[#ffb53d]">
                                    Start Booking
                                </button>
                                {error && (
                                    <p className="text-red-600 pt-2">{error}</p>
                                )}
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
