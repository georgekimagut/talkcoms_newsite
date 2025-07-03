 async get_blogs() {
      try {
        const { data, error } = await supabase.from("blogs").select("*");

        if (error) {
          console.log(error);
          return;
        }

        this.blogs = data;
        this.filtered_blogs = [...data]; // or data.slice()
        this.all_blog_tracker = [...data];

        const retrieved_types = [
          { name: "All", category_class: "text-secondary" },
        ];
        const retrieved_categories = [
          { name: "All", category_class: "text-secondary" },
        ];
        //take blog categories from blogs
        this.blogs.forEach((blog) => {
          //push types to types arrays
          retrieved_types.push({
            name: blog.blog_type,
            category_class: "text-secondary",
          });
          //push categories to categories array
          retrieved_categories.push({
            name: blog.category,
            active_category: false,
          });
        });
        // filter blogs with similar types
        this.categories = Object.values(
          retrieved_types.reduce((blog_type, item) => {
            blog_type[item.name] = item;
            return blog_type;
          }, {})
        );
        //filter blogs with similary
        this.blog_categories = Object.values(
          retrieved_categories.reduce((category, item) => {
            category[item.name] = item;
            return category;
          }, {})
        );
      } catch (error) {
        console.log(error);
      }
    },