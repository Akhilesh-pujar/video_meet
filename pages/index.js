
import { useRouter } from "next/router"
import styles from '@/styles/home.module.css'
import { useState } from "react"
import { v4 as uuidv4} from "uuid" 
export default function Home() {
  const router = useRouter()
  const [roomId, setRoomId] = useState('')

  const createandJoin =()=>{
    const roomid = uuidv4();

    router.push(`/${roomid}`)
  }
  const joinRoom = () => {
    if (roomId) router.push(`/${roomId}`)
    else {
      alert("Please provide a valid room id")
    }
  }

  return (
    <>      
    
    <h1 className={styles.homeContainer}>
      Video Meet
    </h1>
    <div className={styles.enterRoom}>
      <input placeholder='Enter Room ID' value={roomId} onChange={(e) => setRoomId(e?.target?.value)}/>
      <button onClick={joinRoom}>Join Room</button>
    </div>
    <span  className={styles.separatorText}>..................OR...............</span>
    <button onClick={createandJoin}>Create Room</button>
    </>
  )
}
