import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ContactUs from "../views/ContactUs.vue";
import Faqs from "../views/Faqs.vue";
import Blogs from "../views/Blogs.vue";
import ServiceView from "../views/dynamic/ServiceView.vue";
import SuccessStories from "../views/SuccessStories.vue";
import ResourceView from "../views/dynamic/ResourceView.vue";
import NotFound from "../views/NotFound.vue";
import SolutionView from "../views/dynamic/SolutionView.vue";
import CaseStudies from "../views/CaseStudies.vue";
import Testimonials from "../views/Testimonials.vue";

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
    path: "/service/:id",
    name: "Single Service",
    component: ServiceView,
    meta: { title: "Services" },
    props: true,
  },
  {
    path: "/solution/:id",
    name: "Single Industry",
    component: SolutionView,
    meta: { title: "Solutions by Industry" },
    props: true,
  },
  {
    path: "/success-stories",
    name: "Success Stories",
    component: SuccessStories,
    meta: { title: "Success Stories" },
  },
  {
    path: "/case-studies",
    name: "Case Studies",
    component: CaseStudies,
    meta: { title: "Case Studies" },
  },
  {
    path: "/resources/:type/:id",
    name: "Resource",
    component: ResourceView,
    meta: { title: "Resources" },
    props: true,
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: Testimonials,
    meta: { title: "Testimonials" },
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
