import { ChildProcess } from "child_process";

import cs from 'cross-spawn';

async function async (command: string, args: string[] = []): Promise<any> {
    await new Promise((resolve, reject): void => {
        const child: ChildProcess = spawn(command, args, {
            stdio: 'inherit'
        });

        child.once('exit', (code: number): void => {
            if (code !== 0) reject();
            resolve();
        });
    });
}

function spawn (command: string, args: string[] = [], options: object = {}): ChildProcess {
    return cs.spawn('npx', [command, ...args], options);
}

export default {
    async,
    spawn
}