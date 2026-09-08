import { useState } from 'react';
import { alpha } from '@mui/material/styles';
import { Box, Button, ButtonBase, Chip, IconButton, Stack, Typography } from '@mui/material';
import AddRounded from '@mui/icons-material/AddRounded';
import ChevronLeftRounded from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRounded from '@mui/icons-material/ChevronRightRounded';
import { PageHeader } from '../../components/page-header';
import { SectionCard } from '../../components/section-card';
import { EmptyState } from '../../components/empty-state';
import { useFeedback } from '../../components/feedback';
import { useLocalStorage } from '../../hooks/use-local-storage';
import { localDate, dateLabel } from '../../lib/format';
import { createInitialEvents, monthDays } from './data';
import type { CalendarEvent } from './data';
import { EventDialog } from './event-dialog';
const categoryColors = { Meeting: 'info', 'Focus time': 'success', Milestone: 'primary' } as const;
export default function CalendarPage() {
  const [month, setMonth] = useState(new Date());
  const [selected, setSelected] = useState(localDate(new Date()));
  const [events, setEvents] = useLocalStorage('devfox:events', createInitialEvents());
  const [editing, setEditing] = useState<CalendarEvent | 'new' | null>(null);
  const notify = useFeedback();
  const selectedEvents = events.filter((event) => event.date === selected).sort((a, b) => a.time.localeCompare(b.time));
  const goMonth = (offset: number) => setMonth(new Date(month.getFullYear(), month.getMonth() + offset, 1));
  return (
    <>
      <PageHeader
        title='Calendar'
        description='A little structure. More space for what matters.'
        action={
          <Button variant='contained' startIcon={<AddRounded />} onClick={() => setEditing('new')}>
            Create event
          </Button>
        }
      />
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', xl: 'minmax(0, 1fr) 280px' }, gap: 2.5 }}>
        <SectionCard noPadding>
          <Stack
            direction='row'
            sx={{ justifyContent: 'space-between', alignItems: 'center', p: { xs: 1.5, sm: 2.5 } }}
          >
            <Typography variant='h3'>
              {month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </Typography>
            <Stack direction='row' sx={{ alignItems: 'center', gap: 0.5 }}>
              <Button
                size='small'
                variant='outlined'
                onClick={() => {
                  setMonth(new Date());
                  setSelected(localDate(new Date()));
                }}
              >
                Today
              </Button>
              <IconButton aria-label='Previous month' onClick={() => goMonth(-1)}>
                <ChevronLeftRounded />
              </IconButton>
              <IconButton aria-label='Next month' onClick={() => goMonth(1)}>
                <ChevronRightRounded />
              </IconButton>
            </Stack>
          </Stack>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0, 1fr))' }}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <Typography
                key={day}

                variant='caption'

                sx={{ textAlign: 'center', color: 'text.secondary', py: 1.5, bgcolor: 'action.hover' }}
              >
                {day}
              </Typography>
            ))}
            {monthDays(month).map((date) => {
              const key = localDate(date);
              const dayEvents = events.filter((event) => event.date === key);
              return (
                <ButtonBase
                  key={key}
                  onClick={() => setSelected(key)}
                  aria-label={`${dateLabel(key)}, ${dayEvents.length} events`}
                  aria-pressed={selected === key}
                  sx={{
                    minHeight: { xs: 72, sm: 104 },
                    p: 1,
                    borderTop: '1px solid',
                    borderRight: '1px solid',
                    borderColor: 'divider',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    justifyContent: 'flex-start',
                    bgcolor: selected === key ? (theme) => alpha(theme.palette.primary.main, 0.06) : 'transparent',
                    boxShadow: selected === key ? (theme) => `inset 0 0 0 1px ${theme.palette.primary.main}` : 'none',
                    color: date.getMonth() === month.getMonth() ? 'text.primary' : 'text.secondary',
                  }}
                >
                  <Box
                    component='span'
                    sx={{
                      width: 24,
                      height: 24,
                      display: 'grid',
                      placeItems: 'center',
                      mb: 0.5,
                      borderRadius: '50%',
                      fontSize: 11,
                      ...(key === localDate(new Date())
                        ? { bgcolor: 'primary.main', color: 'primary.contrastText' }
                        : {}),
                    }}
                  >
                    {date.getDate()}
                  </Box>
                  {dayEvents.slice(0, 2).map((event) => (
                    <Box
                      component='span'
                      key={event.id}
                      sx={(theme) => ({
                        textAlign: 'left',
                        color: theme.palette[categoryColors[event.category]].main,
                        bgcolor: alpha(theme.palette[categoryColors[event.category]].main, 0.08),
                        borderRadius: 0.5,
                        px: 0.5,
                        mb: 0.5,
                        fontSize: 9,
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        maxWidth: '100%',
                      })}
                    >
                      <Box component='span' sx={{ display: { xs: 'none', sm: 'inline' } }}>
                        {event.title}
                      </Box>
                      <Box component='span' sx={{ display: { sm: 'none' } }}>
                        ●
                      </Box>
                    </Box>
                  ))}
                  {dayEvents.length > 2 && <Typography variant='caption'>+{dayEvents.length - 2} more</Typography>}
                </ButtonBase>
              );
            })}
          </Box>
        </SectionCard>
        <SectionCard title={dateLabel(selected)} description='A look at your day'>
          <Stack sx={{ gap: 2, mt: 1 }}>
            {selectedEvents.map((event) => (
              <ButtonBase
                key={event.id}
                onClick={() => setEditing(event)}
                sx={{
                  display: 'block',
                  textAlign: 'left',
                  borderLeft: '3px solid',
                  borderColor: `${categoryColors[event.category]}.main`,
                  pl: 1.5,
                  py: 1,
                }}
              >
                <Typography variant='caption' sx={{ color: 'text.secondary' }}>
                  {event.time}
                </Typography>
                <Typography variant='subtitle2' sx={{ my: 0.5 }}>
                  {event.title}
                </Typography>
                <Chip label={event.category} variant='outlined' />
              </ButtonBase>
            ))}
          </Stack>
          {!selectedEvents.length && (
            <EmptyState title='A little breathing room' description='No events scheduled for this day.' />
          )}
          <Button
            fullWidth
            variant='outlined'
            startIcon={<AddRounded />}
            sx={{ mt: 2 }}
            onClick={() => setEditing('new')}
          >
            Add an event
          </Button>
        </SectionCard>
      </Box>
      {editing && (
        <EventDialog
          date={selected}
          event={editing === 'new' ? undefined : editing}
          onClose={() => setEditing(null)}
          onDelete={(id) => {
            setEvents((items) => items.filter((event) => event.id !== id));
            setEditing(null);
            notify('Event deleted.');
          }}
          onSave={(event) => {
            setEvents((items) =>
              editing === 'new' ? [...items, event] : items.map((item) => (item.id === event.id ? event : item)),
            );
            setSelected(event.date);
            setMonth(new Date(`${event.date}T12:00:00`));
            setEditing(null);
            notify('Event saved.');
          }}
        />
      )}
    </>
  );
}
