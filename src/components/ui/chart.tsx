import { type TooltipProps } from "recharts"
import * as React from "react"
import {
  type NameType,
  type ValueType,
} from "recharts/types/component/DefaultTooltipContent"
import { cn } from "../../lib/utils"

export interface ChartConfig {
  [key: string]: {
    label: string
    color?: string
  }
}

export const ChartContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn("w-full h-full", className)}>
      {children}
    </div>
  )
}

export const ChartTooltip = ({
  active,
  payload,
  label,
  content,
  ...props
}: TooltipProps<ValueType, NameType>) => {
  if (!active || !payload) return null
  if (content) return React.isValidElement(content) 
    ? content 
    : content({ active, payload, label, ...props })
  return <div className="rounded-lg border bg-background p-2 shadow-sm" />
}

interface ChartPayloadItem {
    name: string;
    value: number;
  }

export const ChartTooltipContent = ({
  payload,
  hideLabel = false,
}: {
  payload?:ChartPayloadItem[];
  hideLabel?: boolean;
}) => {
  if (!payload?.length) return null

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      {!hideLabel && (
        <div className="flex items-center justify-between gap-8">
          <div className="font-medium">{payload[0].name}</div>
        </div>
      )}
      <div className="flex items-center justify-between gap-8">
        <div className="font-medium">{payload[0].value}</div>
      </div>
    </div>
  )
}