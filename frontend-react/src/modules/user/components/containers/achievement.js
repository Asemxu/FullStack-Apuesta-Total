import { haveAchivement } from "../../utils"
import { useUser } from "../../../core/hooks"

export const Achievement = ({
    key,
    medal
}) => {
    const { totalMedals } = useUser()
    return (
        <img
            key={key}
            className={`rounded-full w-3/12 h-[100px] shadow-2xl ${haveAchivement(
            totalMedals,
            medal.MAX_ACCEPT
            )}`}
            src={`/medals/${medal.image}.jpg`}
            alt={medal.image}
        />
    )
}
