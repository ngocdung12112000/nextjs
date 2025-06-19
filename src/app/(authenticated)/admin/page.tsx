"use client";
import Button from "@/src/components/Button";
import { useState, useEffect } from "react";
import { redirect } from 'next/navigation';
import datablogs from "@/src/data/db.json";

type Blog = {
  id: number;
  image: string;
  imageLink?: string; // Optional for create case
  title: string;
  description: string;
  category: string;
};

export default function Admin() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    // Replace with real API call
    setBlogs(datablogs);
  }, []);

  const handleEditClick = (blog: Blog) => {
    console.log("Edit blog:", blog);
    // Redirect to edit page or open modal
    redirect(`/admin/blog/${blog.id}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <h1 >Admin Dashboard</h1>
        <div style={{ marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div >Welcome to the admin dashboard. Here you can manage your blogs.</div>
          <Button className="create" onClick={() => redirect('/admin/blog/create')}>
            Create
          </Button>
        </div>
      </div>
      <table style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: '5px'}}>
        <thead>
          <tr style={{ backgroundColor: "rgb(155 180 233)"}}>
            <th style={{padding: '5px', border: '1px solid #000000', width: '50px'}}>Index</th>
            <th style={{padding: '5px', border: '1px solid #000000'}}>Title</th>
            <th style={{padding: '5px', border: '1px solid #000000'}}>Description</th>
            <th style={{padding: '5px', border: '1px solid #000000'}}>Category</th>
            <th style={{padding: '5px', border: '1px solid #000000', textAlign: 'center'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td style={{padding: '5px', border: '1px solid #bfbfbf', textAlign: 'center', fontWeight: 'bolder'}}>{blog.id}</td>
              <td style={{padding: '5px', border: '1px solid #bfbfbf'}}>{blog.title}</td>
              <td style={{padding: '5px', border: '1px solid #bfbfbf'}}>{blog.description}</td>
              <td style={{padding: '5px', border: '1px solid #bfbfbf'}}>{blog.category}</td>
              <td style={{padding: '5px', border: '1px solid #bfbfbf', width: '150px'}}>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                  <Button className="edit" onClick={() => handleEditClick(blog)}>Edit</Button>
                  <Button className="delete">Delete</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
