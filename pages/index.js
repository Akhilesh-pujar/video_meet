import { useSocket } from "@/context/socket"
import { useEffect } from "react"
export default function Home() {
  const socket = useSocket()
  useEffect(()=>{
   socket?.on("connect",()=>{
    console.log(socket.id)
   })
  },[socket])

  return (
    <>      
     <h1 className=" text-green-500">Welcome to video meet app</h1>
    </>
  )
}
