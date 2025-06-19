'use client'
import { redirect, useParams } from 'next/navigation';
import { useEffect, useState } from "react";
import datablogs from "@/src/data/db.json";

interface Blog {
    id: number;
    image: string;
    imageLink?: string; // Optional for create case
    title: string;
    description: string;
    category: string;
}

const BlogDetailsPage = () => {
    const { id } = useParams();

    const [blog, setBlog] = useState<Blog>({
        id: 0,
        image: "",
        title: "",
        imageLink: "",
        description: "",
        category: "",
    });

    useEffect(() => {
        if (id && typeof id === "string" && id !== "create") {
            // Fetch blog data from API (simulate for now)
            const blogId = parseInt(id, 10);
            const fetchedBlog = datablogs.find((b) => b.id === blogId);
            if (fetchedBlog) setBlog(fetchedBlog);
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBlog((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        console.log("Saving blog:", blog);

    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        console.log("Uploading image:", file.name);

        const reader = new FileReader();
        reader.onloadend = () => {
            setBlog((prev) => ({ ...prev, image: file.name as string, imageLink: reader.result as string }));
        };

        reader.readAsDataURL(file);

        
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <h1 >{id !== "create" ? 'Edit' : 'Create'} Blog</h1>
            <div >
                <div>
                    <label htmlFor="uploadImage" className="block font-medium">Upload Image</label>
                    <input
                        id="uploadImage"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full border p-2 rounded"
                    />

                    {blog.image && (
                        <div className="mt-4">
                            <p className="text-sm text-gray-600 mb-1">Preview:</p>
                            <img src={blog.imageLink} alt="Uploaded" className="w-40 h-40 object-cover rounded border" />
                        </div>
                    )}
                </div>

                <div>
                    <label htmlFor="title" className="block font-medium">Title</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        value={blog.title}
                        onChange={handleChange}
                        style={{ width: '100%' }}
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block font-medium">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={blog.description}
                        onChange={handleChange}
                        style={{ width: '100%' }}
                    />
                </div>

                <div>
                    <label htmlFor="category" className="block font-medium">Category</label>
                    <input
                        id="category"
                        name="category"
                        type="text"
                        value={blog.category}
                        onChange={handleChange}
                        style={{ width: '100%' }}
                    />
                </div>
                <div>
                    <button onClick={handleSave} style={{ marginRight: '10px', backgroundColor: '#4CAF50', color: 'white', borderRadius: '5px' }}>
                        Save Change
                    </button>
                    <button onClick={() => redirect('/admin')}>
                        Cancel
                    </button>
                </div>

            </div>
        </div>
    );
};

export default BlogDetailsPage;
