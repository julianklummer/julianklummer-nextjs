import { Background } from "@/components/utils/background/Background";
import { ScrollResizeHelper } from "@/components/utils/scrollResizeHelper/ScrollResizeHelper";
import "@/styles/main.scss";
import "@/styles/normalize.scss";
import { Locale } from "@/translations/types";

type Props = {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
};

export default function RootLayout({ children, params: { locale } }: Props) {
  return (
    <html lang={locale}>
      <body>
        <Background />
        <ScrollResizeHelper />
        {children}
      </body>
    </html>
  );
}
