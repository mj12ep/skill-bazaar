export function StarRating({
  rating,
  size = "md",
}: {
  rating: number;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className={`flex items-center gap-0.5 ${sizeClasses[size]}`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={`full-${i}`} className="star-filled">
          ★
        </span>
      ))}
      {hasHalf && <span className="star-filled opacity-60">★</span>}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <span key={`empty-${i}`} className="star-empty">
          ★
        </span>
      ))}
      <span className="text-surface-400 ml-1 font-medium">{rating}</span>
    </div>
  );
}
