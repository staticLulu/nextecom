'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation'; // For navigation in the App Router
import { useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'; // New hooks for pathname and searchParams

function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname
  const searchParams = useSearchParams(); // Get query parameters
  const [active, setActive] = useState('en');

  const handleLanguageChange = (e: string) => {
    setActive(e);

    const params = new URLSearchParams(searchParams?.toString()); // Preserve existing query parameters

    //@ts-ignore
    router.push(`${pathname}?${params}`, { locale: e } );
  };

  return (
    <div className="flex items-center bg-green-400 p-2 rounded">
      <Image src={active === 'km' ? '/kh.png' : '/en.png'} alt="language" width={40} height={40} />
      <select
        name="language"
        id="language"
        value={active}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="ml-2 p-1 bg-white rounded cursor-pointer"
      >
        <option value="en">En</option>
        <option value="km">Km</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
