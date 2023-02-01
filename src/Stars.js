import Star from './Star';

function Stars({count}) {
    let newCount;
    if (count < 1 || count > 5 || Number.isNaN(count)) {
        newCount = 0;
    } else {
        newCount = count;
    }
    return (
        <ul className="stars__container">
            {[...Array(newCount)].map( (item, index) =>
                    <Star key={index} />
            )}
        </ul>
    );
}

export default Stars;
