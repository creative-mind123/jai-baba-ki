
import { MetadataRoute } from 'next';
import { servicesList } from '@/lib/services';
import { healthIssues } from '@/lib/health';
import { locations } from '@/lib/locations';
import { posts } from '@/lib/blog';

const URL = 'https://www.icbr.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const services = servicesList.map((service) => ({
    url: `${URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const health = healthIssues.map((issue) => ({
    url: `${URL}/health/${issue.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPosts = posts.map((post) => ({
    url: `${URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  const mainLocations = locations.map((location) => ({
      url: `${URL}/locations/${location.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
  }));

  const delhiSubLocations = locations.find(l => l.slug === 'delhi')?.subLocations?.map(sub => ({
      url: `${URL}/locations/delhi/${sub.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
  })) || [];

  const gurgaonSubLocations = locations.find(l => l.slug === 'gurgaon')?.subLocations?.map(sub => ({
      url: `${URL}/locations/gurgaon/${sub.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
  })) || [];

  const noidaSubLocations = locations.find(l => l.slug === 'noida')?.subLocations?.map(sub => ({
      url: `${URL}/locations/noida/${sub.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
  })) || [];

  const staticPages = [
    {
      url: URL,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${URL}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
     {
      url: `${URL}/why-choose-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${URL}/book-now`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.9,
    },
    {
      url: `${URL}/corporate-wellness`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${URL}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
     {
      url: `${URL}/webinar`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ];

  return [
    ...staticPages,
    ...services,
    ...health,
    ...blogPosts,
    ...mainLocations,
    ...delhiSubLocations,
    ...gurgaonSubLocations,
    ...noidaSubLocations
  ];
}
