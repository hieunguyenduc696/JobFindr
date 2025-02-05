import JobPostClient from "@/Components/JobPost/JobPostClient";
import React from "react";
import initTranslations from "../../i18n";
import TranslationsProvider from "../../TranslationsProvider";

const namespaces = ["home", "find", "common", "post"];

async function page({ params }: any) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, namespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={namespaces}
    >
      <JobPostClient />
    </TranslationsProvider>
  );
}

export default page;
