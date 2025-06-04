'use client';
import dynamic from 'next/dynamic';

const ProductsPage = dynamic(() => import('../page'), { ssr: false });

interface Props {
  params: { slug: string };
}

export default function DynamicSlugPage({ params }: Props) {
  return <ProductsPage slug={params.slug} />;
}
