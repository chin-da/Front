import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import QRCodeCanvas from '@/components/common/QRCodeCanvas';

export default function Registration() {
  const router = useRouter();

  const [ogUrl, setOgUrl] = useState('');
  const [value, setValue] = useState('');
  const [valueType, setValueType] = useState<'S' | 'B' | 'D'>();

  useEffect(() => {
    const host = window.location.host;
    const baseUrl = `https://${host}`;

    setOgUrl(`${baseUrl}${router.pathname}/${value}?type=${valueType}`);
  }, [router.pathname, value, valueType]);

  return (
    <>
      <main>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <select
          value={valueType}
          onChange={e => setValueType(e.target.value as 'S' | 'B' | 'D')}
        >
          <option value="S">Squat</option>
          <option value="B">Bench press</option>
          <option value="D">Deadlift</option>
        </select>

        <QRCodeCanvas url={`${ogUrl}/`} />
      </main>
    </>
  );
}
