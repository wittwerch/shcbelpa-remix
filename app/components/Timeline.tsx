import { cn } from "~/lib/utils";
import React from "react";
import type { Event, Game } from "~/types";

type TimelineEventProps = {
  time: string;
  children: React.ReactNode;
  side: "left" | "right";
};

export function TimelineSeparator({ text }: { text: string }) {
  return (
    <div className="mt-6 sm:mt-0 sm:mb-12">
      <div className="p-4 bg-red-500 text-white rounded shadow">{text}</div>
    </div>
  );
}

export function TimelineEvent({ time, children, side }: TimelineEventProps) {
  return (
    <div className="mt-6 sm:mt-0 sm:mb-12">
      <div className="flex flex-col sm:flex-row items-center">
        <div
          className={cn(
            side == "left" ? "justify-start" : "justify-end",
            "flex w-full mx-auto items-center",
          )}
        >
          <div
            className={cn(
              side == "left" ? "pr-4 sm:pr-12" : "pl-4 sm:pl-12",
              "w-1/2 ",
            )}
          >
            <div className="p-4 bg-white rounded shadow">{children}</div>
          </div>
        </div>
        <div className="bg-red-500 border-white text-white border-4 w-16 h-8 absolute left-1/2 translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
          {time}
        </div>
      </div>
    </div>
  );
}

export function Goal({ event }: { event: Event }) {
  return (
    <div>
      <p className="text-lg">
        <span className={"text-red-700 font-extrabold"}>
          Tor {event.result}
        </span>
      </p>
      <p className="text-lg">{event.player}</p>
      <p className="text-gray-600">
        {event.assist1 && event.assist2 && (
          <>
            ({event.assist1} / {event.assist2})
          </>
        )}
        {event.assist1 && event.assist2 == null && <>({event.assist1})</>}
      </p>
    </div>
  );
}

export function Penalty({ event }: { event: Event }) {
  return (
    <>
      <p className="font-bold">{event.penalty}</p>
      <p className="text-gray-600">{event.player}</p>
    </>
  );
}

function getSide(event: Event, game: Game) {
  if (event.team === game.home_team.club.code) {
    return "left";
  } else {
    return "right";
  }
}

export function Timeline({ game, events }: { game: Game; events: Event[] }) {
  return (
    <div className="relative text-gray-700 antialiased text-sm font-semibold">
      <div className="w-1 bg-red-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>

      {events.map((event, index) => {
        switch (event.type) {
          case "goal":
            return (
              <TimelineEvent
                key={index}
                time={event.time}
                side={getSide(event, game)}
              >
                <Goal event={event} />
              </TimelineEvent>
            );
          case "penalty":
            return (
              <TimelineEvent
                key={index}
                time={event.time}
                side={getSide(event, game)}
              >
                <Penalty event={event} />
              </TimelineEvent>
            );
          case "period":
            return <TimelineSeparator text={event.description || ""} />;
          default:
            return (
              <TimelineEvent
                key={index}
                time={event.time}
                side={getSide(event, game)}
              >
                <span className="text-sm font-bold">{event.type}</span>
              </TimelineEvent>
            );
        }
      })}
    </div>
  );
}
