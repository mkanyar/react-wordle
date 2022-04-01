export const StatItem = ({
  label,
  value,
  valueTextSize = 'text-3xl',
}: {
  label: string
  value: string | number
  valueTextSize?: string
}) => {
  return (
    <div className="items-center justify-center m-1 w-1/4 dark:text-white">
      <div className={`${valueTextSize} font-bold`}>{value}</div>
      <div className="text-xs">{label}</div>
    </div>
  )
}
