export type Schedule = {
  name: string;
  time: string;
};

export type ScheduleGroup = {
  title: string;
  schedules: Schedule[];
};
