import { ISR_BYPASS_TOKEN } from '$env/static/private';

export const config = {
  isr: {
    bypassToken: ISR_BYPASS_TOKEN,
    expiration: 60
  }
};
