
export function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-background border-t">
        <div className="container mx-auto py-8 px-4 md:px-6 text-center text-sm text-muted-foreground">
            <p>Copyright {currentYear} | All rights reserved | Cybas Commercial Pvt Ltd.</p>
        </div>
      </footer>
    );
  }
