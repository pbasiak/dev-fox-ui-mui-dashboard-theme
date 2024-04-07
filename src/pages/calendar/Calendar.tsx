import { Box, Container, Typography } from '@mui/material';
import Calendar from 'react-calendar';

import { CalendarStyles } from '../../components/calendar/styled';
import { useCalendar } from '../../hooks/api/use-calendar/useCalendar';
import { useState } from 'react';

export const CalendarPage = () => {
  const { data } = useCalendar();
  const [hoveredEvent, setHoveredEvent] = useState<string>('');

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (!data) return;

    if (view === 'month') {
      const events = data.find((data) => {
        const newDate = new Date(data.date);
        return (
          date.getFullYear() === newDate.getFullYear() &&
          date.getMonth() === newDate.getMonth() &&
          date.getDate() === newDate.getDate()
        );
      });

      if (events?.events) {
        const eventsList = events.events
          .sort((a, b) => {
            return new Date(a.startDate).getTime() - new Date(a.endDate).getTime() >
              new Date(b.startDate).getTime() - new Date(b.endDate).getTime()
              ? 1
              : -1;
          })
          .map((event) => {
            const dateFromStart = new Date(event.startDate);
            const dateFromEnd = new Date(event.endDate);
            const isMultiDayEvent = dateFromEnd.getTime() - dateFromStart.getTime() >= 86400000;
            const isFirstDay = dateFromStart.getDate() === date.getDate() && isMultiDayEvent;
            const isLastDay = dateFromEnd.getDate() === date.getDate() && isMultiDayEvent;
            const showEventName = isFirstDay || !isMultiDayEvent;
            const eventTime = dateFromStart.toLocaleTimeString('en-US', {
              hour: '2-digit',
            });

            const isHover = hoveredEvent === event.id;
            const handleMouseOver = () => setHoveredEvent(event.id);
            const handleMouseLeave = () => setHoveredEvent('');

            return (
              <Box
                className={'react-calendar__tile-content'}
                data-id={event.id}
                key={event.id}
                sx={{
                  position: 'relative',
                  mb: 0.5,
                  pl: !isMultiDayEvent ? 2 : 0.5,
                  backgroundColor: isMultiDayEvent ? 'primary.main' : 'transparent',
                  color: isMultiDayEvent ? 'primary.contrastText' : 'text.primary',
                  borderRadius: isFirstDay ? '4px 0 0 4px' : isLastDay ? '0 4px 4px 0' : isMultiDayEvent ? '0' : '4px',
                  cursor: 'pointer',
                  transition: 'all 0.1s ease-in-out',
                  ...(isHover && {
                    backgroundColor: isMultiDayEvent ? 'primary.dark' : 'grey.200',
                  }),
                }}
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseLeave}
              >
                {!isMultiDayEvent && (
                  <>
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        position: 'absolute',
                        top: '50%',
                        left: 8,
                        content: '""',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                  </>
                )}
                <Typography
                  fontSize={12}
                  textAlign={'left'}
                  title={event.name}
                  textOverflow={'ellipsis'}
                  overflow={'hidden'}
                  whiteSpace={'nowrap'}
                >
                  {!isMultiDayEvent && (
                    <Typography component={'span'} fontSize={'inherit'}>
                      {eventTime}{' '}
                    </Typography>
                  )}
                  <Typography component={'span'} fontSize={'inherit'} fontWeight={'fontWeightMedium'}>
                    {showEventName ? event.name : <>&nbsp;</>}
                  </Typography>
                </Typography>
              </Box>
            );
          });
        return eventsList;
      }
    }

    return;
  };

  return (
    <Container>
      <CalendarStyles>
        <Calendar tileContent={tileContent} onChange={console.log} value={new Date()} />
      </CalendarStyles>
    </Container>
  );
};
