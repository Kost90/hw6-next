'use client'
import React, { FormEventHandler, useCallback } from 'react';
import JsonPlaceholderAPI from '@/api/JsonPlaceholderAPI/JsonPlaceholderAPI';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

interface DeleteUserFormProps {
  userId: string;
}

const DeleteUserForm = ({ userId }: DeleteUserFormProps) => {
  const router = useRouter();

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    async (event) => {
      event.preventDefault();
      if (!confirm('Please confirm that you want to delete this user.')) {
        return;
      }
      await JsonPlaceholderAPI.deleteUser({ userId: Number(userId) });

      router.replace('/users', { scroll: true })
    },
    [router, userId],
  );

  return (
    <form
      onSubmit={handleSubmit}
    >
      <Button variant="contained" color="error" type="submit">
        Delete User
      </Button>
    </form>
  );
};

export default DeleteUserForm;
