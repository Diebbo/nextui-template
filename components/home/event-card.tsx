import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";
import { SelfieEvent, People, Person } from "@/helpers/types";

function parseParticipants(participants: People) {
  if (!participants || participants.length === 0) return "No participants";

  var participantsNames = "";
  for (const partcipant of participants) {
    participantsNames += partcipant.name + ", ";
  }
  participantsNames = participantsNames.length < 30 ? participantsNames : participantsNames.substring(0, 30) + "...";
  return participantsNames;
}

export const EventCard = (props: { data: SelfieEvent }) => {
  const data = props.data;
  return (
    <Card className="xl:max-w-sm bg-primary rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5 overflow-hidden">
        <div className="flex gap-2.5">
          <Community />
          <div className="flex flex-col">
            <span className="text-white">Participants</span>
            <span className="text-white text-xs">{parseParticipants(data.participants)}</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-white text-xl font-semibold">{data.name}</span>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <div>
              <span className="font-semibold text-success text-xs mr-1">from</span>
              <span className="text-s text-white">{data.dateFrom.toLocaleDateString()} {data.dateFrom.toLocaleTimeString()}</span>
            </div>
          </div>

          <div>
            <div>
              <span className="font-semibold text-warning text-xs mr-1">to</span>
              <span className="text-s text-white">{data.dateTo.toLocaleDateString()} {data.dateTo.toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
