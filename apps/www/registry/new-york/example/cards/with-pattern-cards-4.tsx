import {
    CardBody,
    CardWithGridEllipsis,
} from "@/registry/new-york/ui/card-with-pattern"

export default function CardWithGridEllipsis_Demo() {
    return (
        <div className="flex items-center space-x-2">
            <CardWithGridEllipsis>
                <CardBody className="relative mx-auto rounded-lg px-6 py-10 shadow backdrop-blur-xl dark:bg-zinc-900/90" />
            </CardWithGridEllipsis>
        </div>
    )
}