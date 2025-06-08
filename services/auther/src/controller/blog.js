
import { Blog } from "../models/Blog.js";
import { invalidateCacheJob } from "../utils/rabitMq.js";




export const createBlog=async(req,res)=>{
   
try {
  const {title,description,blogContent,category}=req.body

await Blog.create({title,description,blogContent,category})
invalidateCacheJob(['blogs:*'])
res.status(200).json({message:"new blog created"})
} catch (error) {
  
   console.error('Update error:', error);
    return res.status(500).json({ message: 'Internal server error' });

}
}


export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, blogContent, category } = req.body;

    const [updatedRows] = await Blog.update(
      { title, description, blogContent, category },
      { where: { id } }
    );
invalidateCacheJob(['blogs:*'])
    return res.status(200).json({ message: 'Blog updated successfully' });
  } catch (error) {
    console.error('Update error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteBlog=async(req,res)=>{
    const{id}=req.params
try {
  await Blog.destroy({
  where:{id}
})
invalidateCacheJob(['blogs:*'])
return res.status(200).json({ message: 'Blog deleted successfully' });

} catch (error) {
  console.error('Update error:', error);
    return res.status(500).json({ message: 'Internal server error' });
}

}