
const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 8000,
    chunk_size: 60000,
    gop_cache: true,
    ping: 50,
    ping_timeout: 60,
	rtmp:'ec2-3-110-196-1.ap-south-1.compute.amazonaws.com:8000/'
  },
  https: {
    port: 4000,
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(config)
nms.run();