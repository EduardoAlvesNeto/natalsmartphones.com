interface ProductProps {
    title: string;
    image: string;
}

export default function Product({ title, image }: ProductProps) {
  return(
    <div className="flex flex-col items-center gap-2">
      <div className="flex justify-center items-center size-[300px] bg-[#EBEBEB] rounded-xl">
        <img src={image} alt="" className="size-[100%] object-contain" />
      </div>

      <p className="font-semibold text-lg">{title}</p>
      <a 
        className='flex justify-center gap-4 w-full bg-[#282828] px-10 py-4 rounded-full cursor-pointer'
        href={`https://wa.me/8499919624?text=${'Olá, vi no site da NatalSmartphones esse ' + title + ' e gostaria de saber mais!'}`}
      >
        <span className='text-white'>Tenho interesse</span>
      </a>
    </div>
  );
}