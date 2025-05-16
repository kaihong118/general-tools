import geoip from 'geoip-country';

const ips = ['138.19.253.118'];

for (const ip of ips) {
  const result = geoip.lookup(ip);
  console.log(result);
}
