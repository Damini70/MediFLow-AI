import Link from 'next/link';
import { FaSquareXTwitter, FaFacebookMessenger, FaGithub, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 px-6 py-4">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">MediFlow AI</h2>
            <p className="text-sm text-center md:text-left">Empowering health through AI-driven solutions.</p>
          </div>

         
          <div className="flex flex-col items-center space-y-4">
         
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
              <Link href="/cookie-policy" className="hover:underline">Cookie Policy</Link>
              <Link href="/contact" className="hover:underline">Contact Us</Link>
            </div>

         
            <div className="flex space-x-4 text-2xl text-gray-500">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-white">
                <FaSquareXTwitter />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-white">
                <FaFacebookMessenger />
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-white">
                <FaGithub />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-white">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-200 dark:border-gray-700 py-4 text-center cursor-pointer ">
          © {new Date().getFullYear()} <span className="font-semibold">MediFlow AI</span>. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
