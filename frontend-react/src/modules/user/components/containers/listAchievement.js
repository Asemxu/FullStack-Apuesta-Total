import { MEDALS , NOTMEDALS } from "../../constants";
import { Achievement } from "./achievement";
import { useUser } from "../../../core/hooks";
export const ListAchievement = () => {
  const { totalMedals } = useUser();
  return (
    <div
      className={`flex flex-wrap justify-between gap-2 ${
        totalMedals === NOTMEDALS ? "opacity-50" : "opacity-100"
      }`}
    >
      {Object.entries(MEDALS).map(([key,medal]) => {
        return (
            <Achievement key={key} medal={medal} />
        )
      })}
    </div>
  );
};
