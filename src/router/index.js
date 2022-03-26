import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import Blog from "../pages/Blog.vue";
import Post from "../pages/Post.vue";
import Interest from "../pages/Interest.vue";
import User from "../pages/User.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
  },
  {
    path: "/interest",
    name: "Interest",
    component: Interest,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
