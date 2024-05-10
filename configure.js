

const convict = require('convict');

let config = convict({
  api_url: {
    doc: 'The application api url.',
    default: 'localhost:3000',
    env: 'API_URL',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 3000,
    env: 'PORT',
  },
  env:{
    doc:'Rand',
    default:'development',
    env: 'ENV',
  },
  id:{
    doc:'A random Id',
    default:2,
    env: 'ID',
  }
  // Add more configuration options as needed
});



async function fetchConfigFromServer() {
    try {
        const response = await fetch("https://663cd0ca17145c4d8c37c523.mockapi.io/api/v1/config");
      if (!response.ok) {
        throw new Error(`Failed to fetch config: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching config:', error.message);
      throw error;
    }
  }


async function register() {
    try{
        const serverConfig = await fetchConfigFromServer();
        config.load(serverConfig[0]);
        config.validate({ allowed: 'strict' });
        console.log('Configuration loaded successfully:', config.getProperties());
        return config
    }
    catch (error) {
        console.error('Error fetching/loading config value:', error.message);
        //Need to add default config
      }
}

module.exports = {
    register,config
}

