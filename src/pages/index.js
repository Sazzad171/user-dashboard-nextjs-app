import { Inter } from 'next/font/google'
import UserInfo from '@/components/UserInfo'
import Axios from '@/api/Axios';
import { useUserContext } from '@/context/UserContext';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home({userdata}) {
  const {setUserInfo} = useUserContext();

  useEffect(() => {
    setUserInfo(userdata);
  }, [userdata]);

  return (
    <main
      className={`py-8 ${inter.className}`}
    >
      <div className="max-w-7xl mx-auto px-2">
        <UserInfo />
      </div>
    </main>
  )
}

export async function getServerSideProps() {
  try {
    const userData = await Axios.get("/user/my-profile");

    return {
      props: {
        userdata: userData.data
      }
    }
  }
  catch (error) {
    console.log(error);

    return {
      props: {
        data: null
      }
    }
  }
}