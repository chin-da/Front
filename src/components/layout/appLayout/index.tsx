import {
  cloneElement,
  ReactNode,
  useEffect,
  useState,
  createContext,
  useMemo,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-use';

import { useSlideDirection } from '@/hooks';

import { ChildrenStyled, TIMEOUT, TransitionGroupStyled } from './style';
import { AppLayoutContextProps } from './type';

interface Props {
  children: ReactNode;
}
export const AppLayoutContext = createContext<AppLayoutContextProps | null>(
  null,
);
export const AppLayout = ({ children }: Props) => {
  const { slideDirection, setSlideDirection } = useSlideDirection();
  const { pathname } = useLocation();
  const slideDirectionState = useState<string>(slideDirection);
  const [direction, setDirection] = slideDirectionState;
  const context = useMemo(
    () => ({ slideDirectionState }),
    [slideDirectionState],
  );

  useEffect(() => {
    setSlideDirection(direction);
  }, [direction]);

  useEffect(() => {
    setDirection('fade');
  }, [pathname]);

  const childFactoryCreator =
    (props: { classNames: string }) => (child: React.ReactElement) =>
      cloneElement(child, props);

  return (
    <AppLayoutContext.Provider value={context}>
      <TransitionGroupStyled
        childFactory={childFactoryCreator({ classNames: slideDirection })}
      >
        <CSSTransition
          key={pathname}
          timeout={TIMEOUT}
          classNames={slideDirection}
        >
          <ChildrenStyled>{children}</ChildrenStyled>
        </CSSTransition>
      </TransitionGroupStyled>
    </AppLayoutContext.Provider>
  );
};

AppLayout.displayName = 'AppLayout';
