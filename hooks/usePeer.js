const { useState, useEffect } = require("react")
import { useSocket } from "@/context/socket"
import { useRouter } from "next/router"


const usePeer = ()=>{
    const socket = useSocket()
    const roomId = useRouter().query.roomId;
    const [peer,setpeer]= useState(null);
    const [peerid,setpeerid] = useState('');
    const isPeerSet = useRef(false);


    useEffect(()=>{
        if (isPeerSet.current || !roomId || !socket) return;
        isPeerSet.current = true;
        let myPeer;
    (async function initpeer(){
        const mypeer = new (await import ('peerjs')).default();

        setpeer(mypeer) 
        mypeer.on('open',(id)=>{
            console.log(`your peerid is ${id}connected`)
            setpeerid(id)
        })
    })() 

    },[])

    return{
        peer,
        peerid
    }
}

export default usePeer;