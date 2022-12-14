import { SendNotification } from './send-notication';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'exemple-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
