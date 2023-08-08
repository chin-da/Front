import { useRef } from 'react';

import { useOverlayEffect } from '@/hooks';

import { Button } from '../Button';
import { StyledCard } from './style';

import ThumbnailOverlay from '.';

export default {
  title: 'commons/Overlay/ThumbnailOverlay',
  component: ThumbnailOverlay,
};

const dataList = [
  {
    thumbnail:
      'https://fastly.picsum.photos/id/931/1024/1024.jpg?hmac=n-hKmK163X4iiAXGgP-jwr-SC0FY_xNqadYbd-0rb9g',
    title: '그리드',
  },
  {
    thumbnail:
      'https://images.unsplash.com/photo-1688637737426-10cfce2fb1e5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1024&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTM3NDYyOA&ixlib=rb-4.0.3&q=80&w=1024',
    title: '스퀘어',
  },
];
export const Default = () => {
  const tRef = useRef(null);
  const tRef2 = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tRefs = useRef<any>([]); // list 데이터로 생성시
  const full = useOverlayEffect({
    openMotion: 'stretch_diagonal',
    closeMotion: 'stretch_diagonal',
    timing: 'ease',
    duration: '200ms',
  });

  return (
    <>
      <StyledCard
        style={{ width: '240px', display: 'inline-block', overflow: 'hidden' }}
        onClick={e => {
          full.open({
            render: (
              <ThumbnailOverlay overlay={full}>
                <div style={{ height: '100vh', overflow: 'auto' }}>
                  <div style={{ height: '50px' }}>그리드</div>
                  <div style={{ display: 'grid' }}>
                    <ThumbnailOverlay.Thumbnail
                      src="https://fastly.picsum.photos/id/931/1024/1024.jpg?hmac=n-hKmK163X4iiAXGgP-jwr-SC0FY_xNqadYbd-0rb9g"
                      ref={tRef}
                      currentTarget={e.currentTarget}
                      style={{ gridArea: '1/1' }}
                    />
                    <div style={{ gridArea: '1/2' }}>
                      <ThumbnailOverlay.Box>
                        이 사진은 산이다.
                      </ThumbnailOverlay.Box>
                    </div>
                  </div>
                  <ThumbnailOverlay.Close>
                    <ThumbnailOverlay.Box>
                      <Button>닫기</Button>
                    </ThumbnailOverlay.Box>
                  </ThumbnailOverlay.Close>
                  <ThumbnailOverlay.Box>
                    <div style={{ height: '300px', border: '1px solid red' }}>
                      <span style={{ whiteSpace: 'nowrap' }}>
                        이 사진은 산입니다.
                      </span>
                      <span style={{ whiteSpace: 'nowrap' }}>
                        300px 스크롤 예제
                      </span>
                    </div>
                  </ThumbnailOverlay.Box>
                </div>
              </ThumbnailOverlay>
            ),
            targetEvent: e,
          });
        }}
      >
        <img
          ref={tRef}
          src="https://fastly.picsum.photos/id/931/1024/1024.jpg?hmac=n-hKmK163X4iiAXGgP-jwr-SC0FY_xNqadYbd-0rb9g"
          style={{ width: '180px' }}
          alt="썸네일 대상"
        />
        <div>click me1</div>
      </StyledCard>

      <StyledCard
        style={{ width: '240px', display: 'inline-block', overflow: 'hidden' }}
        onClick={e => {
          full.open({
            render: (
              <ThumbnailOverlay overlay={full}>
                <div style={{ height: '100vh', overflow: 'auto' }}>
                  <div style={{ height: '50px' }}>정사이즈</div>
                  <div style={{ width: '400px', margin: 'auto' }}>
                    <ThumbnailOverlay.Thumbnail
                      src="https://images.unsplash.com/photo-1688637737426-10cfce2fb1e5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1024&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTM3NDYyOA&ixlib=rb-4.0.3&q=80&w=1024"
                      ref={tRef2}
                      currentTarget={e.currentTarget}
                    />
                    <div>이 사진은 산이다.</div>
                  </div>
                  <ThumbnailOverlay.Close>
                    <Button>닫기</Button>
                  </ThumbnailOverlay.Close>
                  <div style={{ height: '300px', border: '1px solid red' }}>
                    <span style={{ whiteSpace: 'nowrap' }}>
                      이 사진은 산입니다.
                    </span>
                    <span style={{ whiteSpace: 'nowrap' }}>
                      300px 스크롤 예제
                    </span>
                  </div>
                </div>
              </ThumbnailOverlay>
            ),
            targetEvent: e,
          });
        }}
      >
        <img
          ref={tRef2}
          src="https://images.unsplash.com/photo-1688637737426-10cfce2fb1e5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1024&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTM3NDYyOA&ixlib=rb-4.0.3&q=80&w=1024"
          style={{ width: '180px' }}
          alt="썸네일 대상"
        />
        <div>click me1</div>
      </StyledCard>

      {dataList.map((o, idx) => {
        return (
          <StyledCard
            key={idx}
            style={{
              width: '240px',
              display: 'inline-block',
              overflow: 'hidden',
            }}
            onClick={e => {
              full.open({
                render: (
                  <ThumbnailOverlay overlay={full}>
                    <div style={{ height: '100vh', overflow: 'auto' }}>
                      <div style={{ height: '50px' }}>{o.title}</div>
                      <div style={{ width: '400px', margin: 'auto' }}>
                        <ThumbnailOverlay.Thumbnail
                          src={o.thumbnail}
                          ref={{ current: tRefs.current[idx] }}
                          currentTarget={e.currentTarget}
                        />
                        <div>이 사진은 산이다.</div>
                      </div>
                      <ThumbnailOverlay.Close>
                        <Button>닫기</Button>
                      </ThumbnailOverlay.Close>
                      <div style={{ height: '300px', border: '1px solid red' }}>
                        <span style={{ whiteSpace: 'nowrap' }}>
                          이 사진은 산입니다.
                        </span>
                        <span style={{ whiteSpace: 'nowrap' }}>
                          300px 스크롤 예제
                        </span>
                      </div>
                    </div>
                  </ThumbnailOverlay>
                ),
                targetEvent: e,
              });
            }}
          >
            <img
              ref={el => (tRefs.current[idx] = el)}
              src={o.thumbnail}
              style={{ width: '180px' }}
              alt="썸네일 대상"
            />
            <div>{o.title}</div>
          </StyledCard>
        );
      })}
    </>
  );
};

Default.args = {};
