"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const Base_controller_1 = __importDefault(require("./Base.controller"));
class PostController extends Base_controller_1.default {
    constructor() {
        super(...arguments);
        this.path = '/posts';
        this.getAllPosts = async (req, res) => {
            // const posts = await this.postRepository.find();
            res.json({ posts: 'Test' });
            return;
        };
    }
    // private postRepository = getRepository(Post);
    intitRoutes() {
        this.router.get(this.path, this.getAllPosts);
    }
}
exports.PostController = PostController;
//# sourceMappingURL=Post.controller.js.map