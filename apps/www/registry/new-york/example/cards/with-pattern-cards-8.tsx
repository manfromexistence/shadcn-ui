import {
  CardBody,
  CardWithSquareX,
} from "@/registry/new-york/ui/card-with-pattern"

export default function CardWithSquareX_Demo() {
  return (
    <div className="flex items-center space-x-2">
      <CardWithSquareX>
        <CardBody className="relative mx-auto rounded-lg px-6 py-10 shadow backdrop-blur-xl dark:bg-zinc-900/90" />
      </CardWithSquareX>
    </div>
  )
}
