import Title from './Title';
import Card from './Card';

function CardList({ devs }) {
    return (
        <section>
            <Title text="Nuestros desarrolladores" />

            {devs.map((dev) => (
                <Card key={dev.id} developer={dev} />
            ))}
        </section>
    );
}

export default CardList;