import { redirect } from '@sveltejs/kit';

const getOptimalRegion = () => 'us';
const getOptimalLang = () => 'en';

export const load = async ({ params }) => {
  const region = getOptimalRegion();
  const lang = getOptimalLang();

  throw redirect(307, `/${region}/${lang}/${params.path}`.replace(/\/$/, ''));
};
