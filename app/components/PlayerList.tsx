import React from "react";
import type {Player,PlayerWithPosition} from "~/types";
import {Link} from "@remix-run/react";

const IMAGEKIT_PARAMS = "tr=w-274,h-274,fo-auto,e-grayscale";

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
                  <img
                    height={274}
                    width={274}
                    className="object-cover h-88 md:64  w-full flex-shrink-0 mx-auto bg-black"
                    src={
                      player.photo
                        ? `https://ik.imagekit.io/shcbelpa/${player.photo}?${IMAGEKIT_PARAMS}`
                        : `https://ik.imagekit.io/shcbelpa/empty-profile.jpg?${IMAGEKIT_PARAMS}`
                    }
                    alt={`${player.first_name} ${player.last_name}`}
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
