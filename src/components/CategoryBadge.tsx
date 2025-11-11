import { cn } from "@/lib/utils";

type CategoryType = "sports" | "tech" | "wellness" | "culture" | "entertainment";

interface CategoryBadgeProps {
  category: CategoryType;
  label: string;
  className?: string;
}

const CategoryBadge = ({ category, label, className }: CategoryBadgeProps) => {
  const categoryColors = {
    sports: "bg-category-sports/10 text-category-sports border-category-sports/20",
    tech: "bg-category-tech/10 text-category-tech border-category-tech/20",
    wellness: "bg-category-wellness/10 text-category-wellness border-category-wellness/20",
    culture: "bg-category-culture/10 text-category-culture border-category-culture/20",
    entertainment: "bg-category-entertainment/10 text-category-entertainment border-category-entertainment/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
        categoryColors[category],
        className
      )}
    >
      {label}
    </span>
  );
};

export default CategoryBadge;
