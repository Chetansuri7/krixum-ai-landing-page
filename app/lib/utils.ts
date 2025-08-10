import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function redirectToChat(path: string = '') {
  const chatUrl = new URL('/', 'https://chat.krixum.com');
  window.open(chatUrl.href, '_blank', 'noopener,noreferrer');
}