import Link from 'next/link';
import { FaSquareXTwitter, FaFacebookMessenger, FaGithub, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <footer className="px-6 py-4 text-gray-600 bg-gray-100 dark:bg-primary dark:text-white">
        <div className="grid items-center grid-cols-1 gap-6 px-4 py-10 mx-auto max-w-7xl md:grid-cols-2">
      
          <div className="flex flex-col items-center space-y-2 md:items-start">
            <h2 className="text-3xl font-bold dark:text-white">MediFlow AI</h2>
            <p className="text-sm text-center md:text-left">Empowering health through AI-driven solutions.</p>
          </div>

         
          <div className="flex flex-col items-center space-y-4">
         
            <div className="flex flex-wrap justify-center gap-4 font-semibold">
              <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
              <Link href="/cookie-policy" className="hover:underline">Cookie Policy</Link>
              <Link href="/contact" className="hover:underline">Contact Us</Link>
            </div>

         
            <div className="flex space-x-4 text-2xl font-semibold text-white">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="dark:hover:text-gray-800">
                <FaSquareXTwitter />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="dark:hover:text-gray-800">
                <FaFacebookMessenger />
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="dark:hover:text-gray-800">
                <FaGithub />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="dark:hover:text-gray-800">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>

        
        <div className="py-4 text-center border-t border-white cursor-pointer dark:border-white ">
          © {new Date().getFullYear()} <span className="font-semibold">MediFlow AI</span>. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
