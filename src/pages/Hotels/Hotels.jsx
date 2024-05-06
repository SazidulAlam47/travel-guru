import { useLoaderData, useParams } from "react-router-dom";
import SingleHotel from "./SingleHotel";

const Hotels = () => {
    const allPlaces = useLoaderData();
    const { tag } = useParams();
    const place = allPlaces.find((place) => place.tag === tag);

    console.log(place.map);

    return (
        <div className="container mx-auto px-3 md:px-6">
            <div className="border-t-2 grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div>
                    <h3 className="font-bold text-2xl">Stay in {place.name}</h3>
                    {place.hotels.map((hotel, idx) => (
                        <SingleHotel key={idx} hotel={hotel} />
                    ))}
                </div>
                <div>
                    <iframe
                        src={place.map}
                        width="100%"
                        height="100%"
                        className="border-0 rounded-xl"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Hotels;
