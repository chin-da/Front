import { Button } from '../Button';

import { BottomOverlay } from '.';
import { useOverlay } from '@/hooks';

export default {
  title: 'commons/Overlay/BottomOverlay',
  component: BottomOverlay,
};

export const Default = () => {
  const overlay = useOverlay();
  const handleClick1 = () => openOverlay(false);
  const handleClick2 = () => openOverlay(true);
  const openOverlay = (isModal: boolean) => {
    overlay.open(() => (
      <BottomOverlay overlay={overlay} isModal={isModal}>
        <div style={{ height: '500px' }}>
          이것은 하단 오버레이 입니다.{' '}
          <button onClick={() => overlay.close()}>close</button>
          <br />
          오버레이 바깥이나 close 버튼을 눌러 닫아주세요.
        </div>
      </BottomOverlay>
    ));
  };
  return (
    <>
      <Button onClick={handleClick1}>일반 오버레이 호출</Button>
      <br />
      <Button onClick={handleClick2}>모달 오버레이 호출</Button>
    </>
  );
};
Default.args = {};
