import httpService from '@/services/http.service';

const PostEndPoint = '/posts';

const postService = {
  get: async ({ limit }) => {
    const response = await httpService.get(PostEndPoint, { params: { _limit: limit } });
    return response.data;
  },

  delete: async (postId) => {
    const response = await httpService.delete(`${PostEndPoint}/${postId}`);
    return response.data;
  },
};

export default postService;
