import Product from './Product';
import { useModal } from '@/app/contexts/ModalContext';

type Products = {
  title: string;
  image: string;
  id: number;
}

interface CategoriesType {
  title: string;
  description: string;
  product: Products[];
  categoryId: string;
}

export default function CategoriesSection({title, description, product, categoryId }: CategoriesType) {
  const { setOpenModal} = useModal();

  return (
    <section id={categoryId} className="flex flex-col items-center gap-6 w-full px-2 lg:px-12 py-12">
      <div className='flex flex-col items-center'>
        <h2 className="text-[#282828] text-[40px] font-bold text-center">{title}</h2>
        <p className="text-[#282828]/60 text-center">{description}</p>
      </div>

      <div className='flex justify-start gap-4 w-full overflow-x-scroll lg:justify-center'>
        {product.map((item) => (
          <Product key={item.id} title={item.title} image={item.image} />
        ))}
      </div>

      <button className='w-full lg:w-1/4 flex gap-4 justify-center items-center px-10 py-4 rounded-full cursor-pointer border border-[#282828]/20' onClick={() => setOpenModal(true)}>
        <span className='text-[#282828] font-semibold'>Ver mais</span>
      </button>
    </section>
  );
}