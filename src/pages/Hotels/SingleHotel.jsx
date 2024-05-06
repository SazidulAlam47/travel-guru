import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";

const SingleHotel = ({ hotel }) => {
    return (
        <div>
            <div>
                <img src={hotel.img} alt={hotel.name} />
            </div>
            <div>
                <h4 className="font-bold">{hotel.name}</h4>
                <p>
                    {hotel.guests} guests {hotel.bedrooms} bedrooms {hotel.beds}{" "}
                    beds {hotel.baths} baths
                </p>
                <p>{hotel.description}</p>
                <p>Cancellation flexibility {hotel.cancellationFlexibility}</p>
                <div>
                    <div>
                        <FaStar /> {hotel.rating}
                    </div>
                    <div>${hotel.rent}/night $00 total</div>
                </div>
            </div>
        </div>
    );
};

SingleHotel.propTypes = {
    hotel: PropTypes.object.isRequired,
};

export default SingleHotel;
