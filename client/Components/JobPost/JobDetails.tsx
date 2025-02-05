"use client";
import { useGlobalContext } from "@/context/globalContext";
import React from "react";
import { Label } from "../ui/label";
import "react-quill-new/dist/quill.snow.css";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

function MyEditor() {
  const { setJobDescription, jobDescription } = useGlobalContext();

  return (
    <ReactQuill
      value={jobDescription}
      onChange={setJobDescription}
      style={{
        minHeight: "400px",
        maxHeight: "900px",
      }}
      modules={{
        toolbar: true,
      }}
      className="custom-quill-editor"
    />
  );
}

function JobDetails() {
  const { t } = useTranslation();

  const {
    handleSalaryChange,
    salary,
    salaryType,
    setSalaryType,
    setNegotiable,
    negotiable,
  } = useGlobalContext();
  return (
    <div className="p-6 flex flex-col gap-4 bg-background border border-border rounded-lg">
      <div className="grid grid-cols-2 gap-6">
        <div className="flex-1">
          <h3 className="text-black font-bold">{t("post:jobDes")}</h3>
          <Label htmlFor="jobDescription" className="text-gray-500 mt-2">
            {t("post:jobDesDes")}
          </Label>
        </div>
        <div className="flex-1">
          <MyEditor />
        </div>
      </div>

      <Separator className="my-2" />

      <div className="relative grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-black font-bold">{t("post:salary")}</h3>
          <Label htmlFor="salary" className="text-gray-500 mt-2">
            {t("post:enterSalary")}
          </Label>
        </div>

        <div>
          <Input
            type="number"
            id="salary"
            placeholder={t("post:salaryPlh")}
            value={salary}
            onChange={handleSalaryChange}
            className="mt-2"
          />

          <div className="flex gap-2 mt-2 justify-between">
            <div className="flex items-center space-x-2 border border-gray-300 rounded-md p-2">
              <Checkbox id="negotiable" />
              <Label htmlFor="negotiable" className="text-gray-500">
                {t("post:negotiable")}
              </Label>
            </div>
            <div className="flex items-center space-x-2 border border-gray-300 rounded-md p-2">
              <Checkbox
                id="hideSalary"
                checked={negotiable}
                onCheckedChange={setNegotiable}
              />
              <Label htmlFor="hideSalary" className="text-gray-500">
                {t("post:hide")}
              </Label>
            </div>

            <div>
              <Select onValueChange={setSalaryType}>
                <SelectTrigger>
                  <SelectValue placeholder={t("post:select")} />
                </SelectTrigger>
                <SelectContent className="w-[120px] mt-2">
                  <SelectItem value="Yearly">{t("post:yearly")}</SelectItem>
                  <SelectItem value="Month">{t("post:month")}</SelectItem>
                  <SelectItem value="Hour">{t("post:hour")}</SelectItem>
                  <SelectItem value="Fixed">{t("post:fixed")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
