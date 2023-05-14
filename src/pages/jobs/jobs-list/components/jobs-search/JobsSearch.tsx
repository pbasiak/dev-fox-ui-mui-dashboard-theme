import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';
import { useCallback, useState } from 'react';
import { SearchOutlined } from '@mui/icons-material';

export const JobsSearch = () => {
  const [salary, setSalary] = useState<string>('20');
  const [location, setLocation] = useState<string>('');

  const handleSalaryChange = useCallback((event: SelectChangeEvent<string>) => {
    setSalary(event.target.value as string);
  }, []);

  const handleLocationChange = useCallback((event: SelectChangeEvent<string>) => {
    setLocation(event.target.value as string);
  }, []);

  return (
    <Stack direction={'row'} spacing={0.5} alignItems={'stretch'}>
      <TextField id="outlined-basic" label="Search" variant="filled" fullWidth />
      <FormControl fullWidth>
        <InputLabel id="salary-select-label">Salary</InputLabel>
        <Select
          labelId="salary-select-label"
          id="salary-select"
          value={salary}
          label="Age"
          onChange={handleSalaryChange}
          variant={'filled'}
        >
          <MenuItem value={'10'}>$10.000</MenuItem>
          <MenuItem value={'20'}>$20.000</MenuItem>
          <MenuItem value={'50'}>$50.000</MenuItem>
          <MenuItem value={'100'}>$100.000</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="location-select-label">Location</InputLabel>
        <Select
          labelId="location-select-label"
          id="location-select"
          value={location}
          label="Age"
          onChange={handleLocationChange}
          variant={'filled'}
          placeholder={'Location'}
        >
          <MenuItem value={'chicago'}>Chicago</MenuItem>
          <MenuItem value={'san-francisco'}>San Francisco</MenuItem>
          <MenuItem value={'new-york'}>New York</MenuItem>
        </Select>
      </FormControl>
      <Button endIcon={<SearchOutlined />} variant={'contained'} sx={{ minWidth: 'auto' }}>Search</Button>
    </Stack>
  )
}