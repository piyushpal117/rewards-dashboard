import RankCard from "./RankCard";
import Timercard from "./Timercard";

const FlexLayout = () => {
  return (
    <>
      <div className="flexcards">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i}>
            <Timercard />
          </div>
        ))}
      </div>
    </>
  );
};

export default FlexLayout;
