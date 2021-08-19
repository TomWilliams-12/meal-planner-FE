import { Link } from 'react-router-dom'

const Card = ({ card }) => {
    return (
        <div className="bg-gray-100 mx-auto mb-4 max-w-sm shadow-lg rounded-lg overflow-hidden">
            <div className="sm:flex-wrap sm:items-center px-6 py-4">
                    <div className="text-center sm:text-center sm:flex-grow">
                        <div className="mb-4">
                            <Link to={card.linkName}>
                                <h1 className="text-xl leading-tight">{card.title}</h1>
                            </Link>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Card;