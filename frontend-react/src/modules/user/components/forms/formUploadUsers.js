import { useState } from "react";
import { useUser } from "../../../core/hooks";
import { GetImageMedal } from "../../utils";
import { useEffect } from "react";
import { fetchAuth, fetchAuthFile } from "../../../core/utils/fetchLib";
import useToastify from "../../../core/hooks/useToastify";
import useRegister from "../../hooks/useRegister";

export const FormUploadUsers = () => {
  const [isLoading,setIsLoading] = useState(true)
  const [isLoadingUpload,setIsLoadingUpload] = useState(false)
  const { totalMedals , accessToken  , setTotal} = useUser()   
  const [file , setFile] = useState(null)
  const { showToastify  } = useToastify()
  const { setInfoRegister , lastRegister } = useRegister()

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
};

  const getTotalRegisters = async () => {
    setIsLoading(true)
    const response = await fetchAuth('GET' , 'user/totalRegisters' , accessToken)
    const total = await response.json()
    setTotal(total)
    setIsLoading(false)
  }

  const upload = async (e) => {
    e.preventDefault()
    setIsLoadingUpload(true)
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetchAuthFile('POST' , 'user/upload' , accessToken , formData)
    setIsLoadingUpload(false)

    if(response.ok){
      const { register } = await response.json()
      setInfoRegister( { total : register , medal : "Bronce" })

      showToastify('success','Se enviaron los usuarios correctamente espere verificación')

    }else
      showToastify('error','Ups algo paso no se pudieron registrar los usuarios')
    
  }


  useEffect(() => {
    getTotalRegisters()
  },[])

  return (
    <form onSubmit={upload}>
      <h2 className="font-bold">Sube tus usuarios por .csv</h2>
      <div className="text-start">
        <label htmlFor="file">Escoge archivo a subir</label>
        <input type="file" required id="file" name="file" accept=".csv" onChange={handleFileChange} />
      </div>
      <button
        type="submit"
        disabled={isLoadingUpload}
        className={`bg-green-700 w-full mt-4 rounded-lg text-white px-3 py-2 ${isLoadingUpload ? 'opacity-50' : 'opacity-100'}`}
      >
        { isLoadingUpload ? "Enviando..." : 'Enviar' }
      </button>
      <div className="text-center mt-4">
        <p>Posible Medalla</p>
        <p>(por verificar)</p>
        
        <GetImageMedal  totalMedals={lastRegister.total}/>
        
        <h2>Mi total de clientes registrados es {isLoading ? ' ... ' : totalMedals}</h2>
      </div>
    </form>
  );
};
