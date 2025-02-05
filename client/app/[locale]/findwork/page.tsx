import FindWork from "@/Components/FindWork";
import initTranslations from "../../i18n";
import TranslationsProvider from "../../TranslationsProvider";

const namespaces = ["home", "find", "common"];

async function page({ params }: any) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, namespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={namespaces}
    >
      <FindWork />
    </TranslationsProvider>
  );
}

export default page;
