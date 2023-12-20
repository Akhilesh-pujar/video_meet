import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation'



import { useState } from 'react';

export default function Home() {
  const router = useRouter()
  const [roomId, setRoomId] = useState('')

  const createAndJoin = () => {
    const roomId = uuidv4()
    router.push(`/${roomId}`)
  }

  const joinRoom = () => {
    if (roomId) router.push(`/${roomId}`)
    else {
      alert("Please provide a valid room id")
    }
  }
  return (
        <div className="bg-black w-full">
      <div className="mx-auto max-w-7xl py-26 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Private Video Meet
              <br />
              Start using our app today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              A simple Video meet app made with webrtc technology & socket to connect users
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <input placeholder='Enter Room ID'
             className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
             required
            value={roomId} onChange={(e) => setRoomId(e?.target?.value)}/>
              <button
              type="submit"
                onClick={joinRoom}
                className="rounded-md bg-white px-2.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Join Room
              </button>
              <button
              onClick={createAndJoin} 
               className="text-sm font-semibold leading-6 text-white">
                Create Room<span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
         <div className=' mt-10'>
         <dl className=" grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2 lg:mt-20">
            <div className="flex flex-col items-start">
             
              <dt className="mt-4 font-semibold text-white">Fully Secure video Meet</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
             
              <dt className="mt-4 font-semibold text-white">Unlimited joiners </dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
              </dd>
            </div>
          </dl>

         </div>
            
        </div>
      </div>
    </div>
    
  )
}
