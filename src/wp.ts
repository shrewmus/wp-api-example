import axios from 'axios';

export interface Post {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  author: number;
  categories: number[];
  tags: number[];
}

const WP_URL ='<PUT_SITE_URL_HERE>';
const BASE_URL = `${WP_URL}/wp-json/wp/v2`;

export class WP {
  static async getPosts(): Promise<Post[]> {
    try {
     const response = await axios.get<Post[]>(`${BASE_URL}/posts`);
     return response.data ;
    } catch (error) {
      console.log('[ERR] ', error);
      throw error;
    }
  }

  static async getPost(id: number): Promise<Post> {
    try {
      const response = await axios.get<Post>(`${BASE_URL}/posts/${id}`);
      return response.data;
    } catch (error) {
      console.log('[ERR] ', error);
      throw error;
    }
  }
}
