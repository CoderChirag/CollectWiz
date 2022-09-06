const LandingPage = () => {
  return (
    <div className=''>
      <div className='flex justify-end items-center h-[48px]  px-10 w-full'>
        <div className='flex space-x-4'>
          <div>Contact Us</div>
          <div>Discover</div>
        </div>
      </div>


      <div className='flex justify-center items-center'>
        <div className='col-span-3 -ml-[100px] flex justify-center items-center mt-[50px] '>
          <div className="">
          <img height={500} width={500} src="/assets/images/logo.svg" alt="" srcset="" />
          <div className="border-t-[2px] ml-[300px] -mt-[100px] w-[400px] border-black"></div>
          </div>
        </div>
      </div>

        <div className='flex  ml-[240px] mt-[40px] justify-center items-center text-3xl'>
          <div>
          <div>Feel the power of storing the storable</div>
          <div className="bg-blue-500 mt-6 text-white px-2 py-2 rounded-md text-lg w-[100px]">
            <a href="/auth">
            Join Now
            </a>
              
          </div>
          </div>

        </div>


    </div>
  );
}

export default LandingPage;
