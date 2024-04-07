import { Box, styled } from '@mui/material';

export const CalendarStyles = styled(Box)(({ theme }) => ({
  '.react-calendar': {
    width: '100%',
    maxWidth: '100%',
    background: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',

    '&--doubleView': {
      width: '700px',
    },

    '&--doubleView, &__viewContainer': {
      display: 'block',
      margin: '0.5em',
      flexGrow: 1,
    },

    button: {
      border: 0,
      transition: theme.transitions.create(['background-color', 'box-shadow'], {
        duration: theme.transitions.duration.short,
      }),

      '&:enabled:hover': {
        cursor: 'pointer',
      },
    },

    '&__navigation': {
      height: '44px',
      display: 'flex',
      marginBottom: theme.spacing(1),

      '&__arrow': {
        fontSize: '22px',
      },

      button: {
        minWidth: '44px',
        background: '#DDD',

        '&:disabled': {
          backgroundColor: theme.palette.action.disabledBackground,
        },

        '&:enabled:hover, &:enabled:focus': {
          backgroundColor: theme.palette.action.hover,
        },
      },
    },

    '&__month-view': {
      '&__weekdays': {
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: theme.typography.fontWeightBold,
        fontSize: '0.75rem',

        '&__weekday': {
          padding: theme.spacing(1),
        },
      },

      '&__weekNumbers': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: theme.typography.fontWeightBold,
        fontSize: '0.75rem',

        '.react-calendar__tile': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: theme.typography.fontWeightBold,
          // fontSize: '0.75em',
        },
      },

      '&__days': {
        '&__day': {
          '&--weekend': {
            color: theme.palette.error.main,
          },

          '&--neighboringMonth': {
            color: theme.palette.text.secondary,
          },
        },
      },
    },

    '&__year-view, &__decade-view, &__century-view': {
      '.react-calendar__tile': {
        padding: theme.spacing(2, 0.5),
      },
    },

    '&__tile': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      maxWidth: '100%',
      padding: theme.spacing(0),
      background: 'none',
      textAlign: 'center',
      minHeight: '100px',
      transition: theme.transitions.create(['background-color', 'box-shadow'], {
        duration: theme.transitions.duration.short,
      }),

      abbr: {
        textAlign: 'right',
        padding: theme.spacing(1),
        fontSize: 12,
        fontWeight: theme.typography.fontWeightRegular,
      },

      '&:disabled': {
        backgroundColor: theme.palette.action.disabledBackground,
      },

      '&:enabled:hover': {
        // backgroundColor: theme.palette.action.hover,
      },

      '&--now': {
        backgroundColor: theme.palette.action.selected,

        '&:enabled:hover, &:enabled:focus': {
          // backgroundColor: theme.palette.action.hover,
        },
      },

      '&--hasActive': {
        // backgroundColor: theme.palette.action.active,

        '&:enabled:hover, &:enabled:focus': {
          // backgroundColor: theme.palette.action.hover,
        },
      },

      '&--active': {
        // backgroundColor: theme.palette.primary.main,
        // color: theme.palette.primary.contrastText,

        '&:enabled:hover, &:enabled:focus': {
          // backgroundColor: theme.palette.primary.dark,
        },
      },
    },

    '&--selectRange': {
      '.react-calendar__tile:hover': {
        // backgroundColor: theme.palette.action.hover,
      },
    },
  },
}));
