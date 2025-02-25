import RankCard from "./RankCard";

const GridLayout = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {Array.from({ length: 9 }, (_, i) => (
        <div
          key={i}
          className="bg-blue-500 text-white p-6 rounded-lg text-center"
        >
          <RankCard />
        </div>
      ))}
    </div>
  );
};

export default GridLayout;
