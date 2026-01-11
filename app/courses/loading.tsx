export default function CoursesLoading() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Skeleton */}
      <section className="relative py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="h-12 bg-card rounded-lg w-2/3 mx-auto animate-pulse"></div>
            <div className="h-6 bg-card rounded-lg w-1/2 mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Filter Skeleton */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="h-14 bg-card rounded-lg animate-pulse"></div>
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-10 w-20 bg-card rounded-lg animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid Skeleton */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse"></div>
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-border rounded animate-pulse"></div>
                  <div className="h-4 bg-border rounded w-3/4 animate-pulse"></div>
                  <div className="flex gap-4">
                    <div className="h-4 w-20 bg-border rounded animate-pulse"></div>
                    <div className="h-4 w-16 bg-border rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
