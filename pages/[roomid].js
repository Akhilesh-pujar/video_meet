const { useSocket } = require("@/context/socket")
import usePeer from "@/hooks/usePeer"
const Room = () =>{
    const socket = useSocket()
    const {peer,peerid} = usePeer()
 

}
export default Room;