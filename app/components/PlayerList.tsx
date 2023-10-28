import React from "react";
import type { Player, PlayerWithPosition } from "~/types";
import { Link } from "@remix-run/react";
import { IKImage } from "imagekitio-react";

type IProps = {
  players: PlayerWithPosition[];
};

export default function PlayerList({ players }: IProps) {
  return (
    <ul className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-10">
      {players.map(
        ({ player, position }: { player: Player; position: string }) => (
          <li
            key={player.id}
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow overflow-hidden"
          >
            <Link to={`/player/${player.slug}`}>
              <div className="flex-1 flex flex-col">
                <div className="relative w-full">
                  <IKImage
                    width={274}
                    height={274}
                    path={
                      player.photo
                        ? `/storage/${player.photo}`
                        : `/storage/empty-profile.jpg?`
                    }
                    transformation={[
                      {
                        height: "274",
                        width: "274",
                      },
                      {
                        focus: "auto",
                        effectGray: "1",
                      },
                    ]}
                    loading="lazy"
                    lqip={{ active: true }}
                    alt={`${player.first_name} ${player.last_name}`}
                    className="object-cover h-88 md:64  w-full flex-shrink-0 mx-auto bg-black"
                  />
                </div>

                <h3 className="lg:hidden mt-4 mb-3 text-gray-900 text-lg md:text-xl leading-5 font-medium">
                  <div>
                    {player.first_name} {player.last_name}
                  </div>
                  <div className="mt-3">
                    {position != "Coach" && <>#{player.number} </>}
                  </div>
                </h3>
                <h3 className="hidden lg:block my-6 text-gray-900 text-xl leading-5 font-medium">
                  {player.first_name} {player.last_name}
                  {position != "Coach" && <> | #{player.number} </>}
                </h3>
              </div>
            </Link>
          </li>
        ),
      )}
    </ul>
  );
}
