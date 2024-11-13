import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I’m an experienced Product Owner and Project Manager with an engineering background, specializing in Microsoft collaboration tools and data-driven projects. With an entrepreneurial mindset and a passion for AI, I’m always exploring innovative solutions that drive real impact.

As a people-focused leader, I believe in creating supportive environments where teams can thrive and collaborate seamlessly. I take pride in being a hands-on manager who cares deeply about team growth and development, fostering an agile approach that brings out the best in everyone. My strong organizational skills and ability to connect with C-level management allow me to keep projects aligned with strategic goals while keeping people at the heart of everything I do.

Driven by curiosity and a commitment to staying at the forefront of industry trends, I’m dedicated to leveraging new advancements in AI and data to bring fresh perspectives and solutions to my clients.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
