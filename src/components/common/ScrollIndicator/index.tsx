import { useDebounce } from '@/hooks';
import { isEmpty } from 'lodash';
import React, { useState, useEffect } from 'react';

import { StyledBadgeImage, StyledProgressBar, ContainerWrapper, ScrollIndicatorWrapper } from './style';
import { ScrollIndicatorProps } from './type';
export const ScrollIndicator = ({ targetRef }: ScrollIndicatorProps) => {
  const [scroll, setScroll] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const onScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    const targetOffsetTop = targetRef?.current?.offsetTop;
    if (targetOffsetTop && scrolled > targetOffsetTop) {
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight - targetOffsetTop;
      const scrollPercent = ((scrolled - targetOffsetTop) / maxHeight) * 100; //hook으로 대체?
      setScroll(scrollPercent);
    } else {
      setScroll(0);
    }
  };
  useEffect(() => {
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    console.log('b', isMoving);
  }, [isMoving]);

  return (
    <ScrollIndicatorWrapper>
      <ContainerWrapper>
        <StyledProgressBar style={{ width: `${scroll}%` }}>
          {/* <StyledBadgeImage
            style={{
              width: '30px',
              height: '30px',
              left: `calc(${scroll}% - 15px)`,
            }}
            // src={'https://asset.seoltab.com/0deb6cea009a4b7784c5be6815d402b7.png'}
            onAnimationEnd={() => {
              setIsMoving(false);
            }}
            isMoving={isMoving}
          /> */}
        </StyledProgressBar>
      </ContainerWrapper>
    </ScrollIndicatorWrapper>
  );
};
