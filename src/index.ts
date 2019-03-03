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
    try {
        const child = await new Promise((resolve, reject): void => {
            const child: ChildProcess = spawn(command, args, options);
            const stdio = [];

            child.stdout.on('data', (data) => {
                const info = data.toString().trim();
                stdio.push(info);

                if (output) console.info(info);
            });

            child.stderr.on('data', (data) => {
                const err = data.toString().trim();
                stdio.push(err);

                if (output) console.info(err);
            });

            child.once('exit', (code: number, signal: string): void => {
                if (code !== 0 || signal) reject({ stdio, code, signal });
                resolve(child);
            });
        });

        return child;
    } catch (err) {
        throw err;
    }
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
