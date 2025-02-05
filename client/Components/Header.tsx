"use client";
import { useGlobalContext } from "@/context/globalContext";
import { LogIn, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Profile from "./Profile";
import LanguageChanger from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  const { isAuthenticated } = useGlobalContext();
  const pathname = usePathname();
  return (
    <header className="px-10 py-6 bg-[#D7DEDC] text-gray-500 flex justify-between items-center">
      <Link href={"/"} className="flex items-center gap-2 max-h-6">
        <Image src="/ezdLogo.png" alt="logo" width={45} height={45} />
        <Image
          src="/slogan.png"
          alt="logo"
          width={1000}
          height={100}
          style={{ width: "auto", height: "100px" }}
        />
      </Link>

      <ul className="flex items-center gap-8">
        <li>
          <Link
            href={"/findwork"}
            className={`py-2 px-6 rounded-md ${
              pathname === "/findwork"
                ? "text-[#7263F3] border-[#7263F3] border bg-[#7263F3]/10"
                : ""
            }`}
          >
            {t("common:find")}
          </Link>
          <Link
            href={"/myjobs"}
            className={`py-2 px-6 rounded-md ${
              pathname === "/myjobs"
                ? "text-[#7263F3] border-[#7263F3] border bg-[#7263F3]/10"
                : ""
            }`}
          >
            {t("common:myJobs")}
          </Link>
          <Link
            href={"/post"}
            className={`py-2 px-6 rounded-md ${
              pathname === "/post"
                ? "text-[#7263F3] border-[#7263F3] border bg-[#7263F3]/10"
                : ""
            }`}
          >
            {t("common:post")}
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <LanguageChanger />
        {isAuthenticated ? (
          <Profile />
        ) : (
          <div className="flex items-center gap-6">
            <Link
              href={"https://test.ezd.edu.vn/login"}
              className="py-2 px-6 w-max rounded-md border flex items-center gap-4 bg-[#7263F3] text-white border-[#7263F3] hover:bg-[#7263F3]/90 trasition-all duration-200 ease-in-out"
            >
              <LogIn className="w-4 h-4" />
              {t("common:login")}
            </Link>
            <Link
              href={"https://test.ezd.edu.vn/login"}
              className="py-2 px-6 w-max rounded-md border flex items-center gap-4 border-[#7263F3] text-[#7263F3] hover:bg-[#7263F3]/10 trasition-all duration-200 ease-in-out"
            >
              <UserPlus className="w-4 h-4" />
              {t("common:register")}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
