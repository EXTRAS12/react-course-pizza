import React from 'react';
import ContentLoader from 'react-content-loader';

export  const Skeleton = (props) => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={400}
    viewBox='0 0 280 400'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}>
    <circle cx='103' cy='88' r='89' />
    <circle cx='201' cy='180' r='3' />
    <rect x='138' y='207' rx='0' ry='0' width='11' height='1' />
    <rect x='10' y='189' rx='10' ry='10' width='190' height='19' />
    <rect x='12' y='221' rx='9' ry='9' width='188' height='44' />
    <rect x='12' y='271' rx='9' ry='9' width='65' height='27' />
    <rect x='102' y='270' rx='9' ry='9' width='98' height='35' />
    <rect x='113' y='293' rx='0' ry='0' width='0' height='1' />
  </ContentLoader>
);

export default Skeleton;
