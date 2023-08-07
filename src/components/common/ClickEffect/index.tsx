import { forwardRef, memo, useEffect, useRef, Children, cloneElement, ReactElement } from 'react';

import { ClickEffectWrapper } from './style';
import { ClickEffectProps } from './type';
import { getEffect } from './effect';

export const ClickEffect = memo(
  forwardRef<HTMLDivElement, ClickEffectProps>(
    ({ children, effect = 'spread', duration = '400ms', timing = 'ease', bgColor = '#FFF', ...restProps }, ref) => {
      const wrapperRef = useRef<HTMLDivElement>(null);
      const childRef = useRef<HTMLDivElement>(null);
      useEffect(() => {
        try {
          const effectType = getEffect({
            bgColor: bgColor,
            width: childRef?.current?.clientWidth,
            height: childRef?.current?.clientHeight,
          })[effect].run();
          const childCurrent = childRef.current;
          const materializeEffect = (e: any) => {
            const currentTarget = e.currentTarget.getBoundingClientRect();
            const thisTarget = e.target.getBoundingClientRect();
            const circle = document.createElement('div');
            // eventListener가 현재 target의 offset을 return하는데 단일 타겟이 아닐때 currentTarget과 target이 일치하지않아 offset이 오동작해서 추가.
            const x = e.offsetX + Math.abs(thisTarget.x - currentTarget.x);
            const y = e.offsetY + Math.abs(thisTarget.y - currentTarget.y);
            circle.classList.add('circle');
            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;
            circle.style.animation = `${effectType} ${duration} ${timing}`;
            childCurrent && childCurrent.appendChild(circle);
          };
          childCurrent?.addEventListener('click', materializeEffect);
          return () => {
            childCurrent?.removeEventListener('click', materializeEffect);
          };
        } catch (err) {
          console.warn(err);
        }
      }, []);
      return (
        <>
          {children && Children.toArray(children).length > 1 ? (
            <>{children}</>
          ) : (
            <ClickEffectWrapper ref={wrapperRef} {...restProps}>
              {Children.map(
                children,
                (child: ReactElement | undefined) =>
                  child &&
                  cloneElement(child, {
                    ref: childRef,
                    style: { overflow: 'hidden', position: 'relative', ...children?.props.style },
                  }),
              )}
            </ClickEffectWrapper>
          )}
        </>
      );
    },
  ),
);

ClickEffect.displayName = 'ClickEffect';
