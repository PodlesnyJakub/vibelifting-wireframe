import { ThemeToggle } from '../ThemeToggle';

export function Footer() {
  return (
    <footer>
      <div className="container">
        <p>© 2025 Vibelifting.ai</p>
        <p style={{ marginTop: '12px' }}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </p>
        <ThemeToggle />
      </div>
    </footer>
  );
}
