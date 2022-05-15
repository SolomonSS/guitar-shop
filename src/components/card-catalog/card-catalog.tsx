import Card from '../../types/types';
import CardItem from "../card/card-item";

type props = {
    cards: Card[]
}

const CardCatalog = ({cards}:props) =>{
    return(
        <div className="cards catalog__cards">
            {cards.map((card)=><CardItem card={card}/>)}
        </div>
    );
}