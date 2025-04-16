export default function Loading() {
    return (
      <div className="space-y-12 animate-pulse">
        {/* Leading Post Skeleton */}
        <div className="relative h-[600px] rounded-2xl overflow-hidden bg-muted">
          <div className="absolute bottom-8 left-8 right-8 bg-card p-8 rounded-xl border border-border">
            <div className="space-y-4">
              <div className="h-6 w-32 bg-muted rounded-lg" />
              <div className="h-12 w-2/3 bg-muted rounded-lg" />
              <div className="h-6 w-1/2 bg-muted rounded-lg" />
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-muted" />
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-muted rounded-lg" />
                  <div className="h-3 w-24 bg-muted rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Category Tabs Skeleton */}
        <div className="flex flex-wrap gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-10 w-24 bg-muted rounded-lg"
            />
          ))}
        </div>
  
        {/* Posts Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-card rounded-lg overflow-hidden border border-border"
            >
              <div className="h-48 w-full bg-muted" />
              <div className="p-6 space-y-4">
                <div className="h-4 w-24 bg-muted rounded-lg" />
                <div className="h-6 w-full bg-muted rounded-lg" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-muted rounded-lg" />
                  <div className="h-4 w-5/6 bg-muted rounded-lg" />
                  <div className="h-4 w-4/6 bg-muted rounded-lg" />
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="h-10 w-10 rounded-full bg-muted" />
                  <div className="space-y-2">
                    <div className="h-4 w-32 bg-muted rounded-lg" />
                    <div className="h-3 w-24 bg-muted rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } 