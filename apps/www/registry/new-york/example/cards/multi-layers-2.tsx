import {
  CardBody,
  MultilayerCardV_2,
} from "@/registry/new-york/ui/card-multi-layers"

export default function MultilayerCardV_2_Demo() {
  return (
    <div className="flex items-center space-x-2">
      <MultilayerCardV_2>
        <CardBody className="relative mx-auto rounded-lg px-6 py-10 shadow backdrop-blur-xl dark:bg-zinc-900/90" />
      </MultilayerCardV_2>
    </div>
  )
}