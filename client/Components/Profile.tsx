"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Settings, LogOut } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/context/globalContext";
import { Badge } from "./ui/badge";
import { useTranslation } from "react-i18next";

function Profile() {
  const { t } = useTranslation();
  const { userProfile } = useGlobalContext();

  const { profilePicture, name, profession, email } = userProfile;

  const router = useRouter();
  return (
    <DropdownMenu>
      <div className="flex items-center gap-4">
        <Badge className="w-max">{t(`common:${profession}`)}</Badge>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <Image
            src={profilePicture ? profilePicture : "/user.png"}
            alt="avatar"
            width={36}
            height={36}
            className="rounded-lg"
          />
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>{t("common:settings")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            router.push("https://test.ezd.edu.vn/logout");
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>{t("common:logout")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Profile;
