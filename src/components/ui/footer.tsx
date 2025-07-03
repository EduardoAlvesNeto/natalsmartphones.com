const Year = new Date;

export default function Footer() {
  return(
    <footer className="flex flex-col gap-6 w-full bg-[#F0F0F0] px-16 py-12">
      <div className="flex gap-12 flex-col lg:flex-row">

        <div className="flex flex-col gap-6">
          <h3 className="font-black text-3xl">Natal <p className="font-extrabold text-2xl">Smartphones</p></h3>

          <p className="text-sm text-[#282828]/60">Realizando sonhos de consumo com nossos dispositivos selecionados.</p>
        
          <div className="flex gap-2">
            <a href="" className="bg-[#282828] w-8 h-8 flex items-center justify-center rounded-full">
              <img src="facebook.svg" alt="" className="size-4" />
            </a>

            <a href="https://www.instagram.com/natal_smartphones/" className="bg-white border-1 border-[#282828]/60 w-8 h-8 flex items-center justify-center rounded-full">
              <img src="instagram.svg" alt="" className="size-4" />
            </a>
          </div>
        </div>

        <div className="w-full flex justify-between flex-wrap lg:flex-nowrap gap-8">
          <div className="flex flex-col gap-8">
            <p className="font-medium tracking-widest">EMPRESA</p>
            <div className="flex flex-col gap-4">
              <p className="text-[#282828]/60">Sobre</p>
              <p className="text-[#282828]/60">Termos</p>
              <p className="text-[#282828]/60">Contato</p>
              <p className="text-[#282828]/60">Ajuda</p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <p className="font-medium tracking-widest">Produtos</p>
            <div className="flex flex-col gap-4">
              <p className="text-[#282828]/60">Celulares</p>
              <p className="text-[#282828]/60">Tablets</p>
              <p className="text-[#282828]/60">SmartWatchs</p>
              <p className="text-[#282828]/60">Notebooks</p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <p className="font-medium tracking-widest">MARCAS</p>
            <div className="flex flex-col gap-4">
              <p className="text-[#282828]/60">Apple</p>
              <p className="text-[#282828]/60">Samsung</p>
              <p className="text-[#282828]/60">Xiaomi</p>
              <p className="text-[#282828]/60">Motorola</p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <p className="font-medium tracking-widest">SUPORTE</p>
            <div className="flex flex-col gap-4">
              <p className="text-[#282828]/60">Garantia</p>
              <p className="text-[#282828]/60">Entrega</p>
              <p className="text-[#282828]/60">Devoluções</p>
              <p className="text-[#282828]/60">Fale conosco</p>
            </div>
          </div>
        </div>

      </div>

      <div className="w-full border-1 border-[#282828]/10"></div>

      <div className="flex justify-center">
        <p className="text-[#282828]/60 text-sm text-center">Natal Smartphones © 2011-{Year.getFullYear()}, Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}