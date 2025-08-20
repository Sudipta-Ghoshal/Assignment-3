export default function Ratting({ rating }) {

    const totalStars = 5;

    const emptyStars = totalStars - rating;

    const filledStarElement = Array(rating).fill('★').map((star, index) => <span key={index + '-filled'} className="text-yellow-400">{star}</span>);

    const emptyStarElement = Array(emptyStars).fill('★').map((star, index) => <span key={index + '-empty'} className="text-gray-300">{star}</span>);

    const stars = filledStarElement.concat(emptyStarElement);

    return (
        <div className="flex items-center my-1">
            <div className="flex">
                {stars}
            </div>
            <span className="text-xs text-gray-500 ml-1">{rating}/5</span>
        </div>
    );
}