/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IpFR5diuTVt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Contact from "@/components/ui/contact/contact"
import Image from "next/image"



export default function Component() {
  return (
    <>
      <header className="flex justify-between px-6 py-4 bg-gray-900 text-white dark:bg-gray-800">
        
        <div className="flex items-center logo">
        <Link className="flex items-center gap-2" href="#">
          <DatabaseIcon className="h-8 w-8" />
          <span className="text-xl font-bold">Okayo import</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link className="hover:text-gray-300 dark:hover:text-gray-400" href="#solutions">
            Solutions
          </Link>
          <Link className="hover:text-gray-300 dark:hover:text-gray-400" href="#about">
            À propos
          </Link>
          <Link className="hover:text-gray-300 dark:hover:text-gray-400" href="#contact">
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden burger " size="sm" variant="outline">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-6 bg-gray-900 text-white dark:bg-gray-800" side="right">
            <div className="flex flex-col space-y-4">
              <Link className="hover:text-gray-300 dark:hover:text-gray-400" href="#solutions">
                Solutions
              </Link>
              <Link className="hover:text-gray-300 dark:hover:text-gray-400" href="#about">
                À propos
              </Link>
              <Link className="hover:text-gray-300 dark:hover:text-gray-400" href="#contact">
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    
      <section  className="bg-gray-100 dark:bg-gray-800  topo">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-50">
                  Solutions de stockage fiables
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Approuvées par des entreprises de toutes tailles, nos solutions de stockage, de sauvegarde et
                  d&apos;archivage garantissent la sécurité et l&apos;accessibilité de vos données.
                </p>
                <div className="flex space-x-4">
                <Link href="#contact">
                  <Button variant="outline">Contactez-nous</Button>
                  </Link>
                </div>
              </div>
              <div>
                <Image
                  alt="Solutions de stockage"
                  className="rounded-lg"
                  height={400}
                  src="/solutiondestockage.jpg"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="solutions" className="py-12 md:py-20 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-gray-50">Nos solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white dark:bg-gray-700 dark:text-gray-50">
                <CardHeader>
                  <DatabaseIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Stockage de données</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Solutions de stockage de données sécurisées et évolutives pour votre entreprise.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-700 dark:text-gray-50">
                <CardHeader>
                  <DatabaseBackupIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Sauvegarde de données</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Solutions de sauvegarde fiables et automatisées pour protéger vos données.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-700 dark:text-gray-50">
                <CardHeader>
                  <ArchiveIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Archivage de données</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Archivage de données à long terme pour les besoins de conformité et de réglementation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  alt="À propos de Solutions de stockage"
                  className="rounded-lg"
                  height={400}
                  src="/about.jpg"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width={600}
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-50">
                  À propos de Okayo import
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                Okayo import est un fournisseur leader de solutions de stockage, de sauvegarde et d&apos;archivage
                    de données. Avec plus de 15 ans d&apos;expérience, nous avons aidé des entreprises de toutes tailles à
                    sécuriser et à gérer leurs données critiques.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Notre équipe d&apos;experts travaille en étroite collaboration avec nos clients pour comprendre leurs
                    besoins uniques et leur fournir des solutions sur mesure. Nous nous engageons à offrir des services
                    fiables et rentables qui aident nos clients à se concentrer sur leur activité principale.
                </p>
               
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-12 md:py-20 dark:bg-gray-800">
       
          
             <Contact />
           
        
        </section>
     
      <footer className="bg-gray-900 dark:bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <DatabaseIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Okayo import</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link className="hover:text-gray-300 dark:hover:text-gray-400" href="#solutions">
              Solutions
            </Link>
            <Link className="hover:text-gray-300 dark:hover:text-gray-400" href="#about">
              À propos
            </Link>
            <Link className="hover:text-gray-300 dark:hover:text-gray-400" href="#contact">
              Contact
            </Link>
          </nav>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 Okayo import. Tous droits réservés.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
          8 BOULEVARD ROY
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
          93320 LES PAVILLONS-SOUS-BOIS 
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
          contact@okayo-import.fr
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
          01 84 21 09 79
          </p>
        </div>
      </footer>
    </>
  )
}

function ArchiveIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="5" x="2" y="3" rx="1" />
      <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
      <path d="M10 12h4" />
    </svg>
  )
}


function DatabaseBackupIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 12a9 3 0 0 0 5 2.69" />
      <path d="M21 9.3V5" />
      <path d="M3 5v14a9 3 0 0 0 6.47 2.88" />
      <path d="M12 12v4h4" />
      <path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" />
    </svg>
  )
}


function DatabaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}