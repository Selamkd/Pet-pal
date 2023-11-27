import SinglePetPage from '@/app/components/petPage';

export default function petPage({ params }) {
  const id = params.id;
  return <SinglePetPage id={id} />;
}
