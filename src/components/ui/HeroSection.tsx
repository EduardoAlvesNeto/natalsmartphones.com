import { ArrowDown2, MessageText1 } from 'iconsax-react';

export default function HeroSection() {
  return(
    <section className="flex items-center justify-between px-2 lg:px-12 py-6 h-[85dvh] overflow-hidden">
      <div className="flex flex-col justify-center items-center lg:items-start gap-4">
        <h1 className="font-black text-5xl text-center lg:text-start lg:text-6xl text-[#282828]">
            Loja Virtual <br />
            Moderna <br />
            Feita para você.
        </h1>

        <p className="text-[#282828]/60 text-xs text-center lg:text-base lg:text-start">Explore nossa seleção de smartphones cuidadosamente escolhidos <br className='hidden lg:block' /> feitos para destacar sua personalidade e atender ao seu estilo único.</p>

        <div className='w-full flex flex-col gap-2 lg:flex-row lg:gap-4 lg:items-start'>

          <a className='flex gap-4 justify-center items-center lg:w-fit bg-[#282828] px-10 py-4 rounded-full cursor-pointer'>
            <ArrowDown2 className='size-5 stroke-white' variant='Linear' />
            <span className='text-white'>Ver produtos</span>
          </a>
        
          <a className='flex gap-4 justify-center items-center lg:w-fit bg-[#0662AF] px-10 py-4 rounded-full cursor-pointer'>
            <MessageText1 className='size-5 stroke-white' variant='Linear' />
            <span className='text-white'>Entre em contato</span>
          </a>

        </div>

        <div className='flex lg:items-start lg:gap-4 mt-6'>
          <div className='text-center lg:text-left'>
            <h3 className='text-xl lg:text-4xl text-[#282828] font-bold'>+14</h3>
            <p className='text-sm lg:text-lg text-[#282828]/70'>Anos de trabalho.</p>
          </div>

          <div className='text-center lg:text-left'>
            <h3 className='text-xl lg:text-4xl text-[#282828] font-bold'>+500</h3>
            <p className='text-sm lg:text-lg text-[#282828]/70'>Clientes Satisfeitos.</p>
          </div>

          <div className='text-center lg:text-left'>
            <h3 className='text-xl lg:text-4xl text-[#282828] font-bold'>+50</h3>
            <p className='text-sm lg:text-lg text-[#282828]/70'>Dispositivos a venda.</p>
          </div>
        </div>
      </div>

      <div className="relative translate-y-16 hidden w-max lg:flex">
        <img src="hero.webp" alt="" className='' />
      </div>
    </section>
  );
}