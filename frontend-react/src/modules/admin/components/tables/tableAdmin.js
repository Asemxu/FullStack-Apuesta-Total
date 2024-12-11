import { useUser } from "../../../core/hooks"
import { fetchAuth } from "../../../core/utils/fetchLib"
import useAdmin from "../../hooks/useAdmin"
import { toast } from "react-toastify"
import useToastify from "../../../core/hooks/useToastify"
import { useEffect, useState } from "react"

export const TableAdmin = ({
    isAccept = true
}) => {
    const { showToastify } = useToastify()
    const { data, setData } = useAdmin()
    const [isLoading, setIsLoading] = useState(true)
    const [acepting, setAcepting] = useState(false)
    const { accessToken } = useUser()
    const getListAll = async () => {
        const response = await fetchAuth('GET', isAccept ? 'admin/listAll' : 'admin/listHistory', accessToken)
        const data = await response.json()
        setData(data)
        setIsLoading(false)
    }

    const acceptRegister = async (isAccept,idRegister, idUser) => {
        setAcepting(true)
        const toastLoader = toast.loading("Actualizando estado", {
            position: "top-right",
        });

        const response = await fetchAuth('POST', 'admin/accept', accessToken , {
            accept : isAccept ,
            idregister : idRegister,
            iduser : idUser
        })

        if(response.ok){
            showToastify('success','Se actualizo correctamente el registro')
            setIsLoading(true)
            getListAll()
        }else{
            showToastify('error','Ups ah ocurrido un error')
        }

        toast.done(toastLoader)
        setAcepting(false)
    }

    useEffect(() => {
        getListAll()
    }, [])


    return (
        <div className="mt-4  relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID USER
                        </th>
                        <th scope="col" className="px-6 py-3">
                            REGISTRADOS
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ARCHIVO
                        </th>
                        <th scope="col" className="px-6 py-3">
                            MEDALLA
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ESTADO
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {!isLoading &&
                        data.map((accept, i) => {
                            return accept.status === 0 && isAccept ? (
                                <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {accept.id_username}
                                    </th>
                                    <td className="px-6 py-4">
                                        {accept.total_pokemons}
                                    </td>
                                    <td className="px-6 py-4">
                                        .csv
                                    </td>
                                    <td className="px-6 py-4">
                                        {accept.medal}
                                    </td>
                                    <td className="px-6 py-4">
                                        {isAccept &&
                                            <div disabled={acepting} className={`flex gap-2 ${acepting ? 'opacity-50 disabled' : 'opacity-100'}`}>
                                                <button
                                                    onClick={() => acceptRegister(true,accept.id,accept.user.username)}
                                                    className="bg-green-500 px-3 py-2 rounded-lg text-white   text-right"
                                                >
                                                    Aceptar
                                                </button>
                                                <button
                                                    onClick={() => acceptRegister(false,accept.id,accept.user.username)}
                                                    className="bg-red-500 px-3 py-2 rounded-lg text-white   text-right"
                                                >
                                                    Rechazar
                                                </button>
                                            </div>
                                        }

                                    </td>

                                </tr>
                            ) : !isAccept  && (
                                <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {accept.id_username}
                                    </th>
                                    <td className="px-6 py-4">
                                        {accept.total_pokemons}
                                    </td>
                                    <td className="px-6 py-4">
                                        .csv
                                    </td>
                                    <td className="px-6 py-4">
                                        {accept.medal}
                                    </td>
                                    <td className="px-6 py-4">
                                        {!isAccept &&
                                            <h1 className={`${accept.status === 1 ? 'text-green-500' : 'text-red-500'}`}> {accept.status === 1 ? 'Aceptado' : 'Rechazado'}</h1>
                                        }
                                    </td>

                                </tr>
                            )


                        })

                    }
                </tbody>

            </table>
            {isLoading && <h2 className="text-center m-auto text-white font-bold text-2xl">Cargando</h2>}

        </div>

    )
}
