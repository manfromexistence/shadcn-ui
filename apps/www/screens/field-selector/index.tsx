import React from 'react'

import { fieldTypes } from '@/constants'
import { Button } from '@/components/ui/button'
import If from '@/components/ui/if'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

type FieldSelectorProps = {
  addFormField: (variant: string, index?: number) => void
}

export const FieldSelector: React.FC<FieldSelectorProps> = ({
  addFormField,
}) => {
  return (
    <div className="flex h-[70vh] flex-wrap items-start gap-3 overflow-y-auto md:flex-col md:flex-nowrap">
      {fieldTypes.map((variant) => (
        <div className="flex items-center gap-1" key={variant.name}>
          <Button
            key={variant.name}
            variant="outline"
            onClick={() => addFormField(variant.name, variant.index)}
            className="rounded-full"
            size="sm"
          >
            {variant.name}
            <If
              condition={variant.isNew}
              render={() => (
                <Badge variant={'new'} className='ml-1 p-1 text-[10px] md:hidden'>
                  New
                </Badge>
              )}
            />
          </Button>
          <If
            condition={variant.isNew}
            render={() => (
              <Badge variant={'new'} className='ml-1 hidden p-1 text-[10px] md:block'>
                New
              </Badge>
            )}
          />
        </div>
      ))}
      <Link href="https://shadcnform.featurebase.app/" target="_blank">
        <Button className="rounded-full" size="sm">
          Request
        </Button>
      </Link>
    </div>
  )
}
