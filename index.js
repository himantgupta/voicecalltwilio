const http = require('http');
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const REST_PORT = (process.env.PORT || 5111);
http
  .createServer((req, res) => {
    // Create TwiML response
    const twiml = new VoiceResponse();

    twiml.say('Welcome to Kalimera India, Please wait a min and we will be with you shortly.');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  })
  .listen(REST_PORT, () => {
    console.log('Rest service ready on port ' + REST_PORT);
});


