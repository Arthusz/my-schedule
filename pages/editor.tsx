import Head from "next/head";
import { useState } from "react";

import Nav from "../components/nav";
import styles from "../styles/pages/editor.module.scss";

import type { ScheduleGroup } from "../models";
import WeeklySchedule from "../components/weeklySchedule";
import { Formik, Field, Form } from "formik";

const Editor = () => {
	const [scheduleGroups, setScheduleGroups] = useState<ScheduleGroup[]>([]);

	const initialValues = {
		groups: [
			{
				title: "",
				schedules: [
					{
						name: "",
						time: "",
					},
				],
			},
		],
	};

	return (
		<div>
			<Head>
				<title>Editor - ZTM Schedule</title>
			</Head>
			<Nav />
			<div className={styles.container}>
				<div>
					<h2>Editor</h2>
					<Formik initialValues={initialValues} onSubmit={console.log}>
						{({ values, setFieldValue }) => (
							<Form className={styles.form}>
								{values.groups.map((foo, i) => (
									<div key={i}>
										<label htmlFor={`group.${i}.title`}>Title</label>
										<Field
											name={`group.${i}.title`}
											placeholder="Sunday"
											type="text"
										/>
									</div>
								))}
								<button type="submit">Submit</button>
							</Form>
						)}
					</Formik>
				</div>
				<WeeklySchedule scheduleGroups={scheduleGroups} />
			</div>
		</div>
	);
};

export default Editor;
