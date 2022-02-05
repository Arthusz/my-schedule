import { FieldArray, Form, Formik } from "formik";
import Head from "next/head";
import React, { useState } from "react";

import Nav from "../components/nav";
import WeeklySchedule from "../components/weeklySchedule";
import styles from "../styles/pages/editor.module.scss";

import type { ScheduleGroup } from "../models";
import Input from "../components/input";

const EMPTY_SCHEDULE = {
	name: "",
	time: "",
};

const EMPTY_GROUP = {
	title: "",
	schedules: [
		{
			...EMPTY_SCHEDULE,
		},
	],
};

const Editor = () => {
	const [scheduleGroups, setScheduleGroups] = useState<ScheduleGroup[]>([]);

	const initialValues = {
		groups: [
			{
				...EMPTY_GROUP,
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
					<Formik
						initialValues={initialValues}
						onSubmit={(values) => {
							setScheduleGroups(values.groups);
						}}
					>
						{({ values, setFieldValue, submitForm, errors }) => (
							<Form className={styles.form}>
								<FieldArray name="groups">
									{({
										insert: insertGroup,
										remove: removeGroup,
										push: pushGroup,
									}) => (
										<div
											style={{
												border: "1px solid red",
												padding: 12,
												margin: 12,
											}}
										>
											{values.groups.map((foo, groupIndex) => (
												<div key={groupIndex}>
													<Input
														name={`groups.${groupIndex}.title`}
														label="Day"
													/>
													{/* --> expected result : groups.1.schedules */}
													{/* "groups." + groupIndex + ".schedules" */}
													<FieldArray name={`groups.${groupIndex}.schedules`}>
														{({
															insert: insertSchedule,
															remove: removeSchedule,
															push: pushSchedule,
														}) => (
															<div
																style={{
																	border: "1px solid green",
																	padding: 12,
																	margin: 12,
																}}
															>
																{values.groups[groupIndex].schedules.map(
																	(foo, scheduleIndex) => (
																		<div
																			key={scheduleIndex}
																			style={{
																				border: "1px solid blue",
																				padding: 12,
																				margin: 12,
																			}}
																		>
																			<Input
																				name={`groups.${groupIndex}.schedules.${scheduleIndex}.name`}
																				label="Name"
																			/>
																			<Input
																				name={`groups.${groupIndex}.schedules.${scheduleIndex}.time`}
																				label="Time"
																			/>
																			{scheduleIndex !== 0 && (
																				<button
																					type="button"
																					onClick={() => {
																						removeSchedule(scheduleIndex);
																					}}
																				>
																					Remove schedule
																				</button>
																			)}
																		</div>
																	)
																)}
																<button
																	onClick={() =>
																		pushSchedule({ ...EMPTY_SCHEDULE })
																	}
																	type="button"
																>
																	Add schedule
																</button>
															</div>
														)}
													</FieldArray>
													{groupIndex !== 0 && (
														<button onClick={() => removeGroup(groupIndex)}>
															Remove group
														</button>
													)}
												</div>
											))}
											<button
												onClick={() => pushGroup({ ...EMPTY_GROUP })}
												type="button"
											>
												Add group
											</button>
										</div>
									)}
								</FieldArray>
								<button type="submit" onClick={submitForm}>
									Submit
								</button>
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
