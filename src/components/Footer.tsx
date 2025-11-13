import { Newspaper, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Newspaper className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Conecta Uni
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Conectando estudantes ao mundo universitário através da informação.
              Um espaço feito por estudantes e para estudantes.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Mail className="h-4 w-4" />
                Contato
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Categorias</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#esportes" className="hover:text-foreground transition-colors">
                  ⚽ Esportes
                </a>
              </li>
              <li>
                <a href="#tecnologia" className="hover:text-foreground transition-colors">
                  💻 Tecnologia
                </a>
              </li>
              <li>
                <a href="#bem-estar" className="hover:text-foreground transition-colors">
                  🧘 Bem-estar
                </a>
              </li>
              <li>
                <a href="#cultura" className="hover:text-foreground transition-colors">
                  🎭 Cultura
                </a>
              </li>
              <li>
                <a href="#entretenimento" className="hover:text-foreground transition-colors">
                  🎬 Entretenimento
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Informações</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#sobre" className="hover:text-foreground transition-colors">
                  Sobre o Projeto
                </a>
              </li>
              <li>
                <a href="#privacidade" className="hover:text-foreground transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#termos" className="hover:text-foreground transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Receba as melhores notícias diretamente no seu email.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="seu@email.com"
                className="px-3 py-2 rounded-md border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="sm" className="w-full">
                Inscrever
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Conecta Uni. Projeto acadêmico desenvolvido com dedicação.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
