const { ipcRenderer } = require('electron')

export const plexusConnectionDetails = () => {
    const portStr = process.env['PLEXUS_BROKER_WEBSOCKET_PORT']
    const port = portStr ? parseInt(portStr) : 8010;
    const wssPortStr = process.env['PLEXUS_BROKER_WEBSOCKETSECURE_PORT']
    const wssPort = wssPortStr ? parseInt(wssPortStr) : null; // 8011
    const appInstanceId = process.env['PLEXUS_APP_INSTANCE_ID'] || "3HDK3L4NM5JK4L3M3K4N5N5L4M3JK3L2";

    return {
        ws: {
            port: port,
            wssPort: wssPort
        },
        appInstanceId: appInstanceId
    }

}

// @ts-ignore
global.electronAPI = {
    plexusConnectionDetails: plexusConnectionDetails(),
    ipcRenderer: ipcRenderer
  }
