function Header() {
  return (
    <header className="px-2 py-2">
      <a href="https://www.bancocajasocial.com/">
        <img
          src="/img/LogoBCS.svg"
          alt="Logo Banco Caja Social"
          className="h-12 lg:h-14 text-center"
        />
      </a>
      <hr className="my-4 border-gray-200 mx-auto dark:border-gray-700" />
    </header>
  );
}

export default Header;
