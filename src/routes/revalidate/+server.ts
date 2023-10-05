import { HOSTNAME, ISR_BYPASS_TOKEN } from '$env/static/private';
import { error, text } from '@sveltejs/kit';

const removeTrailingSlash = (path: string) => path.replace(/\/$/, '');

export const GET = async ({ url, fetch }) => {
  const path = url.searchParams.get('path');

  if (!path) {
    throw error(400, 'Missing path');
  }

  try {
    await fetch(`${removeTrailingSlash(HOSTNAME)}/${removeTrailingSlash(path)}`, {
      headers: {
        'x-prerender-revalidate': ISR_BYPASS_TOKEN
      }
    });

    return text('OK');
  } catch (err) {
    throw error(500, 'Failed to invalidate');
  }
};
