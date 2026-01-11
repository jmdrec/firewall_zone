export default function CourseDetailLoading() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Skeleton */}
      <section className="relative py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container mx-auto px-4">
          {/* Breadcrumb Skeleton */}
          <div className="flex gap-2 mb-8">
            <div className="h-4 w-12 bg-card rounded animate-pulse"></div>
            <div className="h-4 w-4 bg-card rounded animate-pulse"></div>
            <div className="h-4 w-16 bg-card rounded animate-pulse"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content Skeleton */}
            <div className="space-y-6">
              <div className="flex gap-3">
                <div className="h-6 w-20 bg-primary/20 rounded-full animate-pulse"></div>
                <div className="h-6 w-16 bg-green-500/20 rounded-full animate-pulse"></div>
              </div>
              <div className="h-12 bg-card rounded-lg w-3/4 animate-pulse"></div>
              <div className="h-20 bg-card rounded-lg animate-pulse"></div>
              <div className="flex gap-4">
                <div className="h-10 w-28 bg-card rounded-lg animate-pulse"></div>
                <div className="h-10 w-28 bg-card rounded-lg animate-pulse"></div>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="h-14 w-36 bg-primary/30 rounded-lg animate-pulse"></div>
                <div className="h-14 w-36 bg-card rounded-lg animate-pulse"></div>
              </div>
            </div>

            {/* Right Image Skeleton */}
            <div className="hidden lg:block">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse"></div>
                <div className="p-6 space-y-4">
                  <div className="h-5 w-24 bg-border rounded animate-pulse"></div>
                  <div className="h-8 w-1/2 bg-border rounded animate-pulse"></div>
                  <div className="h-8 w-1/2 bg-border rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Skeleton */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Main Content Skeleton */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <div className="h-8 w-48 bg-card rounded animate-pulse"></div>
                <div className="bg-card border border-border rounded-xl p-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="h-5 bg-border rounded animate-pulse"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Skeleton */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-xl p-6 space-y-6">
                <div className="h-6 w-32 bg-border rounded animate-pulse"></div>
                <div className="space-y-4">
                  <div className="h-5 bg-border rounded animate-pulse"></div>
                  <div className="h-5 bg-border rounded animate-pulse"></div>
                </div>
                <div className="h-12 bg-primary/30 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
