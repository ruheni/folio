export type Tag = {
  id: number;
  name: string;
  projects: Project[];
};

export type Project = {
  id: number;
  title?: string;
  content?: string;
  published: boolean;
  publishedDate: Date;
  author: User;
  authorId?: number;
  tags: Tag[];
};

export type Feed = {
  id: number;
  subdomain: string;
  owner: User;
  ownerId: number;
  posts: Post[];
};

export type User = {
  id: number;
  email: string;
  name: string;
  image: string;
  projects: Project[];
  posts: Post[];
  phone: string;
  feeds: Feed[];
};

export type Post = {
  id: number;
  title: string;
  content: string;
  publishedDate: Date;
  author: User;
  authorId?: number;
  published: Boolean;
  media: string[];
  Feed: Feed;
  feedId: number;
};

export type UserOnFeed = {
  id: string;
  feed: Feed;
  feedId: number;
  user: User;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  userPhone: string;
  feedPhone: string;
};
