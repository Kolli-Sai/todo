import { Skeleton } from "@nextui-org/skeleton";
import { Card } from "@nextui-org/card";
export default function Loading() {
  // Or a custom loading skeleton component
  const skeleton = (
    <>
      <Card className=" px-4 py-2 flex flex-col gap-4 rounded-xl">
        <Skeleton className=" rounded-xl w-4/5 h-8" />
        <Skeleton className=" rounded-xl w-3/5 h-4" />
      </Card>
    </>
  );

  const skeletons = Array.from({ length: 30 }, () => skeleton);
  return (
    <>
      <div className=" flex justify-end">
      <Skeleton className=" rounded-xl w-1/5 h-8" />
      </div>
      <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8 py-12">
        {skeletons}
      </div>
    </>
  );
}
