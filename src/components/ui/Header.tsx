'use client';

import { SearchNormal1, HambergerMenu } from 'iconsax-react';
import { useModal } from '@/app/contexts/ModalContext';

export default function Header() {
  const { setOpenModal } = useModal();

  return(
    <header className="flex items-center justify-between lg:justify-start gap-12 w-full h-[dvh] px-6 lg:px-12 py-6">
      <h1 className="text-[#6CDE27] font-bold text-lg lg:text-3xl">Natal<span className="text-[#0662AF] text-sm lg:text-lg">Smartphones</span></h1>

      <nav className="hidden lg:flex lg:items-center">
        <ul className="flex items-center gap-6 text-base">
          <li><a href="#Novidades">Novidades</a></li>
          <li><a href="#MAX">Desempenho Máximo</a></li>
          <li><a href="#LOW">Custo Benefício</a></li>
        </ul>
      </nav>

      <label htmlFor="search" className='hidden lg:flex lg:items-center gap-4 bg-[#EBEBEB] px-6 py-3 rounded-full'>
        <SearchNormal1 className='stroke-[#8D8D8D] size-5' variant='Linear' />
        <input id='search' type="text" placeholder="Pesquisar produtos..." className='outline-0 placeholder:text-[#8D8D8D] w-full' onClick={() => setOpenModal(true)}/>
      </label>

      <div className='flex gap-4'>
        <SearchNormal1 className='size-5 stroke-[#282828] lg:hidden' variant='Linear' onClick={() => setOpenModal(true)}/>
        <HambergerMenu className='size-5 stroke-[#282828] lg:hidden' variant='Linear' />
      </div>
    </header>
  );
}