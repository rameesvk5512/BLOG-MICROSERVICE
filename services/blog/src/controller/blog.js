
import { sequelize } from "../utils/db.js";
import { QueryTypes } from "sequelize";
import { redisClient } from "../server.js";


export const getAllBlogs=async(req,res)=>{

try {

    const {searchQuery="",category=""}=req.query

    const cachKey= `blogs:${searchQuery} : ${category}`

    const cached=await redisClient.get(cachKey)
    if(cached){
        console.log("serving from redis");
       res.status(200).json(JSON.parse(cached))
      return  
    }
        const blogs = await sequelize.query('SELECT * FROM blogs', {
  type: QueryTypes.SELECT,
});

await redisClient.set(cachKey,JSON.stringify(blogs),{EX:3600})
console.log("serving from db");

    return res.status(200).json({
      blogs,
     
    });
} catch (error) {
        console.error('Error fetching blog:', error);
    return res.status(500).json({ message: 'Internal server error' });
    
}

}
export const getSingleBlog = async (req,res) => {
  try {
    const { id } = req.params;
const cachKey=`blog:${id}`
   const cached=await redisClient.get(cachKey)
    if(cached){
        console.log("serving single from redis");
       res.status(200).json(JSON.parse(cached))
      return  
    }
    
    const [blog] = await sequelize.query(
      'SELECT * FROM blogs WHERE id = :id',
      {
        replacements: { id },
        type: QueryTypes.SELECT,
      }
    );

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    await redisClient.set(cachKey,JSON.stringify(blog),{EX:3600})
console.log("serving from db");

  
{//**    const userRes = await axios.get(`${process.env.USER_SERVICE}/api/v1/user/${blog.auther;console.log(userRes); */
}

    return res.status(200).json({
      blog,
     
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};