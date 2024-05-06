import { useLoaderData, useParams } from "react-router-dom";

const Hotels = () => {
    const allPlaces = useLoaderData();
    const { tag } = useParams();
    const place = allPlaces.find((place) => place.tag === tag);

    return (
        <div>
            <p>This is Hotels</p>
        </div>
    );
};

export default Hotels;
