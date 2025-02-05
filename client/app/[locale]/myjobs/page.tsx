import MyJobClient from "@/Components/MyJobClient";
import React from "react";
import initTranslations from "../../i18n";
import TranslationsProvider from "../../TranslationsProvider";

const namespaces = ["home", "find", "job", "common"];

async function page({ params }: any) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, namespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={namespaces}
    >
      <MyJobClient />
    </TranslationsProvider>
  );
}

export default page;
