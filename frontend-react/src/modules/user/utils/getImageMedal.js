import { NOTMEDALS, MEDALS } from "../constants";
export const GetImageMedal = ({ totalMedals }) => {
  const filteredMedals = Object.entries(MEDALS).filter(([, medal]) => {
    return medal.MAX_ACCEPT <= totalMedals;
  });

  return (
    <div
      className={`flex flex-wrap justify-between gap-2 ${
        totalMedals === NOTMEDALS ? "opacity-50" : "opacity-100"
      }`}
    >   
      
      {filteredMedals.length === NOTMEDALS &&
        <img
          className="m-auto opacity-50"
          height={100}
          width={100}
          src="/medals/medal.jpg"
          alt="Medalla actual"
        />
      }

      {filteredMedals.length !== NOTMEDALS &&
        <img
          className="m-auto rounded-full"
          height={100}
          width={100}
          src={`/medals/${filteredMedals[filteredMedals.length-1][1].image}.jpg`}
          alt="Medalla actual"
        />
      }
     
    </div>
  );
};
