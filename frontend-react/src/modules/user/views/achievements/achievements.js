import { ListAchievement } from "../../components/containers"
import { Link } from "react-router-dom"
export const Achievements = () => {
    return (
        <div className="achievements-container">
            <h1 className="font-bold text-center my-4">Mis Logros</h1>
            <ListAchievement />
            <div className="text-center mt-4">
                <Link className="font-bold text-red-500" to="/user/upload-users">
                    Subir usuarios
                </Link>
            </div>
        </div>
    )
}

