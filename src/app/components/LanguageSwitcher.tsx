'use client';

import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LanguageSwitcher = ({ locale }: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeLocale, setActiveLocale] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const languageLogos: { [key: string]: string } = {
    en: '/en.png', 
    km: '/km.png', 
  };

  useEffect(() => {
    const currentLocale = pathname.split('/')[1]; 
    if (currentLocale) {
      setActiveLocale(currentLocale); 
    } else {
      setActiveLocale(locale ?? 'en'); 
    }
  }, [pathname, locale]);

  const handleLanguageChange = (newLocale: string) => {
    setActiveLocale(newLocale);
    router.push(`/${newLocale}${pathname.substring(3)}`);
    setIsOpen(false); // Close dropdown after selection
  };

  const menuProps = `{
    flex 
    items-center 
    p-2 
    cursor-pointer 
    hover:bg-slate-100
  }`

  return (
    <div className='relative !flex'>
      {activeLocale === null ? (
        <div className='w-[130px] !flex items-center'>
          <div 
            className='
              w-[35px] 
              h-[35px] 
              bg-green-600 
              rounded-full 
              flex 
              items-center 
              justify-center 
              text-lg 
              text-white
            '
          > L </div>
        </div>
      ) : (
        <div className='w-[130px] !flex items-center'>
          <Image
            src={languageLogos[activeLocale]}
            alt={activeLocale}
            width={50}
            height={50}
            unoptimized
            className='rounded-full object-cover w-[30px] h-[30px]'
          />
          <div className='grid'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 h-10 w-full rounded-xl bg-transparent border-none focus:outline-none"
            >
              {activeLocale === 'en' ? 'English' : 'Khmer'}
            </button>
            {isOpen && (
              <div className="absolute left-0 mt-[60px] w-full bg-white shadow-lg z-10">
                <div onClick={() => handleLanguageChange('en')} className={menuProps}>
                  <Image
                    src={languageLogos['en']}
                    alt="English"
                    width={30}
                    height={30}
                    unoptimized
                    className='object-contain object-center'
                  />
                  <span className="ml-2">English</span>
                </div>
                <div onClick={() => handleLanguageChange('km')} className={menuProps}>
                  <Image
                    src={languageLogos['km']}
                    alt="Khmer"
                    width={30}
                    height={30}
                    unoptimized
                    className='object-contain object-center'
                  />
                  <span className="ml-2">Khmer</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
