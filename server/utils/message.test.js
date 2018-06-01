const expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Jamie';
        var text = 'Test message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toContain({from, text});
    })
})

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Jamie';
        var latitude = 1234;
        var longitude = 5678;
        var url = 'https://www.google.com/maps?q=1234,5678';
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toContain({from, url});
    });
});