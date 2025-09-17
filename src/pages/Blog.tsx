import HeroSection from '@/components/blog/HeroSection';
import ArticlesGrid from '@/components/blog/ArticlesGrid';
import CategoriesSection from '@/components/blog/CategoriesSection';

const Blog = () => {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <ArticlesGrid />
    </main>
  );
};

export default Blog;