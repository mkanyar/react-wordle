import { StatItem } from './StatItem'

type Props = {
  rankingStats: RankingStats
}

export type RankingStats = {
  nationalRank: string
  internationalRank: string
  averageNationalScore: number
  averageInternationalScore: number
  country: string
}

export const RankingBar = ({ rankingStats }: Props) => {
  return (
    <div className="flex justify-center my-2">
      <StatItem
        label={`Ikibanza (${rankingStats.country})`}
        value={rankingStats.nationalRank}
        valueTextSize="text-s"
      />
      <StatItem
        label={`Amanota moyen y'igihugu (${rankingStats.country})`}
        value={rankingStats.averageNationalScore}
        valueTextSize="text-s"
      />
      <StatItem
        label={"Ikibanza kw'isi yose"}
        value={`${rankingStats.internationalRank}`}
        valueTextSize="text-s"
      />
      <StatItem
        label={"Amanota moyen kw'isi yose"}
        value={rankingStats.averageInternationalScore}
        valueTextSize="text-s"
      />
    </div>
  )
}
