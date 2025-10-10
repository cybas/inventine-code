export function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-background border-t">
        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-1">
                  <h3 className="font-bold text-lg font-headline">Inventive Code</h3>
                  <p className="text-sm text-muted-foreground mt-2 max-w-xs">
                      AI, e-commerce, and integration workflows that actually ship.
                  </p>
              </div>
              <div className="text-sm text-muted-foreground">
                  <h4 className="font-semibold text-foreground mb-2">Contact</h4>
                  <a href="mailto:info@inventivecode.com" className="block hover:text-primary">info@inventivecode.com</a>
                  <a href="tel:+919052134853" className="block mt-1 hover:text-primary">+91 90521 34853</a>
              </div>
              <div className="text-sm text-muted-foreground">
                  <h4 className="font-semibold text-foreground mb-2">Address</h4>
                  <address className="not-italic">
                    10-1-13/2, Asilmetta<br/>
                    Visakhapatnam – 530003<br/>
                    Andhra Pradesh, India
                  </address>
              </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {currentYear} Cybas Commercial Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  