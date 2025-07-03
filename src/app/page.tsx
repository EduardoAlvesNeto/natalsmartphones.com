'use client';

import { useState } from 'react';
import { CloseCircle, SearchNormal1 } from 'iconsax-react';

import Header from '@/components/ui/Header';
import HeroSection from '@/components/ui/HeroSection';
import CategoriesSection from '@/components/ui/CategoriesSection';
import ContactUsSection from '@/components/ui/ContactUsSection';
import Footer from '@/components/ui/footer';
import Modal from '@/components/ui/Modal';
import Product from '@/components/ui/Product';

import { useModal } from './contexts/ModalContext';
import { products } from '@/mocks/products';


export default function Home() {
  const { openModal, setOpenModal } = useModal();
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className='w-dvw'>
      <Header />

      <HeroSection />

      <CategoriesSection categoryId='Novidades' title='Novidades' description='Confira os novos produtos da mais alta qualidade escolhidos por nós.' product={products.filter((item) => item.category.includes('Novidades'))} />

      <CategoriesSection categoryId='MAX' title='Desempenho Máximo' description='Confira os dispositivos top de linha mais potentes.' product={products.filter((item) => item.category.includes('MAX'))} />

      <ContactUsSection />

      <Footer />

      <Modal isOpen={openModal}>
        <div className='w-full flex justify-center items-center gap-4'>
          <CloseCircle className='relative left-0 size-8 stroke-[#8D8D8D] cursor-pointer' variant='Linear' onClick={() => {
            setOpenModal(false);
            setSearchInput('');
          }}/>

          <label htmlFor="search" className='lg:w-1/2 flex items-center gap-4 bg-[#EBEBEB] px-6 py-3 rounded-full w-full'>
            <SearchNormal1 className='stroke-[#8D8D8D] size-5' variant='Linear' />
            <input id='search' type="text" placeholder="Pesquisar produtos..." className='outline-0 placeholder:text-[#8D8D8D] w-full' onClick={() => setOpenModal(true)} onChange={(e) => setSearchInput(e.target.value)}/>
          </label>
        </div>

        <div className='flex justify-center gap-8 flex-wrap w-full h-full'>
          {products
            .filter(item =>
              item.title.toLowerCase().includes(searchInput.toLowerCase())
            )
            .map(item => (
              <Product key={item.id} title={item.title} image={item.image} />
            ))}
        </div>
      </Modal>
    </div>
  );
}
