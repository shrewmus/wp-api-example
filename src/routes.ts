import {Router} from 'express';
import {WP} from './wp';
import {Renderer} from './renderer';

const router = Router();

router.get('/posts', async (req, res) => {
  try {
    const post = await WP.getPosts();
    res.json(post);
  } catch (error: any) {
    res.status(500).json({error: error.message});
  }
});

router.get('/posts/:id', async (req, res) => {

  try {
    const post = await WP.getPost(Number(req.params.id));
    res.send(Renderer.generatePost(post));
    // res.json(post);
  } catch (error: any) {
    res.status(500).json({error: error.message});
  }
});

export default router;
