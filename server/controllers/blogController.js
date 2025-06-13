


export const addBlog = async (req, res)=>{
        try{
            const {title, subTitle, description, category, isPublished} = JSON.parse(req.body.blog);
            const imageFile = req.file;

            //check if all fields are present
            if(!title || !subTitle || !description || !category || !isPublished){
                return res.json({success: false, message:"Missing required fields"})
            }
        } catch(error) {

        }
}