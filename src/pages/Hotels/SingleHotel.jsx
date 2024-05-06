import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";

const SingleHotel = ({ hotel, days }) => {
    return (
        <div className="flex flex-col md:flex-row gap-3">
            <div className="w-[45%]">
                <img
                    src={hotel.img}
                    alt={hotel.name}
                    className="rounded-lg h-full"
                />
            </div>
            <div className="w-[55%]">
                <h4 className="font-semibold text-xl">{hotel.name}</h4>
                <div className="text-[#6A6A6A] space-y-1">
                    <p className="space-x-3">
                        <span>{hotel.guests} guests</span>
                        <span>{hotel.bedrooms} bedrooms</span>
                        <span>{hotel.beds} beds</span>
                        <span>{hotel.baths} baths</span>
                    </p>
                    <p>{hotel.description}</p>
                    <p>
                        Cancellation flexibility {hotel.cancellationFlexibility}
                    </p>
                </div>
                <div className="flex justify-between items-center pt-1">
                    <div className="flex items-center gap-1">
                        <span className="text-primary">
                            <FaStar size={20} />
                        </span>{" "}
                        {hotel.rating}
                    </div>
                    <div>
                        <span className="font-semibold">${hotel.rent}</span>
                        /night{" "}
                        <span className="text-[#898989] text-sm pl-1">
                            ${hotel.rent * days} total
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleHotel.propTypes = {
    hotel: PropTypes.object.isRequired,
    days: PropTypes.number.isRequired,
};

export default SingleHotel;
