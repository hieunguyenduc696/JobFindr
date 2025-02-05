"use client";
import { useGlobalContext } from "@/context/globalContext";
import React from "react";
import JobTitle from "./JobTitle";
import JobDetails from "./JobDetails";
import JobSkills from "./JobSkills ";
import JobLocation from "./JobLocation";
import { useJobsContext } from "@/context/jobsContext";
import { useTranslation } from "react-i18next";

function JobForm() {
  const { t } = useTranslation();
  const {
    jobTitle,
    jobDescription,
    salaryType,
    activeEmploymentTypes,
    salary,
    location,
    skills,
    negotiable,
    tags,
    resetJobForm,
  } = useGlobalContext();
  const { createJob } = useJobsContext();

  const sections = [
    t("post:about"),
    t("post:details"),
    t("post:skill"),
    t("post:location"),
    t("post:summary"),
  ];
  const [currentSection, setCurrentSection] = React.useState(0);

  const handleSectionChange = (section: number) => {
    setCurrentSection(section);
  };

  const renderStages = () => {
    switch (currentSection) {
      case 0:
        return <JobTitle />;
      case 1:
        return <JobDetails />;
      case 2:
        return <JobSkills />;
      case 3:
        return <JobLocation />;
    }
  };

  const getCompletedColor = (section: number) => {
    switch (section) {
      case 0:
        return jobTitle && activeEmploymentTypes.length > 0
          ? "bg-[#7263F3] text-white"
          : "bg-gray-300";
      case 1:
        return jobDescription && salary > 0
          ? "bg-[#7263F3] text-white"
          : "bg-gray-300";
      case 2:
        return skills.length && tags.length > 0
          ? "bg-[#7263F3] text-white"
          : "bg-gray-300";
      case 3:
        return location.address || location.city || location.country
          ? "bg-[#7263F3] text-white"
          : "bg-gray-300";
      default:
        return "bg-gray-300";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createJob({
      title: jobTitle,
      description: jobDescription,
      salaryType,
      jobType: activeEmploymentTypes,
      salary,
      location: `${location.address ? location.address + ", " : ""}${
        location.city ? location.city + ", " : ""
      }${location.country}`,
      skills,
      negotiable,
      tags,
    });

    resetJobForm();
  };

  return (
    <div className="w-full flex gap-6">
      <div className="self-start w-[12rem] flex flex-col bg-white rounded-md shadow-sm overflow-hidden">
        {sections.map((section, index) => (
          <button
            key={index}
            className={`pl-4 py-3 relative flex self-start items-center gap-2 font-medium 
                ${currentSection === index ? "text-[#7263F3]" : "text-gray-500"}
                `}
            onClick={() => handleSectionChange(index)}
          >
            <span
              className={`w-6 h-6 rounded-full flex items-center border border-gray-400/60 justify-center text-gray-500
                ${
                  currentSection === index ? " text-white" : ""
                } ${getCompletedColor(index)}`}
            >
              {index + 1}
            </span>
            {section}
            {currentSection === index && (
              <span className="w-1 h-full absolute left-0 top-0 bg-[#7263F3] rounded-full"></span>
            )}
          </button>
        ))}
      </div>

      <form
        action=""
        className="p-6 flex-1 bg-white rounded-lg self-start"
        onSubmit={handleSubmit}
      >
        {renderStages()}

        <div className="flex justify-end gap-4 mt-4">
          {currentSection !== 4 && (
            <button
              type="button"
              className="px-6 py-2 bg-[#7263F3] text-white rounded-md"
              onClick={() => {
                setCurrentSection(currentSection + 1);
              }}
            >
              {t("post:next")}
            </button>
          )}

          {currentSection === 4 && (
            <button
              type="submit"
              className="self-end px-6 py-2 bg-[#7263F3] text-white rounded-md"
            >
              {t("post:post")}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default JobForm;
