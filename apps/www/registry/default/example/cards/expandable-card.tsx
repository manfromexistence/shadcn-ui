import { ExpandableCard } from "@/registry/default/ui/card-expandable"

export default function ExpandableCard_Demo() {
  return (
    <div className="flex items-center space-x-2">
      <ExpandableCard height="10rem" wide>
        <div className="prose-p:mt-0 text-sm/relaxed">
          <h4 className="my-2 text-lg font-bold">Default expandable card</h4>
          Lorem ipsum, consectetur adipiscing elit. Nullam pulvinar risus non
          risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
          porttitor quam. ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit
          amet hendrerit risus, sed porttitor quam. Magna exercitation
          reprehenderit magna cillum tempor amet aliquip ullamco.
        </div>
      </ExpandableCard>
      <br />
      <ExpandableCard height="10rem" wide>
        <div className="prose-p:mt-0 text-sm/relaxed">
          <h4 className="my-2 text-lg font-bold">
            Customize the height & button width
          </h4>
          Lorem ipsum, consectetur adipiscing elit. Nullam pulvinar risus non
          risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
          porttitor quam. ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit
          amet hendrerit risus, sed porttitor quam. Magna exercitation
          reprehenderit magna cillum tempor amet aliquip ullamco.
        </div>
      </ExpandableCard>
    </div>
  )
}
