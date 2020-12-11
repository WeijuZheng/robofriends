import Card from './Card';

function CardList({ robots }) {
    const cardArray = robots.map((robot, i) => {
        return <Card key={i} {...robot} />;
    });
    return (
        <div>
            {cardArray}
        </div>
    )
}

export default CardList;