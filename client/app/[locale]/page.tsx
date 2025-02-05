import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import {
  Briefcase,
  Building,
  CheckCircleIcon,
  SearchIcon,
  Users,
} from "lucide-react";
import Link from "next/link";
import initTranslations from "../i18n";
import TranslationsProvider from "../TranslationsProvider";

const namespaces = ["home", "common"];

export default async function Home({ params }: any) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, namespaces);

  const features = [
    {
      icon: <Briefcase className="w-6 h-6 text-[#7263f3]" />,
      title: t("diverseOpportunities"),
      description: t("access"),
      benefits: [t("100"), t("50"), t("remote")],
      cta: t("explore"),
      ctaLink: "/findwork",
    },
    {
      icon: <Building className="w-6 h-6 text-[#7263f3]" />,
      title: t("top"),
      description: t("connect"),
      benefits: [t("500"), t("exclusive"), t("direct")],
      cta: t("view"),
      ctaLink: "/findwork",
    },
    {
      icon: <Users className="w-6 h-6 text-[#7263f3]" />,
      title: t("talent"),
      description: t("employers"),
      benefits: [t("1m"), t("advanced"), t("ai")],
      cta: t("common:post"),
      ctaLink: "/post",
    },
  ];

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={namespaces}
    >
      <main>
        <Header />

        <section className="py-20 bg-gradient-to-b from-[#d7dedc] to-[#7263f3]/5 text-primary-foreground">
          <div className="container mx-auto px-4 text-center text-black">
            <h1 className="text-4xl text-[#7263f3] md:text-5xl font-bold mb-6">
              {t("title")}
            </h1>
            <p className="text-xl mb-8">{t("subTitle")}</p>
            <div className="max-w-2xl mx-auto flex gap-4">
              <Input
                type="text"
                placeholder={t("search")}
                className="flex-grow bg-white text-black"
              />
              <Button className="bg-[#7263f3] text-white">
                <SearchIcon className="w-6 h-6" />
                {t("searchBtn")}
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#f0f5fa]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t("why")}{" "}
              <span className="text-[#7263f3] font-extrabold">JobFindr</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="flex flex-col h-full rounded-xl border-none"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {feature.title}
                    </CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />

                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={feature.ctaLink}>{feature.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Badge
                variant={"outline"}
                className="text-sm font-medium border-gray-400"
              >
                {t("trusted")}
              </Badge>
            </div>
          </div>
        </section>

        <section className="py-[7rem] bg-[#d7dedc]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">{t("ready")}</h2>

            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button size={"lg"} asChild>
                <Link href={"/findwork"}>{t("common:find")}</Link>
              </Button>
              <Button size={"lg"} variant={"outline"} asChild>
                <Link href={"/post"}>{t("common:post")}</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TranslationsProvider>
  );
}
