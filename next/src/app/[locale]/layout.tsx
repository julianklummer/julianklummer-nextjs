import { Background } from "@/components/utils/background/Background";
import { ScrollResizeHelper } from "@/components/utils/scrollResizeHelper/ScrollResizeHelper";
import { routing } from "@/i18n/routing";
import "@/styles/main.scss";
import "@/styles/normalize.scss";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <Background />
        <ScrollResizeHelper />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
