import { useRouter } from 'next/router';

export default function RegistrationId() {
  const router = useRouter();

  return (
    <>
      <main>
        <p>Hello my id is {router.query.id}</p>
        <p>Type is {router.query.type}</p>
      </main>
    </>
  );
}
