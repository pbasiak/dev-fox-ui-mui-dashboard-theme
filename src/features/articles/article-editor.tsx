import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Stack, TextField } from '@mui/material';
import type { Article } from './data';
import { localDate } from '../../lib/format';
export function ArticleEditor({
  article,
  onClose,
  onSave,
}: {
  article?: Article;
  onClose: () => void;
  onSave: (article: Article) => void;
}) {
  const [form, setForm] = useState({
    title: article?.title ?? '',
    excerpt: article?.excerpt ?? '',
    content: article?.content ?? '',
    category: article?.category ?? 'Design',
    status: article?.status ?? 'Draft',
  });
  return (
    <Dialog open onClose={onClose} maxWidth='md' fullWidth aria-labelledby='article-editor-title'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!form.title.trim() || !form.content.trim()) return;
          onSave({
            ...form,
            title: form.title.trim(),
            id: article?.id ?? crypto.randomUUID(),
            date: article?.date ?? localDate(new Date()),
            color: article?.color ?? '#c97b54',
            motif: article?.motif ?? 0,
          });
        }}
      >
        <DialogTitle id='article-editor-title'>{article ? 'Edit your story' : 'Every idea has a story'}</DialogTitle>
        <DialogContent>
          <Stack sx={{ gap: 2.5, pt: 1 }}>
            <TextField
              label='Title'
              autoFocus
              required
              value={form.title}
              onChange={(event) => setForm({ ...form, title: event.target.value })}
            />
            <TextField
              label='Short description'
              required
              value={form.excerpt}
              onChange={(event) => setForm({ ...form, excerpt: event.target.value })}
            />
            <Stack direction='row' sx={{ gap: 2 }}>
              <TextField
                fullWidth
                select
                label='Category'
                value={form.category}
                onChange={(event) => setForm({ ...form, category: event.target.value })}
              >
                {['Design', 'Engineering', 'Productivity', 'Product'].map((value) => (
                  <MenuItem key={value} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                select
                label='Status'
                value={form.status}
                onChange={(event) => setForm({ ...form, status: event.target.value as Article['status'] })}
              >
                <MenuItem value='Draft'>Draft</MenuItem>
                <MenuItem value='Published'>Published</MenuItem>
              </TextField>
            </Stack>
            <TextField
              label='Your story'
              multiline
              minRows={9}
              required
              value={form.content}
              onChange={(event) => setForm({ ...form, content: event.target.value })}
              helperText='Write in plain text. Separate paragraphs with a blank line.'
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button variant='contained' type='submit'>
            Save article
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
