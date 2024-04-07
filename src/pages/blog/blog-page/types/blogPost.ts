interface BlogPostAuthor {
  id: number;
  name: string;
}

export interface BlogPostComment {
  id: number;
  author: BlogPostAuthor;
  content: string;
  date: string;
}

interface BlogPostTag {
  id: number;
  name: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: BlogPostAuthor;
  date: string;
  image: string;
  tags: BlogPostTag[];
  comments: BlogPostComment[];
  commentsCount: number;
}
