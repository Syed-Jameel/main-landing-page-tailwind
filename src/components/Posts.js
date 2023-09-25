const posts = [
  {
    id: 1,
    date: "August 5, 2020",
    readDuration: "4",
    title: "Creativo Para Jóvenes: a Designer’s UI/UX Complete Checklist.",
    href: "/",
    imageSrc: "https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/clb_blog_21-882x1024.jpeg",
    imageAlt: "creativo",
  },

  {
    id: 2,
    date: "August 3, 2020",
    readDuration: "4",
    title: "Definitive Guide to Make a Daily More Productive Working Flow.",
    href: "/",
    imageSrc: "https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/clb_blog_20-min-1323x1536.jpeg",
    imageAlt: "definitive",
  },
  {
    id: 3,
    date: "July 5, 2020",
    readDuration: "4",
    title: "The High-Quality Architecture Solutions from a Silicon Valley.",
    href: "/",
    imageSrc: "https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/clb_blog_6-936x1024.jpg",
    imageAlt: "high-quality",
  },
  {
    id: 4,
    date: "August 3, 2020",
    readDuration: "4",
    title: "Definitive Guide to Make a Daily More Productive Working Flow.",
    href: "/",
    imageSrc: "https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/clb_blog_20-min-1323x1536.jpeg",
    imageAlt: "definitive",
  },
  // More products...
];

export default function Posts() {
  return (
    <div className="bg-white">
      <h2 className="mt-8  sm:mt-6 text-2xl font-bold tracking-tight text-gray-900">Related Posts</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {posts.map((post) => (
          <div key={post.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img src={post.imageSrc} alt={post.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div className="mt-4 flex flex-col items-start justify-between gap-4">
              <div className="flex justify-between align-middle ">
                <div>
                  <h3 className="inline-block text-sm font-semibold text-gray-900">{post.date}</h3>
                  <span className="px-2 text-red-600 ">&#x2022;</span>
                  <span className="text-gray-700 text-sm">
                    {post.readDuration}
                    min read
                  </span>
                </div>
              </div>

              <p className="text-xl font-bold text-gray-900">{post.title}</p>

              <div className="space-x-2">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-semibold py-1 px-2 rounded">Digital</button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-semibold py-1 px-2 rounded">Marketing</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
