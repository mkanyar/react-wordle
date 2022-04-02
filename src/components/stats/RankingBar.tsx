import { StatItem } from './StatItem'

type Props = {
  rankingStats: RankingStats
}

export type RankingStats = {
  national_rank: string
  international_rank: string
  average_national_score: number
  average_international_score: number
  country: string
}

export const RankingBar = ({
  rankingStats: {
    average_international_score,
    average_national_score,
    country,
    international_rank,
    national_rank,
  },
}: Props) => {
  return (
    <div className="flex justify-center my-2">
      <StatItem
        label={`Ikibanza (${country})`}
        value={national_rank}
        valueTextSize="text-s"
      />
      <StatItem
        label={`Amanota moyen y'igihugu (${country})`}
        value={average_national_score}
        valueTextSize="text-s"
      />
      <StatItem
        label={"Ikibanza kw'isi yose"}
        value={`${international_rank}`}
        valueTextSize="text-s"
      />
      <StatItem
        label={"Amanota moyen kw'isi yose"}
        value={average_international_score}
        valueTextSize="text-s"
      />
    </div>
  )
}
