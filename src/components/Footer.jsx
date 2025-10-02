const Footer = () => {
  return (
    <footer class="p-2 bg-primary mt-4 text-white position-fixed bottom-0 start-0 end-0">
      <div class="container mx-auto text-center">
        <p class="mb-2">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
       
      </div>
    </footer>
  );
}
export default Footer;