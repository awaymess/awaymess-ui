import React from 'react'
import { TextField, TextFieldProps } from '@mui/material'
import {
  NumberFormatValues,
  NumericFormat,
  NumericFormatProps,
  SourceInfo,
} from 'react-number-format'

export type NumberInputProps = Omit<NumericFormatProps<TextFieldProps>, 'customInput' | 'type'>

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  function NumberInput(
    {
      decimalScale = 0,
      thousandSeparator = ',',
      onValueChange,
      ...props
    },
    ref
  ) {
    const handleValueChange = (values: NumberFormatValues, sourceInfo: SourceInfo) => {
      if (!onValueChange) return

      onValueChange(
        values.value === ''
          ? {
              ...values,
              value: '0',
              floatValue: 0,
            }
          : values,
        sourceInfo
      )
    }

    return (
      <NumericFormat
        {...props}
        decimalScale={decimalScale}
        getInputRef={ref}
        customInput={TextField}
        thousandSeparator={thousandSeparator}
        onValueChange={handleValueChange}
      />
    )
  }
)
