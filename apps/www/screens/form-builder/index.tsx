'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Link } from 'next-view-transitions'

import { FormFieldType } from '@/types'
import { defaultFieldConfig } from '@/constants'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Separator } from '@/components/ui/separator'
import If from '@/components/ui/if'
import SpecialComponentsNotice from '@/components/playground/special-component-notice'
import { FieldSelector } from '@/screens/field-selector'
import { FormFieldList } from '@/screens/form-field-list'
import { FormPreview } from '@/screens/form-preview'
import { EditFieldDialog } from '@/screens/edit-field-dialog'

import EmptyListImage from '@/assets/oc-thinking.png'

export type FormFieldOrGroup = FormFieldType | FormFieldType[]

export default function FormBuilder() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const [formFields, setFormFields] = useState<FormFieldOrGroup[]>([])
  const [selectedField, setSelectedField] = useState<FormFieldType | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const addFormField = (variant: string, index: number) => {
    const newFieldName = `name_${Math.random().toString().slice(-10)}`

    const { label, description, placeholder } = defaultFieldConfig[variant] || {
      label: '',
      description: '',
      placeholder: '',
    }

    const newField: FormFieldType = {
      checked: true,
      description: description || '',
      disabled: false,
      label: label || newFieldName,
      name: newFieldName,
      onChange: () => { },
      onSelect: () => { },
      placeholder: placeholder || 'Placeholder',
      required: true,
      rowIndex: index,
      setValue: () => { },
      type: '',
      value: '',
      variant,
    }
    setFormFields([...formFields, newField])
  }

  const findFieldPath = (
    fields: FormFieldOrGroup[],
    name: string,
  ): number[] | null => {
    const search = (
      currentFields: FormFieldOrGroup[],
      currentPath: number[],
    ): number[] | null => {
      for (let i = 0; i < currentFields.length; i++) {
        const field = currentFields[i]
        if (Array.isArray(field)) {
          const result = search(field, [...currentPath, i])
          if (result) return result
        } else if (field.name === name) {
          return [...currentPath, i]
        }
      }
      return null
    }
    return search(fields, [])
  }

  const updateFormField = (path: number[], updates: Partial<FormFieldType>) => {
    const updatedFields = JSON.parse(JSON.stringify(formFields)) // Deep clone
    let current: any = updatedFields
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]]
    }
    current[path[path.length - 1]] = {
      ...current[path[path.length - 1]],
      ...updates,
    }
    setFormFields(updatedFields)
  }

  const openEditDialog = (field: FormFieldType) => {
    setSelectedField(field)
    setIsDialogOpen(true)
  }

  const handleSaveField = (updatedField: FormFieldType) => {
    if (selectedField) {
      const path = findFieldPath(formFields, selectedField.name)
      if (path) {
        updateFormField(path, updatedField)
      }
    }
    setIsDialogOpen(false)
  }

  const FieldSelectorWithSeparator = ({
    addFormField,
  }: {
    addFormField: (variant: string, index?: number) => void
  }) => (
    <div className="flex flex-col gap-3 md:flex-row">
      <FieldSelector addFormField={addFormField} />
      <Separator orientation={isDesktop ? 'vertical' : 'horizontal'} />
    </div>
  )

  return (
    <section className="space-y-8 pt-4 md:max-h-screen">
      <If
        condition={formFields.length > 0}
        render={() => (
          <div className="grid h-full grid-cols-1 items-start gap-8 md:grid-cols-2 md:px-5">
            <div className="flex flex-col">
              <FieldSelectorWithSeparator
                addFormField={(variant: string, index: number = 0) =>
                  addFormField(variant, index)
                }
              />
              <div className="flex-1 overflow-y-auto">
                <FormFieldList
                  formFields={formFields}
                  setFormFields={setFormFields}
                  updateFormField={updateFormField}
                  openEditDialog={openEditDialog}
                />
              </div>
            </div>
            {/* <div className="col-span-1 h-full w-full space-y-3">
              <SpecialComponentsNotice formFields={formFields} />
              <FormPreview formFields={formFields} />
            </div> */}
          </div>
        )}
        otherwise={() => (
          <div className="flex flex-col items-center gap-3 md:flex-row md:px-5">
            <FieldSelectorWithSeparator
              addFormField={(variant: string, index: number = 0) =>
                addFormField(variant, index)
              }
            />
            {/* <Image
              src={EmptyListImage}
              width={585}
              height={502}
              alt="Empty Image"
              className="mx-auto object-contain p-5 md:p-20"
            /> */}
          </div>
        )}
      />
      {/* <EditFieldDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        field={selectedField}
        onSave={handleSaveField}
      /> */}
    </section>
  )
}
