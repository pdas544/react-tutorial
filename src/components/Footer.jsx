const Footer = () => {
  return (
    <footer className="p-2 bg-primary mt-4 text-white position-fixed bottom-0 start-0 end-0">
      <div className="container mx-auto text-center">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
       
      </div>
    </footer>
  );
}
export default Footer;