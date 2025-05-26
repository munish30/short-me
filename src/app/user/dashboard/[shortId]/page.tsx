import ClientPage from './client';

export default async function Page({ params }: { params: Promise<{ shortId: any }> }) {
  const {shortId} = await params;
  return <ClientPage shortId={shortId} />;
}
