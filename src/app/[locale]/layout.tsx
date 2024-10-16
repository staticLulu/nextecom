import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, messages] = await Promise.all([getLocale(), getMessages()]);
  return (
    <html lang={locale}>
      <body suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className='bg-white shadow-md top-0 fixed w-full z-20'>
            navbar???
          </div>
          
          <main className='max-w-screen-xl mx-auto p-12'>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}