import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '9poq38zn',
    dataset: 'production',
  },
  studioHost: 'howstrumpdoing',
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  deployment: {
    autoUpdates: true,
    appId: 'r3deeadlgxu8zi9rzgijgq4u',
  },
})
