import { ICard } from "./App";

function CardComponent(props: { card: ICard }) {

    return (
        <div className={`myCard ${props.card.type}`}>
            <div className="top">
                <span className="caption">{props.card.caption}</span>
                <span className="count">{props.card.count}</span>
            </div>
            <div className="content">{props.card.description}</div>
        </div>
    )
}

export default CardComponent;