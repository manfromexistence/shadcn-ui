import {
  CardBody,
  CardWithCircleEllipsis,
} from "@/registry/default/ui/card-with-pattern"

export default function CardWithCircleEllipsis_Demo() {
  return (
    <div className="">
      <CardWithCircleEllipsis>
        <CardBody className="relative mx-auto rounded-lg px-6 py-10 shadow backdrop-blur-xl dark:bg-zinc-900/90" />
      </CardWithCircleEllipsis>
    </div>
  )
}
