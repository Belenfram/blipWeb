//import Link from 'next/link';

/*export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <div className="text-white font-bold">
                <Link href="/">
                  NEXT JS
                </Link>
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  <Link href="/home">
                    Home
                  </Link>
                </div>
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  <Link href="/acerca">
                    Acerca de
                  </Link>
                </div>
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  <Link href="/contacto">
                    Contacto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}*/

/*export default function Navbar() {
    return (
      <nav className="bg-gray-800 fixed top-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <div className="text-white font-bold">
                  <Link href="/">
                    BLIP
                  </Link>
                </div>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Link href="/home">
                      Home
                    </Link>
                  </div>
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Link href="/acerca">
                      Acerca de
                    </Link>
                  </div>
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Link href="/contacto">
                      Contacto
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }*/

import Link from 'next/link';
import LogoutButton from './Signout';

export default function Navbar() {

  return (
    <nav className="bg-teal-600 fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <div className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  <Link href="/dashboard">
                    Paquetes
                  </Link>
                </div>
                <div className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  <Link href="/about">
                    Acerca de
                  </Link>
                </div>
                <div className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  <Link href="/contacto">
                    Multimedia
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Botón de cierre de sesión */}
          <div className="flex items-center">
            <LogoutButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

  
  
