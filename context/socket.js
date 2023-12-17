import { createContext, useContext, useEffect, useState } from "react"
import { io} from "socket.io-client"

const SocketContext = createContext(null)

export const useSocket = ()=>{
    const socket = useContext(SocketContext)
    return socket
}

export const SocketProvider = (props)=>{
    const [socket, setsocket] = useState(null)
    const {children} = props
    useEffect(()=>{
      const connection = io();
      setsocket(connection)
    },[]);

    socket?.on('connect_error', async (err) => {
        console.log("Error establishing socket", err)
        await fetch('/api/socket')
      })


    return(
        <SocketContext.Provider value = {socket}>
         {children}
        </SocketContext.Provider>

    )
}