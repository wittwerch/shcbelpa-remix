import type {Season, Stat} from "~/types";
import {useNavigate} from "@remix-run/react";
import {DateTime} from "luxon";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "~/components/ui/Select";
import StatsTable from "~/components/StatsTable";

type IProps = {
  teamId: string;
  seasonCode: string;
  seasons: Season[];
  stats: {
    [key: string]: Stat[];
  };
};

export default function StatsWithSwitcher({
  teamId,
  seasonCode,
  seasons,
  stats,
}: IProps) {

  const navigate = useNavigate();

  const onChange = (value: string) => {
    navigate(`/teams/${teamId}/stats/${value}`);
  };

  const getValue = (season: Season) => {
    // convert season to year like 2023/2024
    return (
      DateTime.fromISO(season.start_date).year +
      "/" +
      DateTime.fromISO(season.end_date).year
    );
  };

  return (
    <div>
      <div className="py-4 flex flex-row items-center">
        <div className="mr-2 font-semibold">Saison:</div>
        <div>
          {/* @TODO: Make a component out of this */}
          <Select onValueChange={onChange} defaultValue={seasonCode}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Saison auswählen" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Saisons</SelectLabel>
                {seasons.map((season) => (
                  <SelectItem key={season.id} value={season.code}>
                    {getValue(season)}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {Object.entries(stats).map(([statType, statArray], index) => (
        <div key={index} className="pb-10">
          <StatsTable
            key={statType}
            title={statType}
            stats={statArray}
          ></StatsTable>
        </div>
      ))}
    </div>
  );
}
