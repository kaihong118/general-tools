import { AxiosHelper } from '@wallet-manager/node-package-axios';
import { API } from '@wallet-manager/node-package-server';
import winston from 'winston';

export async function assignAxios() {
  const logger = winston.createLogger({
    level: 'info',
    transports: [new winston.transports.Console()],
  });

  const exchangeRateAxios = await AxiosHelper.createAxios(
    {
      baseURL: 'https://v6.exchangerate-api.com',
      timeout: 30000,
      sensitiveEndpointSetting: {},
    },
    logger
  );

  const replacer = {
    apiKey: '396f4dba244b9693bd289515',
    baseCode: 'HKD',
    targetCode: 'GBP',
  };
  let endpoint = '/v6/:apiKey/pair/:baseCode/:targetCode';
  for (const key of Object.keys(replacer)) {
    endpoint = endpoint.replace(`:${key}`, encodeURIComponent(replacer[key]));
  }

  const result = await exchangeRateAxios.get<API.ResponseBase>(endpoint);
  logger.info(result.data);
}

export async function test() {
  await assignAxios();
}
test();
