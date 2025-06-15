// client/src/components/admin/CommentTableItem.jsx

import React from 'react';
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext'; // Import useAppContext to get axios
import toast from 'react-hot-toast'; // Import toast for notifications
import moment from 'moment'; // Assuming you have moment for date formatting

const CommentTableItem = ({ comment, fetchComments }) => {
    // Destructure comment properties.
    // Use `comment || {}` to handle cases where `comment` itself might be null/undefined.
    // Use `blog = {}` to provide a default empty object if `comment.blog` is undefined,
    // so `blog.title` doesn't cause an error.
    const { name, content, createdAt, _id, isApproved, blog = {} } = comment || {};

    // Safely get the blog title, defaulting to 'N/A' if blog or blog.title is missing
    const BlogTitle = blog.title || 'N/A';
    const CommentDate = new Date(createdAt); // Renamed from BlogDate for clarity

    const { axios } = useAppContext(); // Get axios from context

    // Handler for approving a comment
    const handleApproveComment = async () => {
        try {
            // Use axios from context for API call
            const response = await axios.post('/admin/approve-comment', { id: _id });
            if (response.data.success) {
                toast.success('Comment approved successfully!');
                fetchComments(); // Re-fetch comments to update the list
            } else {
                toast.error(response.data.message || 'Failed to approve comment.');
            }
        } catch (error) {
            console.error('Error approving comment:', error);
            toast.error(error.response?.data?.message || error.message || 'Error approving comment.');
        }
    };

    // Handler for deleting a comment
    const handleDeleteComment = async () => {
        try {
            // Use axios from context for API call
            const response = await axios.post('/admin/delete-comment', { id: _id });
            if (response.data.success) {
                toast.success('Comment deleted successfully!');
                fetchComments(); // Re-fetch comments to update the list
            } else {
                toast.error(response.data.message || 'Failed to delete comment.');
            }
        } catch (error) {
            console.error('Error deleting comment:', error);
            toast.error(error.response?.data?.message || error.message || 'Error deleting comment.');
        }
    };

    return (
        <tr className='border-y border-gray-300'>
            <td className='px-6 py-4'>
                <b className='font-medium text-gray-600'>Blog</b> : {BlogTitle}
                <br />
                <br />
                <b className='font-medium text-gray-600'>Name</b> : {name}
                <br />
                <b className='font-medium text-gray-600'>Comment</b> : {content} {/* Corrected typo 'Commment' */}
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
                            onClick={handleApproveComment} // Add click handler
                            alt="Approve Comment"
                        />
                        :
                        // "Approved" badge
                        <p className='text-xs border border-green-600 bg-green-100 text-green-700 rounded-full px-3 py-1'>Approved</p>
                    }
                    {/* Bin icon for deleting comment */}
                    <img
                        src={assets.bin_icon}
                        alt="Delete Comment"
                        className='w-5 hover:scale-110 transition-all cursor-pointer'
                        onClick={handleDeleteComment} // Add click handler
                    />
                </div>
            </td>
        </tr>
    );
};

export default CommentTableItem;