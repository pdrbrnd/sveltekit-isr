import { ISR_BYPASS_TOKEN } from '$env/static/private';

export const load = () => {
  return {
    number: Math.random()
  };
};

export const config = {
  isr: {
    bypassToken: ISR_BYPASS_TOKEN,
    expiration: 60 * 10 // 10 minutes
  }
};
