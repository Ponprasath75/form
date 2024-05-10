// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import {register,config} from '../../instrumentation';
// export default async function handler(req, res) {
//   const { serverRuntimeConfig } = getConfig();
//   const config = serverRuntimeConfig.config;

//   console.log(config.get('api_url'));
//   console.log(config.get('port'));

//   res.status(200).json({ message: 'Config values accessed in the backend!' });
// }


import getConfig from 'next/config';

export default async function handler(req, res) {

  const { serverRuntimeConfig } = getConfig();
  const config = serverRuntimeConfig.config;

  console.log(config.get('api_url'));

  const url = config.get('api_url')
  const result = await fetch(url);
  const data = await result.json();

  res.status(200).json({data})

}
