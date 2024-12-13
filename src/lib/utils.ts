import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatDate(
  timestamp: number,
  options: Intl.DateTimeFormatOptions,
  locales: string = 'en-EN'
) {
  return new Date(timestamp * 1000).toLocaleDateString(locales, options);
}

export function formatTime(
  timestamp: number,
  options: Intl.DateTimeFormatOptions,
  locales: string = 'en-EN'
) {
  return new Date(timestamp * 1000).toLocaleTimeString(locales, options);
}
