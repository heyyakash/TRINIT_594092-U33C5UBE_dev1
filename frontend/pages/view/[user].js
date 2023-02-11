import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ProfileComponent from '../../components/Profile'
import data from '../../data.json'
import Profile from '../profile'

const View = () => {
  const router = useRouter()
  const {user} = router.query
  const [d,setD] = useState(null)
  useEffect(() => {
    let arr = data.filter((d)=>d._id===parseInt(user))
    if(arr){
      setD(arr[0])
    }
    console.log(arr)
  }, [user])
  
  return (
    <div className='flex flex-col w-full'>
      <div className='w-full box'>
        <ProfileComponent d = {d} />
      </div>
    </div>
  )
}

export default View