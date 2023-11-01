'use client'
import React, { FormEventHandler, useCallback } from 'react';
import JsonPlaceholderAPI from '@/api/JsonPlaceholderAPI/JsonPlaceholderAPI';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

interface DeletePostProps {
    id: number
}

const DeletePostForm = ({id} : DeletePostProps) =>{
const router = useRouter();

const handelSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    async (e) =>{
        e.preventDefault();
        if (!confirm('Please confirm that you want to delete this post.')) {
            return;
          }
        await JsonPlaceholderAPI.deletePost({id: id})
        router.replace('/posts', { scroll: true })
}, [id, router]);

return(
    <form onSubmit={handelSubmit}>
        <Button variant="contained" color="error" type='submit'>Delete post</Button>
    </form>
)
}

export default DeletePostForm

