import { Background } from "@/components/utils/background/Background";
import { ScrollResizeHelper } from "@/components/utils/scrollResizeHelper/ScrollResizeHelper";
import "@/styles/main.scss";
import "@/styles/normalize.scss";
import { languages } from "@/translations/languages";

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: (typeof languages)[number];
  };
}) {
  return (
    <html lang={lang}>
      <body>
        <Background />
        <ScrollResizeHelper />
        {children}
      </body>
    </html>
  );
}
