import { useLoaderData, useParams } from "react-router-dom";
import SingleHotel from "./SingleHotel";

const Hotels = () => {
    const allPlaces = useLoaderData();
    const { tag } = useParams();
    const place = allPlaces.find((place) => place.tag === tag);

    return (
        <div className="container mx-auto px-3 md:px-6 pb-6">
            <div className="border-t-2">
                <h3 className="font-bold text-2xl pt-3">
                    Stay in {place.name}
                </h3>
                <div className="flex flex-col md:flex-row gap-4 pt-1">
                    <div className="w-[55%]">
                        <div className="space-y-4 pt-2">
                            {place.hotels.map((hotel, idx) => (
                                <SingleHotel key={idx} hotel={hotel} />
                            ))}
                        </div>
                    </div>
                    <div className="w-[45%]">
                        <iframe
                            src={place.map}
                            width="100%"
                            height="100%"
                            className="border-0 rounded-xl"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotels;
