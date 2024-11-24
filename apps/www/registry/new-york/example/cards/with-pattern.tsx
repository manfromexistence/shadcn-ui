import {
  CardBody,
  CardWithCircleEllipsis,
  CardWithEllipsis,
  CardWithGrid,
  CardWithGridEllipsis,
  CardWithLines,
  CardWithNoise,
  CardWithPlus,
  CardWithSquareX,
} from "@/registry/default/ui/card-with-pattern"

export function CardWithCircleEllipsis_Demo() {
  return (
    <div className="flex items-center space-x-2">
      <CardWithCircleEllipsis>
        <CardBody className="relative mx-auto rounded-lg px-6 py-10 shadow backdrop-blur-xl dark:bg-zinc-900/90" />
      </CardWithCircleEllipsis>
    </div>
  )
}

export function CardWithEllipsis_Demo() {
  return (
    <div className="flex items-center space-x-2">
      <CardWithEllipsis>
        <CardBody className="relative mx-auto rounded-lg px-6 py-10 shadow backdrop-blur-xl dark:bg-zinc-900/90" />
      </CardWithEllipsis>
    </div>
  )
}

export function CardWithGrid_Demo() {
  return (
    <div className="flex items-center space-x-2">
      <CardWithGrid>
        <CardBody className="relative mx-auto rounded-lg px-6 py-10 shadow backdrop-blur-xl dark:bg-zinc-900/90" />
      </CardWithGrid>
    </div>
  )
}

export function CardWithGridEllipsis_Demo() {
  return (
    <div className="flex items-center space-x-2">
      <CardWithGridEllipsis>
        <CardBody className="relative mx-auto rounded-lg px-6 py-10 shadow backdrop-blur-xl dark:bg-zinc-900/90" />
      </CardWithGridEllipsis>
    </div>
  )
}

export function CardWithLines_Demo() {
  return (
    <div className="flex items-center space-x-2">
      <CardWithLines>
        <CardBody className="relative mx-auto rounded-lg px-6 py-10 shadow backdrop-blur-xl dark:bg-zinc-900/90" />
      </CardWithLines>
    </div>
  )
}

export function CardWithPlus_Demo() {
  return (
    <div className="flex items-center space-x-2">
      <CardWithPlus>
        <CardBody className="relative mx-auto rounded-lg px-6 py-10 shadow backdrop-blur-xl dark:bg-zinc-900/90" />
      </CardWithPlus>
    </div>
  )
}

export function CardWithSquareX_Demo() {
  return (
    <div className="flex items-center space-x-2">
      <CardWithSquareX>
        <CardBody className="relative mx-auto rounded-lg px-6 py-10 shadow backdrop-blur-xl dark:bg-zinc-900/90" />
      </CardWithSquareX>
    </div>
  )
}

export function CardWithNoise_Demo() {
  return (
    <div className="flex items-center space-x-2">
      <CardWithNoise>
        <CardBody className="relative mx-auto rounded-lg px-6 py-10 shadow backdrop-blur-xl dark:bg-zinc-900/90" />
      </CardWithNoise>
    </div>
  )
}
