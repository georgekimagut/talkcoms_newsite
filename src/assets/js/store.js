//imports
import { supabase } from "./supabase";

//theme colors
export const theme_colors = [
  { color_name: "#131f6b" }, //default_color
  { color_name: "#fefffe" }, //white_color
  { color_name: "#82bc00" }, //secondary_color
  { color_name: "#007cba" }, //third_color
];
//text colors
export const text_colors = [
  { color_name: "#131f6b" }, //default_color
  { color_name: "#82bc00" }, //secondary_color
  { color_name: "#007cba" }, //third_color
];

export const apiEndpoint =
  "https://cms.talkcoms.co.uk/api/blog-posts?populate=*";
export const baseUrl = "https://cms.talkcoms.co.uk"; // Base URL for Strapi
export const is_blog = "blog";
