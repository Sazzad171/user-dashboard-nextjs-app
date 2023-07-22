import React from 'react';
import { Inter } from 'next/font/google';
import UpdateUser from '@/components/UpdateUser';


const inter = Inter({ subsets: ['latin'] });

const updateMe = () => {

  return (
    <main
      className={`py-8 ${inter.className}`}
    >
      <div className="max-w-7xl mx-auto px-2">
        <UpdateUser />
      </div>
    </main>
  )
}

export default updateMe;