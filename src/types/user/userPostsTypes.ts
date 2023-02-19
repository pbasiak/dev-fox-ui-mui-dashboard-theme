interface Author {
  firstName: string;
  lastName: string;
  image: string;
}

export interface Comment {
  userId: number;
  content: string;
  created: string;
  updated: string;
  id: number;
  author: Author;
}

export interface UserPost {
  id: number;
  userId: number;
  description: string;
  created: string;
  updated: string;
  likes: number;
  comments: Comment[];
  commentsTotal: number;
  author: Author;
}