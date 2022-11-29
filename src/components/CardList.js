import Card from "./Card";

function CardList(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Card
            id={props.cards[0].id}
            title={props.cards[0].title}
            images={props.cards[0].images}
            newPrice={props.cards[0].newPrice}
            dollar={props.cards[0].dollar}
            product={props.cards[0].product}
          />
          <div className="row">
            <Card
              id={props.cards[1].id}
              title={props.cards[1].title}
              images={props.cards[1].images}
              newPrice={props.cards[1].newPrice}
              dollar={props.cards[1].dollar}
              product={props.cards[1].product}
            />
            <div className="row">
              <Card
                id={props.cards[2].id}
                title={props.cards[2].title}
                images={props.cards[2].images}
                newPrice={props.cards[2].newPrice}
                dollar={props.cards[2].dollar}
                product={props.cards[2].product}
              />
            </div>
            <div className="row">
              <Card
                id={props.cards[3].id}
                title={props.cards[3].title}
                images={props.cards[3].images}
                newPrice={props.cards[3].newPrice}
                dollar={props.cards[3].dollar}
                product={props.cards[3].product}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardList;
