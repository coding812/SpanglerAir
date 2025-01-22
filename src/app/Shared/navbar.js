"use client";
export default function Navbar() {
  return (
    <div className="min-h-full">
      <nav className="bg-custom-blue mt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="shrink-0">
                <img className="h-24 w-auto lg:h-36 lg:mt-4  " src="snow_flame.png" alt="Your Company" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-3xl font-serif font-bold text-white" aria-current="page">Home</a>
                  <a href="#" className="rounded-md px-3 py-2 text-3xl font-serif font-bold text-white hover:bg-gray-700 hover:text-white">Team</a>
                  <a href="#" className="rounded-md px-3 py-2 text-3xl font-serif font-bold text-white hover:bg-gray-700 hover:text-white">Projects</a>
                  {/* <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a> */}
                  {/* <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Reports</a> */}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              
            </div>
            {/* <!-- Mobile menu button --> */}
            <div className="-mr-2 flex md:hidden">
              <button type="button" className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false" onClick={openMenu}>
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* <!-- Mobile menu button --> */}
          </div>
        </div>
      </nav>

      {/* <!-- Mobile menu, show/hide based on menu state --> */}
      <div className="md:hidden" id="mobile-menu" style={{ display: 'none' }}>
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
          {/* <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a> */}
          {/* <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Reports</a> */}
        </div>
      </div>

      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* <!-- Your content --> */}
        </div>
      </main>
    </div>
  );

  // function to open and close menu on mobile
  function openMenu() {
    var menu = document.getElementById("mobile-menu");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }
}