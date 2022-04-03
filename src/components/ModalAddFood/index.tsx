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

interface ModalAddFoodProps {
  handleAddFood: (food: FoodsProps) => Promise<void>,
  isOpen: boolean;
  setIsOpen: () => void;
}


export function ModalAddFood({ setIsOpen, isOpen, handleAddFood }: ModalAddFoodProps) {

  const formRef = useRef();

  async function handleSubmit(data: FoodsProps) {
    handleAddFood(data);
    setIsOpen();
  };


  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef.current} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" icon='' />

        <Input name="name" placeholder="Ex: Moda Italiana" icon='' />
        <Input name="price" placeholder="Ex: 19.90" icon='' />

        <Input name="description" placeholder="Descrição" icon='' />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

