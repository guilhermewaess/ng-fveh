import { NgFvehLibService } from './ng-fveh-lib.service';
import { Messages } from './interfaces';

describe('NgFvehLibService', () => {
  let service: NgFvehLibService;
  let messagesConfigurationMock: Messages;

  beforeEach(() => {
    messagesConfigurationMock = {
      maxlength: errorObject =>
        `Max: ${errorObject.requiredLength}, typed: ${
          errorObject.actualLength
        }`,
    };
    service = new NgFvehLibService(messagesConfigurationMock);
  });

  describe('getMessage', () => {
    let payload;
    beforeEach(() => {
      payload = { requiredLength: 1, actualLength: 2 };
    });
    it('should return message with payload', () => {
      const result = service.getMessage('maxlength', payload);
      expect(result).toEqual(
        `Max: ${payload.requiredLength}, typed: ${payload.actualLength}`,
      );
    });
  });
});
