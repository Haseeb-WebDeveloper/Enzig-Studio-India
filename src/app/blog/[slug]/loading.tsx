export default function Loading() {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 animate-pulse">
        {/* Breadcrumb skeleton */}
        <div className="flex items-center gap-2 text-sm py-3 border-b border-gray-100">
          <div className="h-4 w-10 bg-muted rounded" />
          <span className="text-gray-400">/</span>
          <div className="h-4 w-10 bg-muted rounded" />
          <span className="text-gray-400">/</span>
          <div className="h-4 w-32 bg-muted rounded" />
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          <div className="lg:col-span-8 space-y-4">
            {/* Main image skeleton with overlaid category and title */}
            <div className="relative h-[400px] w-full overflow-hidden bg-muted rounded-lg">
              {/* Category tag skeleton */}
              <div className="absolute top-4 left-4">
                <div className="h-6 w-28 bg-muted/30 backdrop-blur-sm rounded" />
              </div>
              {/* Title skeleton */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="h-10 w-3/4 bg-white/20 rounded mb-2" />
                <div className="h-10 w-1/2 bg-white/20 rounded" />
              </div>
            </div>
  
            {/* Author info skeleton */}
            <div className="flex items-center py-3 px-4 gap-4 border border-background/[0.05] rounded-lg">
              <div className="h-12 w-12 rounded-[29%] bg-muted" />
              <div className="space-y-2">
                <div className="h-4 w-32 bg-muted rounded" />
                <div className="h-3 w-24 bg-muted rounded" />
              </div>
            </div>
  
            {/* Updated date skeleton */}
            <div>
              <div className="h-4 w-40 bg-muted rounded" />
            </div>
  
            {/* Content skeleton */}
            <div className="mt-8 space-y-6">
              {[...Array(6)].map((_, i) => (
                <div key={`p-${i}`} className="space-y-2">
                  <div className="h-4 w-full bg-muted rounded" />
                  <div className="h-4 w-11/12 bg-muted rounded" />
                  <div className="h-4 w-5/6 bg-muted rounded" />
                  <div className="h-4 w-4/5 bg-muted rounded" />
                </div>
              ))}
  
              {/* Image skeleton */}
              <div className="h-[300px] w-full bg-muted rounded-lg my-8" />
  
              {[...Array(3)].map((_, i) => (
                <div key={`p2-${i}`} className="space-y-2">
                  <div className="h-4 w-full bg-muted rounded" />
                  <div className="h-4 w-11/12 bg-muted rounded" />
                  <div className="h-4 w-4/5 bg-muted rounded" />
                </div>
              ))}
            </div>
  
            {/* FAQ skeleton */}
            <div className="mt-12">
              <div className="h-6 w-64 bg-muted rounded mb-6" />
              <div className="space-y-6">
                {[...Array(2)].map((_, i) => (
                  <div key={`faq-${i}`} className="bg-gray-50 p-6 rounded-lg">
                    <div className="h-5 w-3/4 bg-muted rounded mb-4" />
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-muted rounded" />
                      <div className="h-4 w-11/12 bg-muted rounded" />
                      <div className="h-4 w-4/5 bg-muted rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* Sidebar skeleton */}
          <div className="lg:col-span-4">
            {/* Author box skeleton */}
            <div className="bg-primary p-4 rounded-lg mb-8">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-[20%] bg-muted/30" />
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-muted/30 rounded" />
                  <div className="h-3 w-24 bg-muted/30 rounded" />
                  <div className="h-3 w-40 bg-muted/30 rounded" />
                </div>
              </div>
            </div>
  
            {/* CTA box skeleton */}
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
              <div className="h-6 w-full bg-muted rounded mb-3" />
              <div className="h-4 w-11/12 bg-muted rounded mb-2" />
              <div className="h-4 w-10/12 bg-muted rounded mb-4" />
              <div className="h-10 w-28 bg-muted rounded" />
            </div>
  
            {/* Related posts skeleton */}
            <div className="bg-white border border-gray-100 rounded-lg p-6">
              <div className="h-5 w-32 bg-muted rounded mb-4" />
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={`related-${i}`} className="flex gap-3 items-center">
                    <div className="h-16 w-16 bg-muted rounded flex-shrink-0" />
                    <div className="h-4 w-full bg-muted rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }