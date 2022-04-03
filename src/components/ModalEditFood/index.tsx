import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';

interface FoodsProps {
  id: number,
  name: string,
  description: string,
  price: string,
  available: boolean,
  image: string,
}

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: FoodsProps;
  handleUpdateFood: (food: FoodsProps) => void;
}


export function ModalEditFood({ setIsOpen, editingFood, handleUpdateFood, isOpen }: ModalEditFoodProps) {
  const formRef = useRef()

  async function handleSubmit(data: FoodsProps) {
    handleUpdateFood(data);
    setIsOpen();
  };


  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef.current} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" icon='' />

        <Input name="name" placeholder="Ex: Moda Italiana" icon='' />
        <Input name="price" placeholder="Ex: 19.90" icon='' />

        <Input name="description" placeholder="Descrição" icon='' />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}