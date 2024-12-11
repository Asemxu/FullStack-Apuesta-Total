import { useEffect } from 'react';
import io from 'socket.io-client';
import useToastify from '../../core/hooks/useToastify';
import { useUser } from '../../core/hooks';
import { fetchAuth } from '../../core/utils/fetchLib';

const socket = io('http://localhost:4000');

const UserContainer = ({  children }) => {
    const { user , accessToken , setTotal  } = useUser()
    const {  showToastify } = useToastify()
    const getTotalRegisters =  async () =>{
        const response = await fetchAuth('GET', 'user/totalRegisters' , accessToken)
        const total = await response.json()
        setTotal(total)
    }
    useEffect(() => {
        socket.emit('join', user);
    
        socket.on('approvalNotification', (data) => {          
          if(data.accept){
            showToastify('success',"Se aprobo la subida de usuarios del registro con ID (" + data.idregister + ")")
            getTotalRegisters()
          }else{
            showToastify('error',"Se rechazo la subida de usuarios del registro con ID (" + data.idregister + ")")

          }
        });
    
        return () => {
          socket.off('approvalNotification');
        };
      }, []);
    return (
        children
    )
}

export default UserContainer
