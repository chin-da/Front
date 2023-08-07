import { Avatar } from '.';

export default {
  title: 'commons/Avatar',
  component: Avatar,
};

export const Default = () => (
  <Avatar
    // imgSrc="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
    imgSrc="https://picsum.photos/250/250 "
    delayMs={500}
    fallbackText="프로필"
    style={{ width: '100px', height: '100px' }}
  />
);
Default.args = {};
