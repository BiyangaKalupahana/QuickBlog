import React from 'react';
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext'; 
import toast from 'react-hot-toast';


const CommentTableItem = ({ comment, fetchComments }) => {
    
   const {blog, createdAt, _id} = comment;
   const BlogDate = new Date(createdAt);

    const { axios } = useAppContext(); 

    const approveComment = async()=>{
        try{
            const {data} = await axios.post('/admin/approve-comment', {id: _id})
            if(data.success){
                toast.success(data.message)
                fetchComments()
            } else{
                toast.error(data.message)
            }
        } catch (error){
            toast.error(error.message)
        }
    }


    const deleteComment = async()=>{
        try{

            const confirm = window.confirm('Are you sure you want to delete this comment?');
            if(!confirm) return;
            const {data} = await axios.post('/admin/delete-comment', {id: _id})
            if(data.success){
                toast.success(data.message)
                fetchComments()
            } else{
                toast.error(data.message)
            }
        } catch (error){
            toast.error(error.message)
        }
    }

    

    return (
        <tr className='border-y border-gray-300'>
            <td className='px-6 py-4'>
                <b className='font-medium text-gray-600'>Blog</b> : {BlogTitle}
                <br />
                <br />
                <b className='font-medium text-gray-600'>Name</b> : {name}
                <br />
                <b className='font-medium text-gray-600'>Comment</b> : {comment.content} {/* Corrected typo 'Commment' */}
            </td>

            <td className='px-6 py-4 max-sm:hidden'>
                {CommentDate.toLocaleDateString()}
            </td>

            <td className='px-6 py-4'>
                <div className='inline-flex items-center gap-4'>
                    {!isApproved ?
                        // Tick icon for approving comment (only if not approved)
                        <img
                            src={assets.tick_icon}
                            className='w-5 hover:scale-110 transition-all cursor-pointer'
                            onClick={approveComment} // Add click handler
                            alt=""
                        />
                        : <p className='text-xs border border-green-600 bg-green-100 text-green-700 rounded-full px-3 py-1'>Approved</p>
                    }
                    
                    <img
                        src={assets.bin_icon}
                        alt=""
                        className='w-5 hover:scale-110 transition-all cursor-pointer'
                        onClick={deleteComment} // Add click handler
                    />
                </div>
            </td>
        </tr>
    );
};

export default CommentTableItem;