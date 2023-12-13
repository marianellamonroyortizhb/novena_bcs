function Footer() {
  return (
    <footer className="px-2 py-2">
      <div className="mx-auto">
        <hr className="border-gray-200 dark:border-gray-700 my-8" />
        <div className="flex flex flex-col md:flex-row items-center items-center justify-between">
          <span className="text-xs lg:text-sm text-white text-center dark:text-gray-400 pl-2">
            Copyright © 2023 Banco Caja Social
          </span>
          <div className="flex space-x-3 pr-2 mt-3">
            <a
              href="https://www.facebook.com/BancoCajaSocial"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <img src="/img/Facebook.svg" alt="Facebook" width={20} />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://twitter.com/bancocajasocial"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <img src="/img/Twitter.svg" alt="Twitter" width={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://www.youtube.com/@BancoCajaSocial"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <img src="/img/Youtube.svg" alt="Youtube" width={20} />
              <span className="sr-only">Youtube</span>
            </a>
            <a
              href="https://www.linkedin.com/company/banco-caja-social/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <img src="/img/Linkedin.svg" alt="Linkedin" width={20} />
              <span className="sr-only">Linkedin</span>
            </a>
            <a
              href="https://www.instagram.com/bancocajasocial/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <img src="/img/Instagram.svg" alt="Instagram" width={20} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
