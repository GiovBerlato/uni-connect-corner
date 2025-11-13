import { Clock, Share2, BookmarkPlus } from "lucide-react";
import CategoryBadge from "./CategoryBadge";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";

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
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
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
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              setIsBookmarked(!isBookmarked);
            }}
            className="bg-background/80 hover:bg-background"
          >
            <BookmarkPlus
              className={`h-4 w-4 ${isBookmarked ? "fill-primary text-primary" : ""}`}
            />
          </Button>
        </div>
      </div>
      <CardContent className="p-6 space-y-3 flex-1 flex flex-col">
        <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3 flex-1">{excerpt}</p>
        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>{date}</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{readTime}</span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => e.stopPropagation()}
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
