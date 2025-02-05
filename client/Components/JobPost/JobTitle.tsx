"use client";
import { useGlobalContext } from "@/context/globalContext";
import { Separator } from "@/Components/ui/separator";

import React, { useEffect } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { useTranslation } from "react-i18next";
import { translationKeyMap } from "../JobItem/JobCard";

interface EmployementTypeProps {
  "Full Time": string;
  "Part Time": string;
  Contract: boolean;
  Internship: boolean;
  Temporary: boolean;
}

function JobTitle() {
  const { t } = useTranslation();

  const { handleTitleChange, jobTitle, setActiveEmploymentTypes } =
    useGlobalContext();

  const [employmentTypes, setEmploymentTypes] =
    React.useState<EmployementTypeProps>({
      "Full Time": "",
      "Part Time": "",
      Contract: false,
      Internship: false,
      Temporary: false,
    });

  const handleEmploymentTypeChange = (type: keyof EmployementTypeProps) => {
    setEmploymentTypes((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  useEffect(() => {
    const selectedTypes = Object.keys(employmentTypes).filter((type) => {
      return employmentTypes[type as keyof EmployementTypeProps];
    });

    setActiveEmploymentTypes(selectedTypes);
  }, [employmentTypes]);

  return (
    <div className="p-6 flex flex-col gap-4 bg-background border border-border rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{t("post:jobTitle")}</h3>
          <Label
            htmlFor="jobTitle"
            className="text-sm text-muted-foreground mt-2"
          >
            {t("post:jobTitleDes")}
          </Label>
        </div>
        <Input
          type="text"
          id="jobTitle"
          value={jobTitle}
          onChange={handleTitleChange}
          className="flex-1 w-full mt-2"
          placeholder={t("post:jobTitlePlh")}
        />
      </div>

      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{t("post:employmentType")}</h3>
          <Label
            htmlFor="employmentType"
            className="text-sm text-muted-foreground mt-2"
          >
            {t("post:empTypeDes")}
          </Label>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          {Object.entries(employmentTypes).map(([type, checked]) => (
            <div
              key={type}
              className="flex items-center space-x-2 border border-input rounded-md p-2"
            >
              <Checkbox
                id={type}
                checked={checked}
                onCheckedChange={() => {
                  handleEmploymentTypeChange(
                    type as keyof EmployementTypeProps
                  );
                }}
              />
              <Label
                htmlFor={type}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {t(translationKeyMap[type])}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobTitle;
