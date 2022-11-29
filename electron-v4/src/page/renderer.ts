import { ConsumerClientBuilder } from '../gen/electron/ConsumerGeneratedClient';

const setButton = document.getElementById('btn') as any
const titleInput = document.getElementById('title') as any
const codeBlock = document.getElementById('codeBlock') as any
const webButton = document.getElementById('webButton') as any
const reconnectButton = document.getElementById('reconnectButton') as any



const log = (message: string) => {
    codeBlock.innerText = codeBlock.innerText + '\n' + message
}

const initPlexus = (globalObj: any) => {
    const plexusConnectionDetails = globalObj.electronAPI.plexusConnectionDetails;
    console.log(plexusConnectionDetails)
    log(`Plexus port=${plexusConnectionDetails.ws.port} wssPort=${plexusConnectionDetails.ws.wssPort} appInstanceId=${plexusConnectionDetails.appInstanceId}`)
    globalObj.electronAPI.plexus = globalObj.electronAPI.plexus || {};
    globalObj.electronAPI.plexus.getConnectionDetails = () => plexusConnectionDetails
}

const runningApp = async () => {
    log("Starting plexus connection to brocker")
    initPlexus(self)
    let client = await new ConsumerClientBuilder().connect()
    log(`CLient starter ${client}`)

    setButton.addEventListener('click', () => {
        (window as any).ipcRenderer.send('set-title', titleInput.value)
    });
    
    webButton.addEventListener('click', async () => {
        log('Get greeting from web app...')
        const greetingResponse = await client.getWebGreetingServiceProxy().getGreeting({ name: 'Neo'})
        log(`Got response: ${greetingResponse.greeting}`)
    });

    reconnectButton.addEventListener('click', async () => {
        log('Connecting to broker...')
        let client = await new ConsumerClientBuilder().connect()
        log(`Created new client ${client}`)
    });
}

runningApp()