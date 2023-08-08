import { MouseEvent, useState } from 'react';

import { TextInput } from '@/components/common/TextInput';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { Avatar } from '@/components/common/Avatar';
import { ClickEffect } from '@/components/common/ClickEffect';
import Radio from '@/components/common/Radio';
import { Text } from '@/components/common/Text/Text';

import { StyledCard } from './style';

import { useOverlayEffect } from '.';

export default {
  title: 'hooks/useOverlayEffect/stretch',
  component: TextInput,
};
export const Default = () => {
  const popup = useOverlayEffect({
    isFullScreen: false,
    openMotion: 'stretch_diagonal',
    closeMotion: 'stretch_diagonal',
    duration: '300ms',
    delay: 300,
    timing: 'ease',
    style: {
      width: '70%',
      height: '70%',
      top: '15%',
      left: '15%',
      borderRadius: '20px',
      border: '1px solid #EFEFEF',
    },
  });

  const floating = useOverlayEffect({
    isFullScreen: false,
    isTargetHide: true,
    isBodyLocked: true,
    openMotion: 'stretch_diagonal',
    closeMotion: 'stretch_diagonal',
    duration: '300ms',
    timing: 'ease',
    style: {
      width: '70%',
      height: '70%',
      top: '15%',
      left: '15%',
      borderRadius: '20px',
      border: '1px solid #EFEFEF',
      position: 'fixed',
    },
  });

  const slideLeft = useOverlayEffect({
    openMotion: 'slide_left',
    closeMotion: 'slide_left',
    timing: 'ease-in',
    duration: '300ms',
  });

  const slideRight = useOverlayEffect({
    isFullScreen: false,
    openMotion: 'slide_right',
    closeMotion: 'slide_right',
    timing: 'ease-in',
    duration: '300ms',
    style: {
      width: '70%',
      height: '70%',
      top: '20%',
      borderRadius: '20px',
      border: '1px solid #EFEFEF',
    },
  });

  const slideBottom = useOverlayEffect({
    isFullScreen: false,
    openMotion: 'slide_bottom',
    closeMotion: 'slide_bottom',
    timing: 'ease-in',
    duration: '300ms',
    style: {
      borderRadius: '20px',
      height: '40%',
      position: 'fixed',
      border: '1px solid #EFEFEF',
    },
  });

  const full = useOverlayEffect({
    openMotion: 'stretch_diagonal',
    closeMotion: 'stretch_diagonal',
    timing: 'ease',
    duration: '400ms',
  });

  const [motionType, setMotionType] = useState('full');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type HandleCloseFunction = () => void;
  const SampleModal = ({
    handleClose,
  }: {
    handleClose: HandleCloseFunction;
  }) => (
    <Card
      style={{
        width: '100%',
        height: '100%',
        background: '#FFF',
        border: '1px solid #CDCDCD',
      }}
    >
      <Avatar
        imgSrc="https://fastly.picsum.photos/id/401/250/250.jpg?hmac=YAUOO5nVqv2NTKD7M3GYsyxfw6YVSSZq8QoclgmtW30"
        delayMs={500}
        fallbackText="프로필"
        style={{ width: '100px', height: '100px' }}
      />
      <Button onClick={handleClose}>닫기</Button>
    </Card>
  );

  const handleOpenModal = (e: MouseEvent<HTMLElement>, motionType: string) => {
    const getMotionType = () => {
      switch (motionType) {
        case 'full':
          return full;
        case 'slideLeft':
          return slideLeft;
        case 'slideRight':
          return slideRight;
        case 'slideBottom':
          return slideBottom;
        case 'popup':
          return popup;
        case 'floating':
          return floating;
        default:
          return full;
      }
    };
    getMotionType().open({
      render: <SampleModal handleClose={() => getMotionType().close()} />,
      targetEvent: e,
    });
  };

  const handleFloatingModal = (e: MouseEvent<HTMLElement>) => {
    floating.open({
      render: <SampleModal handleClose={() => floating.close()} />,
      targetEvent: e,
    });
  };

  return (
    <div style={{ height: '300vh' }}>
      <Radio
        name={'rd-motionType'}
        value={motionType}
        onValueChange={e => setMotionType(e)}
      >
        <Radio.Item value="full">
          <Text>full</Text>
        </Radio.Item>
        <Radio.Item value="slideLeft">
          <Text>slideLeft</Text>
        </Radio.Item>
        <Radio.Item value="slideRight">
          <Text>slideRight</Text>
        </Radio.Item>
        <Radio.Item value="slideBottom">
          <Text>slideBottom</Text>
        </Radio.Item>
        <Radio.Item value="popup">
          <Text>popup</Text>
        </Radio.Item>
        <Radio.Item value="floating">
          <Text>floating</Text>
        </Radio.Item>
      </Radio>
      <ClickEffect
        onClick={e => handleOpenModal(e, motionType)}
        bgColor={'blue'}
      >
        <StyledCard>
          <Avatar
            imgSrc="https://fastly.picsum.photos/id/401/250/250.jpg?hmac=YAUOO5nVqv2NTKD7M3GYsyxfw6YVSSZq8QoclgmtW30"
            delayMs={500}
            fallbackText="프로필"
            style={{ width: '100px', height: '100px' }}
          />
        </StyledCard>
      </ClickEffect>

      <Button
        style={{
          borderRadius: '50%',
          position: 'fixed',
          top: '90%',
          left: '90%',
        }}
        onClick={handleFloatingModal}
      >
        +
      </Button>
    </div>
  );
};
Default.args = {};
