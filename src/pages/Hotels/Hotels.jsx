import { useLoaderData, useParams } from "react-router-dom";
import SingleHotel from "./SingleHotel";
import formatDate from "../../utils/formatDate";

const Hotels = () => {
    const allPlaces = useLoaderData();
    const { tag } = useParams();
    const place = allPlaces.find((place) => place.tag === tag);
    const bookingString = localStorage.getItem("booking");
    const booking = JSON.parse(bookingString);

    const formDate = new Date(booking.selectedFrom);
    const toDate = new Date(booking.selectedTo);
    const days = toDate.getDate() - formDate.getDate() + 1;

    return (
        <div className="container mx-auto px-3 md:px-6 pb-6">
            <div className="border-t-2">
                <h3 className="font-bold text-2xl pt-3">
                    Stay in {place.name}
                </h3>
                <h3 className="font-medium">
                    {formatDate(formDate)} - {formatDate(toDate)}
                </h3>
                <div className="flex flex-col xl:flex-row gap-4 pt-1">
                    <div className="xl:w-[55%]">
                        <div className="space-y-4 pt-2">
                            {place.hotels.map((hotel, idx) => (
                                <SingleHotel
                                    key={idx}
                                    hotel={hotel}
                                    days={days}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="xl:w-[45%]">
                        {place.tag === "coxs-bazar" ? (
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59420.98450172475!2d91.95166092981037!3d21.436651710814438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1715006573381!5m2!1sen!2sbd"
                                className="border-0 rounded-xl w-full h-96 xl:h-full"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps"
                            ></iframe>
                        ) : (
                            <iframe
                                src={place.map}
                                className="border-0 rounded-xl w-full h-96 xl:h-full"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps"
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotels;
