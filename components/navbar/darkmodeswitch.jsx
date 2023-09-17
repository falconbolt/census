import React from 'react';
import {useTheme as useNextTheme} from 'next-themes';
import {Switch, useTheme} from '@nextui-org/react';
import { SunIcon } from '../icons/navbar/SunIcon';
import { MoonIcon } from '../icons/navbar/MoonIcon';


export const DarkModeSwitch = () => {
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();

   return (
      
      <Switch
          checked={isDark}
          size="xl"
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
              iconOn={<SunIcon filled={true as any} />}
          iconOff={<MoonIcon filled />}
        />
       
   );
};
