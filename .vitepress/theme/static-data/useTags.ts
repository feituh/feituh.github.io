import { createContentLoader, ContentData } from 'vitepress';
import { data as posts } from './posts.data'

type Post = ContentData & {
    thumbnail: any;
    excerpt: string;
    title: string;
    date: Date;
    tags?: String[];
};

export function useTags() {
  const postsByTag = {} as Record<string, Post[]>;
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i]
    const tags = post.frontmatter.tags
    if (Array.isArray(tags)) {
      tags.forEach((tag) => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = [];
        }
        postsByTag[tag].push(post);
      })
    }
  }
  return { postsByTag }
}
