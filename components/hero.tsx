import Image from 'next/image';
const Hero_Section = () => {
  return (
    <div className='flex h-[500.59px] mt-[30px] ml-[107.49px] rounded-[0.86px] justify-between items-center'>
        <div className='flex flex-col justify-center w-[472.97px] h-[162.53px]'>
          <h1 className='font-bold text-[37px] leading-[62.24px] text-black font-abc'>
            IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>

          <p className='font-medium text-[18px] text-[#787054]  h-[144px] mt-[15px] font-abc'>
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>

          <button className='w-[153px] h-[32px] text-[25.8] bg-[#A29875] mt-[15px] font-abc font-medium text-white rounded-[8.6px] p-[5px] mt-[8.5px]'>Explore Now</button>
        </div>
        <div className='flex items-center h-full mr-[70px]'>
          <Image src="/image/Side-img.png" alt='Image' width={300} height={400} className='absolute'/>
          <Image src="/image/Outer-layer.png" alt='layer' width={280} height={500} className='relative ml-[10px]'/>
        </div>
      </div>
  )
}
export default Hero_Section;
