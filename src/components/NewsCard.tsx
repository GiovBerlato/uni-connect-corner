import { Clock } from "lucide-react";
import CategoryBadge from "./CategoryBadge";
import { Card, CardContent } from "./ui/card";

type CategoryType = "sports" | "tech" | "wellness" | "culture" | "entertainment";

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: CategoryType;
  categoryLabel: string;
  readTime: string;
  date: string;
}

const NewsCard = ({
  title,
  excerpt,
  image,
  category,
  categoryLabel,
  readTime,
  date,
}: NewsCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-card" />
        <div className="absolute top-4 left-4">
          <CategoryBadge category={category} label={categoryLabel} />
        </div>
      </div>
      <CardContent className="p-6 space-y-3">
        <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3">{excerpt}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
          <span>{date}</span>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
