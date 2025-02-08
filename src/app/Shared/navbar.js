"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [opacity, setOpacity] = useState(0.85);

  const openMenu = () => {
      setMenuOpen(!menuOpen);
    };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.min(0.85 + scrollY / 500, 1);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex">
        <div  className="absolute  top-9 right-8 z-50 hidden md:block   ml-auto mr-2"> 
          <button className="  inline-flex items-center justify-center border align-middle select-none text-center duration-300 ease-in disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none py-2 px-4 shadow-sm hover:shadow-md bg-gradient-to-b from-red-600 to-red-700 hover:from-red-400 hover:to-red-500 border-stone-900 text-white text-xl font-serif font-bold rounded-full transition antialiased" >
            Call us!
          </button>
        </div>
      <nav className="" >
          
        <div className=" mx-auto max-w-8xl px-4 md:px-20">
          <div style={{opacity: opacity}} className="flex h-12 md:h-14 items-center justify-between bg-custom-blue mt-6 md:mt-8 fixed top-0 left-0 w-full z-40 transition-opacity duration-700 ">
            <div  className="flex items-center ">
              <div className="shrink-0 ">
                <img className="h-24 w-auto lg:h-36 lg:mt-4" style={{ opacity: 1 }} src="snow_flame.png" alt="Spangler Air" />
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-4">
                  <a href="/" className={`rounded-md px-3 py-2 text-3xl font-serif font-bold ${pathname === "/" ? "bg-gray-900 text-white" : "text-white hover:bg-gray-700 hover:text-white"}`} aria-current="page">Home</a>
                  <a href="About-Us" className={`rounded-md px-3 py-2 text-3xl font-serif font-bold ${pathname === "/About-Us" ? "bg-gray-900 text-white" : "text-white hover:bg-gray-700 hover:text-white"}`}>About Us</a>
                </div>
              </div>
            </div>

            

            <div className="mr-2 flex md:hidden">
              <button type="button" className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded={menuOpen} onClick={openMenu}>
                <svg className={`${menuOpen ? "hidden" : "block"} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <svg className={`${menuOpen ? "block" : "hidden"} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`fixed mt-2 p-3 md:hidden bg-custom-blue top-16 left-0 w-full z-40 transition-opacity duration-700 ${menuOpen ? "block" : "hidden"}`} style={{opacity: opacity}} id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <a href="/" className="block rounded-md px-3 py-2 font-medium text-lg text-white" aria-current="page">Home</a>
          <a href="About-Us" className="block rounded-md px-3 py-2 font-medium text-lg text-white hover:bg-gray-700 hover:text-white">About Us</a>
          <div>
            <button style={{ opacity: 1 }} className="inline-flex items-center justify-center border align-middle select-none text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none py-2 px-4 shadow-sm hover:shadow-md bg-gradient-to-b from-red-600 to-red-700 hover:from-red-400 hover:to-red-500 relative border-stone-900 text-white text-xl font-serif font-bold rounded-full transition antialiased" style={{ opacity: 1 }}>
              Call us!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
