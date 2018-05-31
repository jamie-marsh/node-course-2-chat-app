const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Jamie';
        var text = 'Test message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toContain({from, text});
    })
})