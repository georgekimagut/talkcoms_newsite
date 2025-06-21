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

export async function get_services() {
  try {
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
      return null; // or throw error;
    }

    const services = data.map((service) => {
      const { data: imageData } = supabase.storage
        .from("talkcoms")
        .getPublicUrl(`services/${service.pic}`);

      return {
        ...service,
        imageUrl: imageData.publicUrl,
      };
    });
    return services;
  } catch (error) {
    console.log(error);
    return null; // or throw error;
  }
}

//run methods here
get_services();
