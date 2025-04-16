export default function Loading() {
  return (
    <article className="max-w-4xl mx-auto animate-pulse">
      <div className="space-y-4 text-center">
        <div className="h-6 w-32 bg-muted rounded-lg mx-auto" />
        <div className="h-12 w-2/3 bg-muted rounded-lg mx-auto" />
        <div className="h-6 w-1/2 bg-muted rounded-lg mx-auto" />
      </div>

      <div className="flex items-center gap-4 justify-center mt-8">
        <div className="h-12 w-12 rounded-full bg-muted" />
        <div className="space-y-2">
          <div className="h-4 w-32 bg-muted rounded-lg" />
          <div className="h-3 w-24 bg-muted rounded-lg" />
        </div>
      </div>

      <div className="h-[400px] md:h-[500px] w-full mt-8 rounded-xl bg-muted" />

      <div className="mt-12 space-y-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 w-full bg-muted rounded-lg" />
            <div className="h-4 w-5/6 bg-muted rounded-lg" />
            <div className="h-4 w-4/6 bg-muted rounded-lg" />
          </div>
        ))}
      </div>
    </article>
  );
} 