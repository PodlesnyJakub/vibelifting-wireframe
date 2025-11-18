import { cookies } from 'next/headers';
import { THEME_COOKIE_NAME, Theme } from './theme-types';

export async function getThemeFromCookies(): Promise<Theme> {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get(THEME_COOKIE_NAME);
  
  // Default to light theme (Applifting style)
  return (themeCookie?.value as Theme) || 'light';
}
