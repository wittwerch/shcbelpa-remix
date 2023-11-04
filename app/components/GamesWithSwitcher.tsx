import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/Select";

import { DateTime } from "luxon";
import type { Game, Season } from "~/types";
import GameList from "~/components/GameList";
import { useNavigate } from "@remix-run/react";

type IProps = {
  teamId: string;
  seasonCode: string;
  seasons: Season[];
  games: Game[];
};

export default function GamesWithSwitcher({
  teamId,
  seasonCode,
  seasons,
  games,
}: IProps) {
  // const router = useRouter();
  // const { animatedRoute } = useAnimatedRouter();
  const navigate = useNavigate();

  const onChange = (value: string) => {
    navigate(`/teams/${teamId}/season/${value}`);
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

      <GameList games={games}></GameList>
    </div>
  );
}
