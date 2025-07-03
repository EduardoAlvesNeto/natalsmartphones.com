interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
}

export default function Modal({ children, isOpen }: ModalProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#282828]/40 flex items-center justify-center lg:p-12">
          <div className="flex flex-col gap-6 w-full h-full bg-white p-6 rounded-xl shadow-lg overflow-y-auto">
            {children}
          </div>
        </div>
      )}
    </>
  );
}
