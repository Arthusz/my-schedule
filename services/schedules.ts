import { ScheduleGroup } from "../models";

export const putSchedules = (schedules: ScheduleGroup[]) => {
	return fetch("http://localhost:3030/schedules", {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(schedules),
	});
};
