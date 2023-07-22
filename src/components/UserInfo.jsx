import React from 'react';;
import Image from 'next/image'
import userImg from '../../public/next.svg';
import { useUserContext } from '@/context/UserContext';

const UserInfo = () => {
  const { userInfo } = useUserContext();

  return (
    <>
      <Image src={userImg} alt='user img' className='w-20 h-auto mb-2' />
      <p>{ userInfo && userInfo.name }</p>
      <p>{ userInfo && userInfo.email }</p>
    </>
  )
}

export default UserInfo;