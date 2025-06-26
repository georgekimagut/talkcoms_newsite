import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ContactUs from "../views/ContactUs.vue";
import Faqs from "../views/Faqs.vue";
import Blogs from "../views/Blogs.vue";
import ServiceView from "../views/ServiceView.vue";
import SuccessStories from "../views/SuccessStories.vue";
import ResourceView from "../views/ResourceView.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Home" },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { title: "About Us" },
  },
  {
    path: "/contact-us",
    name: "Contact us",
    component: ContactUs,
    meta: { title: "Contact us" },
  },
  {
    path: "/faqs",
    name: "Faqs",
    component: Faqs,
    meta: { title: "FAQs" },
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
    meta: { title: "Blogs" },
  },
  {
    path: "/service/:id/:service_id",
    name: "Single Service",
    component: ServiceView,
    meta: { title: "Service" },
    props: true,
  },
  // {
  //   path: "/product/:id",
  //   name: "Single Product",
  //   component: ServiceView,
  //   meta: { title: "Service" },
  //   props: true,
  // },
  {
    path: "/success-stories",
    name: "Success Stories",
    component: SuccessStories,
    meta: { title: "Success Stories" },
  },
  {
    path: "/resources/:type/:id",
    name: "Resource",
    component: ResourceView,
    meta: { title: "Resources" },
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title ? `Talkcoms - ${to.meta.title}` : "Talkcoms";
  next();
});

export default router;
