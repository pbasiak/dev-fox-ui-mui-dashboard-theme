import { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import AddRounded from '@mui/icons-material/AddRounded';
import EditOutlined from '@mui/icons-material/EditOutlined';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import CloseRounded from '@mui/icons-material/CloseRounded';
import { PageHeader } from '../../components/page-header';
import { SearchField } from '../../components/search-field';
import { StatusChip } from '../../components/status-chip';
import { EmptyState } from '../../components/empty-state';
import { ConfirmDialog } from '../../components/confirm-dialog';
import { useFeedback } from '../../components/feedback';
import { useLocalStorage } from '../../hooks/use-local-storage';
import { dateLabel } from '../../lib/format';
import { initialArticles } from './data';
import type { Article } from './data';
import { ArticleArt } from './article-art';
import { ArticleEditor } from './article-editor';
export default function ArticlesPage() {
  const [articles, setArticles] = useLocalStorage('devfox:articles', initialArticles);
  const [category, setCategory] = useState('All articles');
  const [query, setQuery] = useState('');
  const [reading, setReading] = useState<Article | null>(null);
  const [editing, setEditing] = useState<Article | 'new' | null>(null);
  const [deleting, setDeleting] = useState<Article | null>(null);
  const notify = useFeedback();
  const filtered = articles.filter(
    (article) =>
      (category === 'All articles' ||
        (category === 'Drafts' ? article.status === 'Draft' : article.category === category)) &&
      `${article.title} ${article.excerpt}`.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <PageHeader
        title='Stories worth sharing'
        description='Ideas, updates, and a little inspiration from the workspace.'
        action={
          <Button variant='contained' startIcon={<AddRounded />} onClick={() => setEditing('new')}>
            Write an article
          </Button>
        }
      />
      <Stack direction={{ xs: 'column', lg: 'row' }} sx={{ justifyContent: 'space-between', mb: 3, gap: 2 }}>
        <Tabs
          value={category}
          onChange={(_, value: string) => setCategory(value)}
          variant='scrollable'
          aria-label='Article category'
        >
          {['All articles', 'Design', 'Engineering', 'Productivity', 'Drafts'].map((value) => (
            <Tab key={value} value={value} label={value} />
          ))}
        </Tabs>
        <SearchField value={query} onChange={setQuery} placeholder='Search articles…' />
      </Stack>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' },
          gap: 2.5,
        }}
      >
        {filtered.map((article) => (
          <Card key={article.id}>
            <CardActionArea onClick={() => setReading(article)}>
              <ArticleArt color={article.color} motif={article.motif} />
              <Box sx={{ p: 2.5 }}>
                <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                  <Chip label={article.category} variant='outlined' />
                  <StatusChip status={article.status} />
                </Stack>
                <Typography variant='h3' sx={{ minHeight: 50 }}>
                  {article.title}
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary', mt: 1, minHeight: 44 }}>
                  {article.excerpt}
                </Typography>
              </Box>
            </CardActionArea>
            <Stack direction='row' sx={{ alignItems: 'center', px: 2.5, pb: 2, gap: 1 }}>
              <Avatar sx={{ width: 27, height: 27, fontSize: 9 }}>AM</Avatar>
              <Typography variant='caption' sx={{ color: 'text.secondary' }}>
                {dateLabel(article.date)}
              </Typography>
              <Box sx={{ ml: 'auto' }}>
                <IconButton size='small' aria-label={`Edit ${article.title}`} onClick={() => setEditing(article)}>
                  <EditOutlined sx={{ fontSize: 17 }} />
                </IconButton>
                <IconButton size='small' aria-label={`Delete ${article.title}`} onClick={() => setDeleting(article)}>
                  <DeleteOutlined sx={{ fontSize: 17 }} />
                </IconButton>
              </Box>
            </Stack>
          </Card>
        ))}
      </Box>
      {!filtered.length && <EmptyState />}
      {editing && (
        <ArticleEditor
          article={editing === 'new' ? undefined : editing}
          onClose={() => setEditing(null)}
          onSave={(article) => {
            setArticles((items) =>
              editing === 'new' ? [article, ...items] : items.map((item) => (item.id === article.id ? article : item)),
            );
            setEditing(null);
            notify('Article saved to your workspace.');
          }}
        />
      )}
      <Dialog
        open={Boolean(reading)}
        onClose={() => setReading(null)}
        maxWidth='md'
        fullWidth
        aria-labelledby='reading-title'
      >
        {reading && (
          <>
            <Box sx={{ position: 'relative' }}>
              <ArticleArt color={reading.color} motif={reading.motif} />
              <IconButton
                aria-label='Close article'
                onClick={() => setReading(null)}
                sx={{ position: 'absolute', right: 12, top: 12, bgcolor: 'background.paper' }}
              >
                <CloseRounded />
              </IconButton>
            </Box>
            <DialogContent sx={{ p: { xs: 3, sm: 5 } }}>
              <Chip label={reading.category} variant='outlined' />
              <Typography id='reading-title' variant='h1' sx={{ mt: 2, mb: 2 }}>
                {reading.title}
              </Typography>
              <Typography variant='body2' sx={{ color: 'text.secondary', mb: 4 }}>
                Alex Morgan · {dateLabel(reading.date)}
              </Typography>
              {reading.content.split('\n\n').map((paragraph, index) => (
                <Typography key={index} sx={{ mb: 2.5, lineHeight: 1.9 }}>
                  {paragraph}
                </Typography>
              ))}
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setReading(null)}>Close</Button>
              <Button
                variant='contained'
                onClick={() => {
                  setEditing(reading);
                  setReading(null);
                }}
              >
                Edit article
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
      <ConfirmDialog
        open={Boolean(deleting)}
        title='Delete article?'
        description={`“${deleting?.title}” will be removed from this demo workspace.`}
        onClose={() => setDeleting(null)}
        onConfirm={() => {
          setArticles((items) => items.filter((item) => item.id !== deleting?.id));
          setDeleting(null);
          notify('Article deleted.');
        }}
      />
    </>
  );
}
