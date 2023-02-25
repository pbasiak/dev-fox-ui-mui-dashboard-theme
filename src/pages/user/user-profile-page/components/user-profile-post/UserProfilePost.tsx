import { IconButton, Menu, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material';
import { UserPost } from '../../../../../types/user/userPostsTypes';
import { UserAvatar } from '../../../../../components/user-avatar/UserAvatar';
import { User } from '../../../../../types/user/userTypes';
import React from 'react';
import { Comment, Delete, Edit, Favorite, MoreVert, Share } from '@mui/icons-material';
import { UserProfileComment } from '../user-profile-comment/UserProfileComment';

export const UserProfilePost = ({ post, user }: { post: UserPost, user: User }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const commentsList = post.comments.map(comment => {
    return (
      <UserProfileComment comment={comment} />
    )
  });

  return (
    <Paper sx={{ padding: 2 }}>
      <Stack spacing={3}>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            <UserAvatar />
            <Stack>
              <Stack spacing={0.5} direction={'row'} alignItems={'center'}>
                <Typography fontSize={'14px'} fontWeight={'500'}>{user.firstName} {user.lastName}</Typography>
                <Typography fontSize={'14px'}>updated status</Typography>
              </Stack>
              <Typography fontSize={'12px'}>{post.created}</Typography>
            </Stack>
          </Stack>
          <div>
            <IconButton
              id="post-menu-button"
              aria-controls={open ? 'post-menu-button' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MoreVert />
            </IconButton>
            <Menu
              id="post-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'post-menu-button',
              }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
              <MenuItem onClick={handleClose}>
                <Typography fontSize={'16px'} display={'inline-flex'} alignItems={'center'}>
                  <Edit fontSize={'inherit'} /><span>&nbsp;Edit</span>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Typography fontSize={'16px'} display={'inline-flex'} alignItems={'center'}>
                  <Share fontSize={'inherit'} /><span>&nbsp;Share</span>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Typography color={'error'} fontSize={'16px'} display={'inline-flex'} alignItems={'center'}>
                  <Delete fontSize={'inherit'} /><span>&nbsp;Delete</span>
                </Typography>
              </MenuItem>
            </Menu>
          </div>
        </Stack>

        <Stack>
          {post.description}
        </Stack>

        <Stack direction={'row'} justifyContent={'space-between'}>
          <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
            <IconButton><Favorite color={'primary'} /></IconButton>
            <Typography variant={'body2'}>{post.likes}</Typography>
          </Stack>

          <Stack direction={'row'} alignItems={'center'}>
            <IconButton><Comment /></IconButton>
            <Typography variant={'body2'}>{post.commentsTotal} comment(s)</Typography>
          </Stack>
        </Stack>
        {commentsList}

        <Stack direction={'row'} spacing={2}>
          <UserAvatar />
          <TextField fullWidth size={'small'} placeholder={'Write a comment...'} />
        </Stack>
      </Stack>
    </Paper>
  );
}