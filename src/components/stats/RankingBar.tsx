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
        label={`classement (${rankingStats.country})`}
        value={rankingStats.nationalRank}
        valueTextSize="text-s"
      />
      <StatItem
        label={`score moyen (${rankingStats.country})`}
        value={rankingStats.averageNationalScore}
        valueTextSize="text-s"
      />
      <StatItem
        label={'classement international'}
        value={`${rankingStats.internationalRank}`}
        valueTextSize="text-s"
      />
      <StatItem
        label={'score international moyen'}
        value={rankingStats.averageInternationalScore}
        valueTextSize="text-s"
      />
    </div>
  )
}
