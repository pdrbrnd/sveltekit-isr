import { redirect } from '@sveltejs/kit';

const getOptimalLang = () => 'en';

export const load = async ({ params }) => {
  const lang = getOptimalLang();

  throw redirect(307, `/${params.region}/${lang}/${params.path}`.replace(/\/$/, ''));
};
