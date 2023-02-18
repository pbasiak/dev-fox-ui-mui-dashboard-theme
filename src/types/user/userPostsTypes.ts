export interface Comment {
  userId: number;
  comment: string;
  created: Date;
  updated: Date;
  id: number;
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
}