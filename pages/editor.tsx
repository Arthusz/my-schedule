import { FieldArray, Form, Formik, yupToFormErrors } from "formik";
import Head from "next/head";
import React, { useState } from "react";
import * as Yup from "yup";

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

const validationSchema = Yup.object().shape({
  groups: Yup.array().of(
    Yup.object().shape({
      title: Yup.string().required("Title is required"),
      schedules: Yup.array().of(
        Yup.object().shape({
          name: Yup.string().required("Required"),
          time: Yup.string().required("Required"),
        })
      ),
    })
  ),
});

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
            validationSchema={validationSchema}
            onSubmit={(values) => {
              setScheduleGroups(values.groups);
            }}
          >
            {({ values, setFieldValue, submitForm, errors }) => (
              <Form className={`${styles.mainForm} ${styles.forms}`}>
                <FieldArray name="groups">
                  {({
                    insert: insertGroup,
                    remove: removeGroup,
                    push: pushGroup,
                  }) => (
                    <div className={styles.forms}>
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
                              <div className={styles.forms}>
                                {values.groups[groupIndex].schedules.map(
                                  (foo, scheduleIndex) => (
                                    <div
                                      key={scheduleIndex}
                                      className={styles.forms}
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
