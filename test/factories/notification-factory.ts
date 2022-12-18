import { randomUUID } from 'node:crypto';
import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('This is a notification'),
    category: 'fake-category',
    recipientId: randomUUID(),
    ...override,
  });
}
