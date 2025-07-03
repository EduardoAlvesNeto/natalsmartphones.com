export default function ContactUsSection() {
  return (
    <section className="flex flex-col items-center gap-6 px-12 py-12">
        
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-2xl text-center lg:text-[40px] text-[#282828]">Não encontrou o que procurava?</h2>

        <p className="font-medium text-center text-[14px] lg:text-[18px] text-[#282828]/60">Entre em contato conosco <br /> Te ajudaremos a encontrar o dispositivo ideal.</p>
      </div>

      <a href={'https://wa.me/558499919624?text=Ol%C3%A1%2C%20vi%20no%20site%20da%20NatalSmartphones%20alguns%20dispositivos%2C%20por%C3%A9m%20n%C3%A3o%20encontrei%20o%20que%20eu%20queria%2C%20poderia%20me%20ajudar%3F'} className='flex justify-center items-center gap-4 w-full lg:w-fit bg-[#25D366] px-10 py-4 rounded-full cursor-pointer'>
        <img src="whatsapp.svg" alt="" className="" />
        <span className='text-white'>Entre em contato</span>
      </a>

    </section>
  );
}