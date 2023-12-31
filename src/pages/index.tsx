import Head from 'next/head';

import Button from '@/components/common/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <h1>Large Size</h1>
          <div>
            <Button>Large Primary Button</Button>
            <Button color="secondary">Large Secondary Button</Button>
          </div>
        </section>
        <section>
          <h1>Small Size</h1>
          <div>
            <Button size="small">Small Primary Button</Button>
            <Button color="secondary" size="small">
              Small Secondary Button
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
