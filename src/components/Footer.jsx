const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white py-6 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </p>
      <p className="mt-1">
        Made with ❤️ and <span style={{ color: "tomato" }}>Tomato</span> theme
      </p>
    </footer>
  );
};

export default Footer;
