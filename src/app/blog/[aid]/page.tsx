import { POSTS } from '@/data/catalog';
import Article from '@/components/pages/Article';

export function generateStaticParams() {
  return POSTS.map((x) => ({ aid: x.id }));
}

export default function Page() {
  return <Article />;
}
