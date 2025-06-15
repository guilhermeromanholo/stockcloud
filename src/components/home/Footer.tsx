export function Footer() {
  return (
      <footer className="bg-accent-foreground flex flex-col items-center p-5">
        <p className="text-accent">&copy; 2025 StockCloud. Todos os direitos reservados.</p>
        <div>
          <a href="#" className="text-accent underline mx-2">Privacidade</a>
          <a href="#" className="text-accent underline mx-2">Termos</a>
        </div>
      </footer>
  );
}