import { PRODUCTS } from '@/data/catalog';
import Product from '@/components/pages/Product';

export function generateStaticParams() {
  return PRODUCTS.map((x) => ({ pid: x.id }));
}

export default function Page() {
  return <Product />;
}
