import React from "react";
import JobDetailClient from "@/Components/JobDetailClient";
import initTranslations from "../../../i18n";
import TranslationsProvider from "../../../TranslationsProvider";

const namespaces = ["details", "find", "common", "post", "home"];

async function page({ params }: any) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, namespaces);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={namespaces}
    >
      <JobDetailClient />
    </TranslationsProvider>
  );
}

export default page;
