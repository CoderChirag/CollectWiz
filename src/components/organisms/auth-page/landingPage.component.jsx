import { Hidden } from '@mui/material';
import { styled } from '@mui/material/styles';


function LandingPage() {
  return (
    <div className=''>
      <div className='flex justify-end items-center h-[48px] bg-gray-500 px-10 w-full'>
        <div className='flex space-x-4'>
          <div>Contact Us</div>
          <div>Discover</div>
        </div>
      </div>

      <div className='grid grid-cols-5'>
        <div className='col-span-3 flex justify-center items-center mt-[50px] ml-[300px]'>
          <img height={600} width={600} src="/assets/images/logo.svg" alt="" srcset="" />
        </div>
      </div>
      <div className='col-span-3 flex justify-center items-center mt-[10px] ml-[300px]'>
          <div>Feel the power of storing the storable </div>
      </div>



    </div>
  );
}

export default LandingPage;
