import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";

export interface ProgramCardProps {
  icon: React.ComponentType<{ size?: number }>;
  name: string;
  age: string;
  desc: string;
  days: string;
  time: string;
  location: string;
  status: string;
  statusColor: string;
  dotColor: string;
  btnColor: string;
  iconBg: string;
  badgeBg: string;
  actionLabel: string;
}

const ProgramsCard = ({ programs }: { programs: ProgramCardProps[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {programs.map(
        ({
          icon: Icon,
          name,
          age,
          desc,
          days,
          time,
          location,
          status,
          statusColor,
          dotColor,
          btnColor,
          iconBg,
          badgeBg,
          actionLabel,
        }) => (
          <div
            key={name}
            className="bg-white border border-gray-100 hover:border-gray-200 rounded-2xl overflow-hidden transition-colors flex flex-col"
          >
            {/* Card top */}
            <div className="p-5 border-b border-gray-100 flex-1">
              <div
                className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center mb-4`}
              >
                <Icon size={20} />
              </div>
              <h3 className="font-black text-base text-gray-900 mb-1.5">
                {name}
              </h3>
              <Badge
                variant="outline"
                className={`text-[11px] rounded-full mb-3 ${badgeBg}`}
              >
                {age}
              </Badge>
              <p className="text-[12.5px] text-gray-400 leading-relaxed">
                {desc}
              </p>
            </div>

            <div className="p-5 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Calendar size={13} className="shrink-0" />
                {days}
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Clock size={13} className="shrink-0" />
                {time}
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <MapPin size={13} className="shrink-0" />
                {location}
              </div>

              <Separator className="my-1" />

              <div className="flex items-center justify-between">
                <div
                  className={`flex items-center gap-1.5 text-xs font-semibold ${statusColor}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                  {status}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className={`text-xs h-7 px-3 rounded-lg ${btnColor}`}
                >
                  {actionLabel}
                </Button>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default ProgramsCard;
