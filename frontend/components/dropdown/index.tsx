import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

type DropdownProps = {
  options: any;
  setOption: any;
  disabled?: boolean;
}


const DropdownComponent = ({
  options,
  setOption,
  disabled = false,
}: DropdownProps) => {
  const [selected, setSelected] = useState(options[0])
  const [isOpen, setIsOpen] = useState(false)

  const handleFocus = () => setIsOpen(true)

  return (
    <div className="mx-auto w-full">
      <Combobox
        as="div"
        className={`relative ${disabled ? 'cursor-not-allowed  opacity-70' : 'cursor-pointer'}`}
        value={selected}
        onChange={(value: any) => setSelected(value)}
        disabled={disabled}
      >
        <div className="relative">
          <ComboboxButton className="w-full">
            <ComboboxInput
              className={`w-full relative rounded-md border h-14 px-4 focus:outline-none ${
                isOpen ? 'border-primary-400' : 'border-gray-200'
              } hover:bg-gray-100 bg-white`}
              placeholder="Search"
              displayValue={(option: any) => option?.name}
              onChange={(event) => setOption(event.target.value)}
              onFocus={handleFocus}
            />
            <ChevronDownIcon className="size-4 absolute right-4 top-1/2 -translate-y-1/2 fill-gray-900 group-data-[hover]:fill-white" />
          </ComboboxButton>
        </div>

        {isOpen && (
          <ComboboxOptions
            className="absolute z-10 mt-1 max-h-60 w-fit left-0 overflow-auto rounded-md bg-white py-1 text-base shadow-md focus:outline-none"
          >
            {options.map((option: any) => (
              <ComboboxOption
                key={option.id}
                value={option}
                className="group flex cursor-pointer items-center gap-2 rounded-lg py-2 px-3 hover:bg-primary-50"
              >
                <CheckIcon className="invisible size-4 fill-primary-600 group-data-[selected]:visible" />
                <div className="text-md text-gray-900">{option.name}</div>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </Combobox>
    </div>
  )
}

export default DropdownComponent;
