import Card from "./Card";

const CardList = () => {
  const cards = ["Card 1", "Card 2", "Card 3", "Card 4"];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {cards.map((title, index) => (
        <Card key={index} title={title} />
      ))}
    </div>
  );
};

export default CardList;
