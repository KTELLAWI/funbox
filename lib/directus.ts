import { createDirectus, rest,authentication } from '@directus/sdk';

const client = createDirectus('https://api.funbox.yhh.ae/').with(authentication()).with(rest());
// todo // replace token with env.proccess
client.setToken('JuHOR8WnzLwsDbWKlVlnY2PO7GMLM1Kh');
export default client;