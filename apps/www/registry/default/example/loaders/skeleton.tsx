import { Skeleton_v1, Skeleton_v2 } from '@/registry/default/ui/loaders/skeleton';

export function Skeleton_v1_Demo() {
  return (
    <div className="flex items-center space-x-2">
      <Skeleton_v1 />
    </div>
  )
}

export function Skeleton_v2_Demo() {
  return (
    <div className="flex items-center space-x-2">
      <Skeleton_v2 />
    </div>
  )
}