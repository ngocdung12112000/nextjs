"use client";
import { useState, useEffect } from "react";

const dummyBlogs = [
  {
    id: 1,
    image: "https://via.placeholder.com/100",
    title: "First Blog",
    description: "This is the first blog post.",
    category: "Tech",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/100",
    title: "Second Blog",
    description: "This is the second blog post.",
    category: "Lifestyle",
  },
];

type Blog = {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
};

export default function Admin() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    // Replace with real API call
    setBlogs(dummyBlogs);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Blogs</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr style={{ backgroundColor: "rgb(155 180 233)"}}>
            <th style={{padding: '5px', border: '1px solid #000000'}}>Title</th>
            <th style={{padding: '5px', border: '1px solid #000000'}}>Description</th>
            <th style={{padding: '5px', border: '1px solid #000000'}}>Category</th>
            <th style={{padding: '5px', border: '1px solid #000000', textAlign: 'center'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td style={{padding: '5px', borderBottom: '1px solid black'}}>{blog.title}</td>
              <td style={{padding: '5px', borderBottom: '1px solid black'}}>{blog.description}</td>
              <td style={{padding: '5px', borderBottom: '1px solid black'}}>{blog.category}</td>
              <td style={{padding: '5px', borderBottom: '1px solid black'}}>
                <div>Edit</div>
                <div>Delete</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
