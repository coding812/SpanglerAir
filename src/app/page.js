import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-full mt-24 flex flex-col items-center">
      <div className="flex flex-wrap justify-around w-full ">
        <img className="md:size-48 size-14" src="https://cdn.brandfetch.io/idI1kCuhvm/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="Trane Logo" />
        <img className="md:size-48 size-16" src="https://cdn.brandfetch.io/idgXitrRRN/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="Carrier Logo" />
        <img className="md:size-28 size-16 md:mt-4" src="https://cdn.brandfetch.io/idrRdCkUTa/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="Rheem Logo" />
        <img className="md:size-48 size-16" src="https://cdn.brandfetch.io/idLdEHyq7J/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="American Standard Logo" />
        <img className="md:size-48 size-16" src="https://cdn.brandfetch.io/id6Y58thif/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="Lennox Logo" />
        <img className="md:size-48 size-16" src="https://cdn.brandfetch.io/id88hr4ntD/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="Goodman Logo" />
        <img className="md:size-48 size-16" src="https://cdn.brandfetch.io/id0LLXtLoM/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="Daikin Logo" />
        <img className="md:w-48 md:h-20 w-20 h-12 md:mt-12" src="https://images.carriercms.com/image/upload/h_200,q_auto,f_auto/v1565698634/icp/icpusa/icons/icp-logo-white.png" alt="ICP International Comfort Products Logo" />
      </div>
      <div className='md:text-3xl flex mt-4 mb-4 justify-center text-lg '>
        <div className='inline-block w-3/4 text-white rounded-xl bg-custom-blue/55 '>
          <p className='indent-20'>Installing and servicing all makes and models in thousands of homes in the St. Petersburg area, we are the go-to choice for all your Heating, Cooling, and Indoor Air Quality needs.</p>
          <p className='indent-20 p-4'>With an emphasis on maintaining and servicing equipment, as opposed to just replacing when they ultimately fail from often preventable issues, we can help you save money and extend the life of your equipment.</p>
          <p className='indent-20 p-4'>We have found that making this philosophy of maintaining your system our policy, we have managed to maintain better, longer-lasting customer relationships in an age where such things are often only transactional and temporary.</p>
          <p className='indent-20 p-4'>Call us today, schedule your first maintenance, and learn why we are striving to be the change we want to see in the heating and air conditioning industry in the greater Tampa Bay Area.</p>
        </div>
      </div>
        <div className="flex justify-center ">
          <a href="tel:727-481-0000" >
            <button  className="md:hidden inline-flex items-center justify-center border align-middle select-none text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none py-2 px-4 md:py-4 md:px-8 shadow-sm hover:shadow-md bg-gradient-to-b from-red-600 to-red-700 hover:from-red-400 hover:to-red-500 relative border-stone-900 text-white text-xl md:text-2xl font-serif font-bold rounded-full transition antialiased">
              Call us Today!
            </button>
          </a>
          <button  className="hidden md:inline-flex items-center justify-center border align-middle select-none text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none py-2 px-4 md:py-4 md:px-8 shadow-sm hover:shadow-md bg-gradient-to-b from-red-600 to-red-700 hover:from-red-400 hover:to-red-500 relative border-stone-900 text-white text-xl md:text-2xl font-serif font-bold rounded-full transition antialiased">
            Call us Today! 727-481-0000
          </button>
        </div>
    </div>
  );
}
