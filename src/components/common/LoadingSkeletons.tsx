import { Card, Skeleton } from "@heroui/react";

export function CompactCardSkeleton() {
  return (
    <Card className="theme-card overflow-hidden rounded-2xl border border-slate-200 p-0">
      <Skeleton className="aspect-[4/3] w-full rounded-none" />
      <Card.Content className="space-y-2 p-3">
        <Skeleton className="h-3 w-16 rounded-full" />
        <Skeleton className="h-4 w-4/5 rounded-full" />
        <Skeleton className="h-3 w-3/5 rounded-full" />
      </Card.Content>
    </Card>
  );
}

export function DealCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <Skeleton className="aspect-[4/5] min-h-[200px] w-full rounded-none sm:min-h-[220px] md:aspect-[4/3] md:min-h-[230px]" />
    </div>
  );
}

export function UnifiedResultSkeleton() {
  return (
    <Card className="theme-card overflow-hidden rounded-xl border border-slate-200 p-0 shadow-sm">
      <Skeleton className="h-48 w-full rounded-none" />
      <Card.Content className="space-y-2 p-4">
        <Skeleton className="h-3 w-24 rounded-full" />
        <Skeleton className="h-5 w-4/5 rounded-full" />
        <Skeleton className="h-3 w-3/5 rounded-full" />
        <Skeleton className="h-10 w-full rounded-lg" />
      </Card.Content>
    </Card>
  );
}
