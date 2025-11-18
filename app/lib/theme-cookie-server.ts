import { cookies } from 'next/headers';
import { THEME_COOKIE_NAME, Theme } from './theme-types';

export async function getThemeFromCookies(): Promise<Theme> {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get(THEME_COOKIE_NAME);
  
  // Default to dark theme if no cookie is set
  return (themeCookie?.value as Theme) || 'dark';
}
