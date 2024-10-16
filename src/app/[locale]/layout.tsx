import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body suppressHydrationWarning>
        <NextIntlClientProvider
          messages={JSON.stringify(messages) as unknown as AbstractIntlMessages}
        >
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}