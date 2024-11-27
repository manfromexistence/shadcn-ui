import {
  CardBody,
  CardWithEllipsis,
} from "@/registry/default/ui/card-with-pattern"

export default function CardWithEllipsis_Demo() {
  return (
    <div className="flex items-center space-x-2">
      <CardWithEllipsis>
        <CardBody className="relative mx-auto rounded-lg px-6 py-10 shadow backdrop-blur-xl dark:bg-zinc-900/90" />
      </CardWithEllipsis>
    </div>
  )
}
