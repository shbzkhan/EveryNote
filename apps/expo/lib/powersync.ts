import { PowerSyncClient } from '@powersync/react';
import { SQLiteDatabaseAdapter } from '@powersync/expo';

export const powersync = new PowerSyncClient({
  application:process.env.APP_ID,
  adapter: new SQLiteDatabaseAdapter(),
});
