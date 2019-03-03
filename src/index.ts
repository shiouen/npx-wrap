import { ChildProcess } from "child_process";

import cs from 'cross-spawn';

/**
 * Spawns a command prefixed with 'npx' wrapped by a Promise.
 *
 * @param command The command prefixed with 'npx'
 * @param args Child process args
 * @param options Child process options
 * @param output If true stdout and stderr of the ChildProcess will be passed on to the console.
 * @returns Promise<any>
 */
export async function async(command: string, args: string[] = [], options: {} = {}, output: boolean = true): Promise<any> {
    await new Promise((resolve, reject): void => {
        const child: ChildProcess = spawn(command, args, options);

        if (output) {
            child.stdout.on('data', (data) => {
                console.info(data);
            });

            child.stderr.on('data', (data) => {
                console.error(data);
            });
        }

        child.once('exit', (code: number): void => {
            if (code !== 0) reject(code);
            resolve(child);
        });
    });
}

/**
 * Spawns a command prefixed with 'npx'
 *
 * @param command The command prefixed with 'npx'
 * @param args Child process args
 * @param options Child process options
 * @returns ChildProcess The resulting ChildProcess
 */
export function spawn(command: string, args: string[] = [], options: object = {}): ChildProcess {
    return cs.spawn('npx', [command, ...args], options);
}

export const npx = { async, spawn };
export default npx;
