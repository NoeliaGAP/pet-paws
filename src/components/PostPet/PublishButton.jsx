import { usePetData } from '../../contexts/post/PetProvider';
import { createPost } from '../../services/posts';
import { toast } from "sonner";

const PublishButton = () => {
  const { petData, setPetData } = usePetData(); // Obtener los datos desde el contexto

  const handlePublish = async () => {
    try {
      const response = await createPost(petData); // Enviar los datos al servidor
      console.log('PetData:', petData);
      console.log('Post creado:', response);
      localStorage.removeItem('petData');

      toast.success('Publicación creada con éxito');

      setPetData({
        id: null,
        name: 'Anonimo',
        pet_type: '',
        pet_gender: '',
        pet_description: '',
        pet_size: '',
        pet_age: '',
        date_lost: '',
        reward: '70',
        user_id: 1,
        pictures: []
      });

    } catch (error) {
      console.error('Error al crear el post:', error);
      toast.error('Error al crear la publicación');
    }
  };


  return (
    <div className="mt-4">
    <button onClick={handlePublish} className="w-full py-2 bg-[#FF797D] text-white rounded-lg text-lg font-semibold">
      Publicar
    </button>
  </div>
  );
};

export default PublishButton;
