import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[55vh] items-center justify-center bg-white py-24">
        <div className="container-narrow text-center">
          <p className="font-heading text-7xl font-bold text-orange">404</p>
          <h1 className="mt-4 text-3xl font-bold text-teal">
            Cette page est introuvable
          </h1>
          <p className="mx-auto mt-4 max-w-md text-ink/70">
            La page que vous recherchez n’existe pas ou a été déplacée.
          </p>
          <div className="mt-8">
            <Button href="/" variant="pink" size="lg">
              Retour à l’accueil
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
