import { Charts } from "@/registry/default/block/chart-01/components/chart"

export const description = "A collection of health charts."

export const iframeHeight = "900px"

export const containerClassName = "min-h-screen py-12"

export default function Page() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <Charts />
    </div>
  )
}
