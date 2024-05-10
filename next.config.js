
const {config,register} = require('./configure');
// const nextConfig = {
//   webpack : (config) =>{
//     config.resolve.fallback = {fs: false,path: false};
//     return config;
//   },
//   experimental: { instrumentationHook: true },
//   serverRuntimeConfig: {
//     // Pass the configuration to the server runtime
//     config: await register(config),
//   },

//   env:{DUMMY_VAR:"whatever",API_URL:"test.com"},
//   reactStrictMode: true,
//   swcMinify: true,
//   // webpack5: true,
 
 
// }

module.exports = async() =>{
  try{
    const config = await register()

    return{
      serverRuntimeConfig: {
        config: config,
      },
      env:{DUMMY_VAR:"whatever",API_URL:"test.com"},
      reactStrictMode: true,
      swcMinify: true,

    }
}catch (error) {
  console.error('Error loading configuration:', error);
  // Return default configuration if an error occurs
  return {
    serverRuntimeConfig: {
      config: config,
      //the above config should be a default one
    },
    env:{DUMMY_VAR:"whatever",API_URL:"test.com"},
    reactStrictMode: true,
    swcMinify: true,

  }
}
}
