import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <h3 className="text-center text-xl font-bold mb-2">Welcome to User Dashboard</h3>
      <ul className='flex justify-center gap-4'>
        <li>
          <Link href="/" className='text-blue-700'>My User</Link>
        </li>
        <li>
          <Link href="/update-me" className='text-blue-700'>Update My Info</Link>
        </li>
        <li>
          <Link href="/delete-me" className='text-blue-700'>Delete Me</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;