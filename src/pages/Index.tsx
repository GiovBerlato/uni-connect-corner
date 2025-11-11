import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import newsSports from "@/assets/news-sports.jpg";
import newsTech from "@/assets/news-tech.jpg";
import newsWellness from "@/assets/news-wellness.jpg";
import newsCulture from "@/assets/news-culture.jpg";
import newsEntertainment from "@/assets/news-entertainment.jpg";

const Index = () => {
  const featuredNews = [
    {
      id: 1,
      title: "Campeonato Universitário de Basquete bate recorde de público",
      excerpt:
        "A competição entre as principais universidades atraiu mais de 5 mil espectadores na final, marcando um novo recorde histórico para o evento.",
      image: newsSports,
      category: "sports" as const,
      categoryLabel: "Esportes",
      readTime: "5 min",
      date: "15 Jan 2024",
    },
    {
      id: 2,
      title: "Laboratório de IA da universidade desenvolve sistema inovador",
      excerpt:
        "Estudantes criam inteligência artificial capaz de auxiliar no diagnóstico precoce de doenças, projeto recebe reconhecimento internacional.",
      image: newsTech,
      category: "tech" as const,
      categoryLabel: "Tecnologia",
      readTime: "7 min",
      date: "14 Jan 2024",
    },
    {
      id: 3,
      title: "Programa de bem-estar mental amplia atendimento no campus",
      excerpt:
        "Nova iniciativa oferece apoio psicológico gratuito e práticas de mindfulness para todos os estudantes, promovendo saúde mental.",
      image: newsWellness,
      category: "wellness" as const,
      categoryLabel: "Bem-estar",
      readTime: "4 min",
      date: "13 Jan 2024",
    },
    {
      id: 4,
      title: "Festival Cultural celebra diversidade com mais de 30 apresentações",
      excerpt:
        "Evento reúne estudantes de diferentes origens para compartilhar tradições através de música, dança e gastronomia.",
      image: newsCulture,
      category: "culture" as const,
      categoryLabel: "Cultura",
      readTime: "6 min",
      date: "12 Jan 2024",
    },
    {
      id: 5,
      title: "Cinema no Campus exibe filmes premiados gratuitamente",
      excerpt:
        "Projeto cultural traz obras cinematográficas aclamadas pela crítica para sessões abertas à comunidade universitária.",
      image: newsEntertainment,
      category: "entertainment" as const,
      categoryLabel: "Entretenimento",
      readTime: "3 min",
      date: "11 Jan 2024",
    },
    {
      id: 6,
      title: "Equipe feminina de futebol conquista título regional",
      excerpt:
        "Após temporada invicta, time universitário garante vaga em competição nacional e se torna referência no esporte feminino.",
      image: newsSports,
      category: "sports" as const,
      categoryLabel: "Esportes",
      readTime: "5 min",
      date: "10 Jan 2024",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Estudantes universitários colaborando"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="relative container h-full flex items-end pb-16">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Conectando estudantes ao mundo universitário
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Notícias, curiosidades e pesquisas que fazem parte da sua rotina acadêmica.
              Um espaço feito por estudantes e para estudantes.
            </p>
            <Button size="lg" className="gap-2 shadow-lg">
              Explorar Notícias
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <main className="flex-1">
        <section className="container py-16">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">Notícias em Destaque</h2>
              <p className="text-muted-foreground">
                Fique por dentro das últimas novidades do mundo universitário
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredNews.map((news) => (
                <NewsCard key={news.id} {...news} />
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-muted/30 py-16">
          <div className="container">
            <div className="space-y-8">
              <div className="text-center space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold">Explore por Categoria</h2>
                <p className="text-muted-foreground">
                  Encontre conteúdo sobre os temas que mais interessam você
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { name: "Esportes", color: "sports" as const, href: "#esportes" },
                  { name: "Tecnologia", color: "tech" as const, href: "#tecnologia" },
                  { name: "Bem-estar", color: "wellness" as const, href: "#bem-estar" },
                  { name: "Cultura", color: "culture" as const, href: "#cultura" },
                  { name: "Entretenimento", color: "entertainment" as const, href: "#entretenimento" },
                ].map((category) => (
                  <a
                    key={category.name}
                    href={category.href}
                    className="group"
                  >
                    <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
